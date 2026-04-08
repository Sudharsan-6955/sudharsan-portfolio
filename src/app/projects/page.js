import ProjectsSection from '@/components/projects/ProjectsSection';

export const metadata = {
  title: 'Projects',
  description:
    'Browse featured projects by Sudharsan V, a Full Stack MERN Developer with hands-on experience building responsive and scalable web applications.',
  keywords: [
    'Sudharsan V projects',
    'MERN projects',
    'Full stack portfolio projects',
    'React projects',
    'Node.js projects',
    'MongoDB projects',
    'Web development case studies',
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Sudharsan V',
    description:
      'Featured project work by Sudharsan V across full-stack development, UI experiences, and practical MERN implementations.',
    url: '/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Sudharsan V',
    description:
      'Explore project highlights and hands-on development work by Sudharsan V.',
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#161B1C] pt-28 pb-10">
      <ProjectsSection />
    </main>
  );
}
