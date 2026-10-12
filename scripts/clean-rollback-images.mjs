import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))
const productionImages = resolve(projectRoot, 'dist/images')
const rollbackScreenshots = [
  'bw-customized-furniture-homepage.png',
  'kasa-maharlika-homepage.png',
  'monjoe-homepage.png',
  'primesteps-homepage.png',
  'shurra-homepage.png',
]

for (const filename of rollbackScreenshots) {
  await rm(resolve(productionImages, filename), { force: true })
}
