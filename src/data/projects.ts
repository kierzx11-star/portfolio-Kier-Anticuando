export type Project = {
  slug: string; name: string; url?: string; image?: string; imageKind: 'screenshot' | 'concept'; featured?: boolean;
  category: 'WordPress' | 'Website Builder' | 'Website Development' | 'Academic Concept';
  technologies: string[]; summary: string; role: string; accent: string; mark: string;
};

export const projects: Project[] = [
  { slug: 'kasa-maharlika', name: 'Kasa Maharlika', url: 'https://kasamaharlika.com/', image: '/images/kasa-maharlika-homepage.webp', imageKind: 'screenshot', featured: true, category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Developed and updated the Kasa Maharlika website using WordPress and custom HTML, creating responsive property and room pages with clear content and imagery. Implemented a room and property inquiry form with an email flow to send inquiries to the owner, and worked on page-level SEO improvements.', role: 'Web Developer', accent: '#8a6a49', mark: 'KM' },
  { slug: 'monjoe', name: 'Monjoe', url: 'https://monjoes.com/', image: '/images/monjoe-homepage.webp', imageKind: 'screenshot', featured: true, category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Updated the Monjoe Garden Cafe website using WordPress and custom HTML, refining page layouts, menu presentation, content, and imagery to showcase the café’s offerings and garden dining experience. Also implemented website content and SEO updates to support a clear, user-friendly browsing experience.', role: 'Web Developer', accent: '#ba633c', mark: 'MJ' },
  { slug: 'primesteps', name: 'PrimeSteps Learning Hub', url: 'https://primestepslh.com/', image: '/images/primesteps-homepage.webp', imageKind: 'screenshot', category: 'Website Builder', technologies: ['GoDaddy Website Builder'], summary: 'Updated the PrimeSteps Learning Hub website using GoDaddy Website Builder, refining page layouts, content, and imagery to present its early-learning services clearly. Also maintained website content and prepared monthly insights reports to support ongoing website improvements and performance monitoring.', role: 'Web Developer', accent: '#64947e', mark: 'PS' },
  { slug: 'shurra', name: 'Shurra Group of Companies', url: 'https://shurragroupofcompanies.com/', image: '/images/shurra-homepage.webp', imageKind: 'screenshot', category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Updated the Shurra website using WordPress, HTML, and CSS, refining homepage imagery, typography, colors, and page styling. Revised the About Us page and team section, and implemented page-level SEO updates to improve content clarity and support search visibility.', role: 'Web Developer', accent: '#52769a', mark: 'SG' },
  { slug: 'bw-customized-furniture', name: 'B&W Customized Furniture', url: 'https://bwcustomizedfurniture.com/', image: '/images/bw-customized-furniture-homepage.webp', imageKind: 'screenshot', featured: true, category: 'Website Development', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Developed the B&W Customized Furniture website from start to finish using WordPress, HTML, and CSS. Built and refined page layouts, organized the furniture gallery, integrated product imagery and website content, and implemented responsive design and page-level SEO updates to present custom furniture clearly across devices.', role: 'Web Developer', accent: '#9a8068', mark: 'B&W' },
  { slug: 'barili-tourism-app', name: 'Barili Tourism App', imageKind: 'concept', category: 'Academic Concept', technologies: ['Kotlin', 'PHP', 'Firebase'], summary: 'Developed an individual academic tourism information system for Barili, Cebu, using Kotlin, PHP, and Firebase. Implemented and tested QR-based destination information, visitor tracking, destination inquiries, and reporting features to help visitors access tourism information and support tourism monitoring. The project is academic and is not deployed.', role: 'Individual Developer', accent: '#4f8cad', mark: 'BT' },
];

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'CMS & Website Development', items: ['WordPress', 'Website builders'] },
  { group: 'Backend & Data', items: ['Supabase', 'Firebase', 'APIs & database concepts'] },
  { group: 'Programming · Learning', items: ['C#', '.NET', 'ASP.NET Core', 'SQL Server'] },
  { group: 'Design', items: ['Canva', 'Figma'] },
  { group: 'Automation', items: ['AI-assisted development', 'Workflow automation · developing'] },
];
