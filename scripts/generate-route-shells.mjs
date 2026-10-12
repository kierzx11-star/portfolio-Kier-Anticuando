import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

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

for (const [route, page] of Object.entries(metadata)) {
  let html = template
  html = updateTitle(html, page.title)
  html = updateMeta(html, 'name', 'description', page.description)
  html = updateCanonical(html, page.canonicalUrl)
  html = updateMeta(html, 'property', 'og:title', page.ogTitle)
  html = updateMeta(html, 'property', 'og:description', page.ogDescription)
  html = updateMeta(html, 'property', 'og:url', page.canonicalUrl)
  html = updateMeta(html, 'name', 'twitter:title', page.ogTitle)
  html = updateMeta(html, 'name', 'twitter:description', page.ogDescription)

  // Assert each route shell contains one correct copy of every required field.
  for (const [label, value] of Object.entries({ title: page.title, description: page.description, canonicalUrl: page.canonicalUrl, ogTitle: page.ogTitle, ogDescription: page.ogDescription })) {
    if (!html.includes(value)) throw new Error(`Generated ${route} shell is missing ${label}`)
  }

  const outputPath = route === '/' ? resolve(outputDirectory, 'index.html') : resolve(outputDirectory, route.slice(1), 'index.html')
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, html)
  console.log(`Generated ${outputPath}`)
}
