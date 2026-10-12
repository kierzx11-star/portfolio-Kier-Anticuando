# Project showcase image-generation prompts

Generate these as four separate images, not as a collage. These are standalone photographs for portfolio project cards, not website screenshots or representations of the exact live client websites.

## Shared output requirements

- Landscape 16:10, ideally 1600 × 1000 pixels or higher.
- Premium photorealistic editorial photography, crisp details, realistic natural light, carefully art-directed composition.
- The photograph itself should fill the entire frame and make the project industry immediately recognizable.
- Keep the important subject near the center so the image remains clear with responsive `object-fit: cover` cropping.
- No website interface, browser window, device frame, text, logos, watermarks, collage, or decorative gradients.

## 1. Kasa Maharlika — `kasa-maharlika-concept.webp`

```text
Create a single premium photorealistic editorial photograph for a Filipino hospitality portfolio project. Show an elegant, welcoming hotel room or refined accommodation interior as the unmistakable main subject: warm natural wood, subtle heritage-inspired Filipino architectural details and woven textures, beautiful bedding, tasteful furnishings, and soft morning sunlight entering the room. Use a sophisticated palette of warm ivory, beige, muted earth tones, and a restrained orange accent in the environment. The feeling is comfort, cultural character, and refined hospitality, with realistic materials, natural shadows, and crisp professional travel-magazine photography. Compose as a wide landscape 16:10 photograph, ideally 1600 × 1000 or larger, with the room as the main focus and important details near the center for responsive cropping. This is an original AI-generated concept photograph, not an image of the actual Kasa Maharlika property. No people, text, letters, signs, logos, watermark, website UI, browser mockup, device frame, collage, generic gradient, or exaggerated luxury clichés.
```

## 2. Monjoe — `monjoe-cafe-concept.webp`

```text
Create a single sophisticated photorealistic editorial photograph for a garden café portfolio project. Show a beautiful, inviting café space opening into lush but naturally arranged greenery, with warm sunlight, timber or rattan details, a neatly presented appealing café meal and drink in the foreground, and a calm comfortable dining atmosphere. Earthy greens, warm cream, and natural brown; fresh, appetizing, welcoming, and contemporary. Use believable food styling and real-world light, refined restaurant photography, crisp details and nuanced depth rather than an artificial AI look. Compose as a wide landscape 16:10 photograph, ideally 1600 × 1000 or larger, with the food and café scene central and safe for responsive cropping. This is an original AI-generated concept photograph, not a depiction of the exact Monjoe café or its menu. No readable text, lettering, signs, logos, watermark, website UI, browser mockup, device frame, floating food, oversaturated foliage, collage, or generic gradient.
```

## 3. Shurra Group of Companies — `shurra-corporate-concept.webp`

```text
Create a single polished photorealistic corporate editorial photograph for a corporate group portfolio project. Feature contemporary commercial architecture with clean geometric lines, glass and pale stone or concrete, a sophisticated business environment, and a restrained professional human presence only if naturally appropriate and not posed as a stock handshake. Use deep navy shadows, white and cool neutral tones, and subtle blue reflections or details. The photograph should communicate credibility, professionalism, and modern corporate identity through precise composition, realistic materials, balanced natural light, and crisp high-end architectural photography. Compose as a wide landscape 16:10 photograph, ideally 1600 × 1000 or larger, with recognizable architecture in the center and important features safe for responsive cropping. This is an original AI-generated concept photograph, not a depiction of the actual Shurra companies or premises. No readable text, logos, watermark, website UI, browser mockup, device frame, fabricated company signage, charts, collage, or generic gradient.
```

## 4. PrimeSteps — `primesteps-education-concept.webp`

```text
Create a single warm, professional photorealistic editorial photograph for an early-learning education portfolio project. Show a bright, welcoming classroom with a clear recognizable learning environment: organized books, art supplies, simple educational materials, child-sized furniture, and soft natural daylight. Use approachable blue and white with gentle yellow and warm soft accents. Make the room feel safe, supportive, polished, and family-friendly, with realistic colors, crisp material details, and natural lighting. Compose as a wide landscape 16:10 photograph, ideally 1600 × 1000 or larger, with classroom details near the center for responsive cropping. This is an original AI-generated concept photograph, not a depiction of the actual PrimeSteps location or programs. No identifiable children, text, letters, signage, logos, watermark, website UI, browser mockup, device frame, childish cartoon effects, clutter, collage, or generic gradient.
```

## Asset integration targets

After generation, place the four files under `public/images/`. The current showcase uses a generic `ProjectArt` browser mockup in `src/App.tsx`; it should be replaced with an `<img>` backed by each project's asset path, with descriptive alt text and a visible “AI-generated concept visual” label. Keep the existing reveal wrapper and project metadata. Use `object-fit: cover`, a consistent aspect ratio, and preserve the reduced-motion rules.
