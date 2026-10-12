export type Project = {
  slug: string; name: string; url?: string; image?: string; imageKind: 'screenshot' | 'concept'; featured?: boolean;
  category: 'WordPress' | 'Website Builder' | 'Website Development' | 'Academic Concept';
  technologies: string[]; summary: string; role: string; accent: string; mark: string;
};

export const projects: Project[] = [
  { slug: 'kasa-maharlika', name: 'Kasa Maharlika', url: 'https://kasamaharlika.com/', image: '/images/kasa-maharlika-homepage.png', imageKind: 'screenshot', featured: true, category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Developed and maintained responsive website pages for Kasa Maharlika, integrating website content and imagery, improving SEO, and implementing an inquiry form and email flow to route property inquiries to the owner.', role: 'Web Developer', accent: '#8a6a49', mark: 'KM' },
  { slug: 'monjoe', name: 'Monjoe', url: 'https://monjoes.com/', image: '/images/monjoe-homepage.png', imageKind: 'screenshot', featured: true, category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Developed and styled responsive website pages for Monjoe using WordPress, custom HTML, and CSS. Integrated website content and imagery, updated menu information, and made SEO improvements to present the café’s menu and garden dining experience.', role: 'Web Developer', accent: '#ba633c', mark: 'MJ' },
  { slug: 'primesteps', name: 'PrimeSteps Learning Hub', url: 'https://primestepslh.com/', image: '/images/primesteps-homepage.png', imageKind: 'screenshot', category: 'Website Builder', technologies: ['GoDaddy Website Builder'], summary: 'Developed and updated the PrimeSteps Learning Hub website using GoDaddy Website Builder. Worked on page development, layout and styling, responsive design, website content and image integration, and SEO updates; also contributed to monthly website insights and reporting to support ongoing monitoring.', role: 'Web Developer', accent: '#64947e', mark: 'PS' },
  { slug: 'shurra', name: 'Shurra Group of Companies', url: 'https://shurragroupofcompanies.com/', image: '/images/shurra-homepage.png', imageKind: 'screenshot', category: 'WordPress', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Developed and updated website pages for Shurra Group of Companies using WordPress, HTML, and CSS. Worked on homepage imagery, typography and colors, the About Us page, team section, website content, and responsive mobile layouts, and implemented SEO updates to support search visibility.', role: 'Web Developer', accent: '#52769a', mark: 'SG' },
  { slug: 'bw-customized-furniture', name: 'B&W Customized Furniture', url: 'https://bwcustomizedfurniture.com/', image: '/images/bw-customized-furniture-homepage.png', imageKind: 'screenshot', featured: true, category: 'Website Development', technologies: ['WordPress', 'HTML', 'CSS'], summary: 'Developed website pages for B&W Customized Furniture using WordPress, with custom HTML and CSS for page structure and styling. Worked on website content and image integration, a furniture gallery, responsive mobile layouts, and SEO updates.', role: 'Web Developer', accent: '#9a8068', mark: 'B&W' },
  { slug: 'barili-tourism-app', name: 'Barili Tourism App', imageKind: 'concept', category: 'Academic Concept', technologies: ['Kotlin', 'PHP', 'Firebase'], summary: 'Developed a completed individual academic project designed to improve access to tourism information for destinations in Barili, Cebu. The application includes QR-based destination information, visitor tracking, reporting, and destination inquiries to help visitors access information and support tourism information management. Contributions included system concept and planning, requirements gathering, system analysis and design, database design, UI/UX design, frontend and backend development, QR-code scanning and destination information, visitor tracking and reporting, and documentation.', role: 'Individual Developer', accent: '#4f8cad', mark: 'BT' },
];

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'CMS & Website Development', items: ['WordPress', 'Website builders'] },
  { group: 'Backend & Data', items: ['Supabase', 'Firebase', 'APIs & database concepts'] },
  { group: 'Programming · Learning', items: ['C#', '.NET', 'ASP.NET Core', 'SQL Server'] },
  { group: 'Design', items: ['Canva', 'Figma'] },
  { group: 'Automation', items: ['AI-assisted development', 'Workflow automation · developing'] },
];
