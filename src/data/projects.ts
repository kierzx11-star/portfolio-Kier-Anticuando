export type Project = {
  slug: string; name: string; url?: string; image?: string; imageKind: 'screenshot' | 'concept'; featured?: boolean;
  category: 'WordPress' | 'Website Builder' | 'Website Development' | 'Academic Concept';
  technologies: string[]; summary: string; role: string; accent: string; mark: string;
};

export const projects: Project[] = [
  { slug: 'kasa-maharlika', name: 'Kasa Maharlika', url: 'https://kasamaharlika.com/', image: '/images/kasa-maharlika-homepage.png', imageKind: 'screenshot', featured: true, category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Website development for Kasa Maharlika, a collection of hospitality properties rooted in Filipino heritage.', role: 'Website developer', accent: '#8a6a49', mark: 'KM' },
  { slug: 'monjoe', name: 'Monjoe', url: 'https://monjoes.com/', image: '/images/monjoe-homepage.png', imageKind: 'screenshot', featured: true, category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Website development for Mon Joe’s Garden Cafe, presenting its menu and garden dining experience.', role: 'Website developer', accent: '#ba633c', mark: 'MJ' },
  { slug: 'primesteps', name: 'PrimeSteps', url: 'https://primestepslh.com/', image: '/images/primesteps-homepage.png', imageKind: 'screenshot', category: 'Website Builder', technologies: ['GoDaddy Website Builder'], summary: 'Website development for PrimeSteps Learning Hub, an early learning center in Pasig.', role: 'Website developer', accent: '#64947e', mark: 'PS' },
  { slug: 'shurra', name: 'Shurra Group of Companies', url: 'https://shurragroupofcompanies.com/', image: '/images/shurra-homepage.png', imageKind: 'screenshot', category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Website development for Shurra Group of Companies, featuring its cleaning and facility support services.', role: 'Website developer', accent: '#52769a', mark: 'SG' },
  { slug: 'bw-customized-furniture', name: 'B&W Customized Furniture', url: 'https://bwcustomizedfurniture.com/', image: '/images/bw-customized-furniture-homepage.png', imageKind: 'screenshot', featured: true, category: 'Website Development', technologies: [], summary: 'Website development for a custom furniture business featuring kitchen cabinetry, wardrobes, TV consoles, and made-to-measure furniture.', role: 'Website developer', accent: '#9a8068', mark: 'B&W' },
  { slug: 'barili-tourism-app', name: 'Barili Tourism App', imageKind: 'concept', category: 'Academic Concept', technologies: [], summary: 'Academic tourism information-system concept for Barili, Cebu, with proposed QR destination guides, visitor tracking, reporting, and destination inquiries.', role: 'Academic project concept', accent: '#4f8cad', mark: 'BT' },
];

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'CMS & Website Development', items: ['WordPress', 'Website builders'] },
  { group: 'Backend & Data', items: ['Supabase', 'Firebase', 'APIs & database concepts'] },
  { group: 'Programming · Learning', items: ['C#', '.NET', 'ASP.NET Core', 'SQL Server'] },
  { group: 'Design', items: ['Canva', 'Figma'] },
  { group: 'Automation', items: ['AI-assisted development', 'Workflow automation · developing'] },
];
