import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = resolve(projectRoot, 'dist')
const metadata = JSON.parse(await readFile(resolve(projectRoot, 'src/routeMetadata.json'), 'utf8'))
const template = await readFile(resolve(outputDirectory, 'index.html'), 'utf8')

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function updateMeta(html, key, keyValue, value) {
  const tagPattern = new RegExp(`<meta\\b(?=[^>]*\\b${key}=["']${escapeRegExp(keyValue)}["'])[^>]*>`, 'i')
  const tag = html.match(tagPattern)?.[0]
  if (!tag) throw new Error(`Could not find existing ${key}=${keyValue} metadata tag`)
  const escaped = escapeAttribute(value)
  const contentPattern = /\bcontent=["'][^"']*["']/i
  if (!contentPattern.test(tag)) throw new Error(`Could not find content attribute on ${key}=${keyValue} metadata tag`)
  return html.replace(tag, tag.replace(contentPattern, `content="${escaped}"`))
}

function updateCanonical(html, canonicalUrl) {
  const tagPattern = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i
  const tag = html.match(tagPattern)?.[0]
  if (!tag) throw new Error('Could not find existing canonical link')
  const hrefPattern = /\bhref=["'][^"']*["']/i
  if (!hrefPattern.test(tag)) throw new Error('Could not find href on canonical link')
  return html.replace(tag, tag.replace(hrefPattern, `href="${escapeAttribute(canonicalUrl)}"`))
}

function updateTitle(html, title) {
  const titlePattern = /<title>[^<]*<\/title>/i
  if (!titlePattern.test(html)) throw new Error('Could not find existing title element')
  return html.replace(titlePattern, `<title>${title.replaceAll('&', '&amp;').replaceAll('<', '&lt;')}</title>`)
}

const websiteSchemaPattern = /<script\b(?=[^>]*\bid=["']homepage-website-schema["'])(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi
const aboutPersonSchemaPattern = /<script\b(?=[^>]*\bid=["']about-person-schema["'])(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi

const aboutPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kier Whensel Anticuando',
  url: metadata['/about'].canonicalUrl,
  jobTitle: 'Developer',
  sameAs: 'https://github.com/kierzx11-star',
}

function configureRouteSchemas(html, route) {
  if (route !== '/') html = html.replace(websiteSchemaPattern, '')
  if (route !== '/about') html = html.replace(aboutPersonSchemaPattern, '')

  const existingPersonSchemas = [...html.matchAll(aboutPersonSchemaPattern)]
  if (route === '/about') {
    if (existingPersonSchemas.length !== 0) {
      throw new Error(`Expected no pre-existing About Person schema before injection, found ${existingPersonSchemas.length}`)
    }
    const headEnd = html.lastIndexOf('</head>')
    if (headEnd < 0) throw new Error('Could not find the document head for About Person schema')
    const personScript = `<script type="application/ld+json" id="about-person-schema">\n${JSON.stringify(aboutPersonSchema, null, 2)}\n    </script>\n  `
    html = `${html.slice(0, headEnd)}${personScript}${html.slice(headEnd)}`
  }

  const schemaScripts = [...html.matchAll(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)]
  const expectedCount = route === '/' || route === '/about' ? 1 : 0
  if (schemaScripts.length !== expectedCount) {
    throw new Error(`Expected ${expectedCount} JSON-LD block${expectedCount === 1 ? '' : 's'} in ${route} shell, found ${schemaScripts.length}`)
  }

  if (route === '/') {
    const websiteSchema = [...html.matchAll(websiteSchemaPattern)]
    if (websiteSchema.length !== 1) throw new Error(`Expected one homepage WebSite schema, found ${websiteSchema.length}`)
    const schema = JSON.parse(websiteSchema[0][1])
    if (schema['@context'] !== 'https://schema.org' || schema['@type'] !== 'WebSite') {
      throw new Error('Homepage JSON-LD must use the Schema.org WebSite type')
    }
    if (schema.name !== 'Kier Whensel Anticuando' || schema.url !== metadata['/'].canonicalUrl) {
      throw new Error('Homepage WebSite JSON-LD name or URL does not match the configured canonical identity')
    }
  } else if (route === '/about') {
    const personSchema = [...html.matchAll(aboutPersonSchemaPattern)]
    if (personSchema.length !== 1) throw new Error(`Expected one About Person schema, found ${personSchema.length}`)
    const schema = JSON.parse(personSchema[0][1])
    if (schema['@context'] !== aboutPersonSchema['@context'] || schema['@type'] !== aboutPersonSchema['@type']) {
      throw new Error('About JSON-LD must use the Schema.org Person type')
    }
    for (const [key, value] of Object.entries(aboutPersonSchema)) {
      if (JSON.stringify(schema[key]) !== JSON.stringify(value)) {
        throw new Error(`About Person JSON-LD ${key} does not match the approved value`)
      }
    }
  }

  return html
}

function injectRootContent(html, content, route) {
  const rootPattern = /<div id="root"><\/div>/g
  const rootCount = [...html.matchAll(rootPattern)].length
  if (rootCount !== 1) throw new Error(`Expected one empty React mount in ${route} shell, found ${rootCount}`)
  return html.replace(rootPattern, `<div id="root">${content}</div>`)
}

function assertOneMatch(html, pattern, label, route) {
  const count = [...html.matchAll(pattern)].length
  if (count !== 1) throw new Error(`Expected one ${label} in ${route} shell, found ${count}`)
}

const vite = await createServer({
  configFile: resolve(projectRoot, 'vite.config.ts'),
  root: projectRoot,
  mode: 'production',
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { renderRoute } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const generatedShells = []

  for (const [route, page] of Object.entries(metadata)) {
    let html = template
    html = configureRouteSchemas(html, route)
    html = updateTitle(html, page.title)
    html = updateMeta(html, 'name', 'description', page.description)
    html = updateCanonical(html, page.canonicalUrl)
    html = updateMeta(html, 'property', 'og:title', page.ogTitle)
    html = updateMeta(html, 'property', 'og:description', page.ogDescription)
    html = updateMeta(html, 'property', 'og:url', page.canonicalUrl)
    html = updateMeta(html, 'name', 'twitter:title', page.ogTitle)
    html = updateMeta(html, 'name', 'twitter:description', page.ogDescription)

    const renderedContent = renderRoute(route)
    if (!renderedContent.includes('<main id="main-content"')) {
      throw new Error(`Rendered ${route} content is missing the main landmark`)
    }
    assertOneMatch(renderedContent, /<h1\b/gi, 'H1', route)
    html = injectRootContent(html, renderedContent, route)

    // Assert each route shell contains one correct copy of its metadata and mount.
    assertOneMatch(html, /<title>/gi, 'title', route)
    assertOneMatch(html, /<meta name="description"/gi, 'description', route)
    assertOneMatch(html, /<link rel="canonical"/gi, 'canonical URL', route)
    assertOneMatch(html, /<meta property="og:title"/gi, 'Open Graph title', route)
    assertOneMatch(html, /<meta property="og:description"/gi, 'Open Graph description', route)
    assertOneMatch(html, /<meta name="twitter:title"/gi, 'Twitter title', route)
    assertOneMatch(html, /<meta name="twitter:description"/gi, 'Twitter description', route)
    assertOneMatch(html, /<div id="root">/gi, 'React mount', route)

    for (const [label, value] of Object.entries({ title: page.title, description: page.description, canonicalUrl: page.canonicalUrl, ogTitle: page.ogTitle, ogDescription: page.ogDescription })) {
      if (!html.includes(escapeAttribute(value))) throw new Error(`Generated ${route} shell is missing ${label}`)
    }

    const outputPath = route === '/' ? resolve(outputDirectory, 'index.html') : resolve(outputDirectory, route.slice(1), 'index.html')
    generatedShells.push({ route, outputPath, html })
  }

  for (const { route, outputPath, html } of generatedShells) {
    await mkdir(dirname(outputPath), { recursive: true })
    await writeFile(outputPath, html)
    console.log(`Generated ${outputPath} with prerendered ${route} content`)
  }
} finally {
  await vite.close()
}
