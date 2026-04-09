import dynamic from 'next/dynamic';

const HomePageClient = dynamic(() => import('@/components/home/HomePageClient'));

export const metadata = {
  title: {
    absolute: 'Sudharsan V | Full Stack MERN Developer',
  },
  description:
    'Sudharsan V portfolio home page featuring full stack MERN development, hands-on project experience, and modern web app work.',
  keywords: [
    'Sudharsan V portfolio',
    'Full Stack MERN Developer',
    'MERN portfolio',
    'Web developer projects',
    'React Node MongoDB',
    'JavaScript developer',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sudharsan V | Full Stack MERN Developer',
    description:
      'Explore the portfolio of Sudharsan V with featured MERN stack projects, about section, and contact details.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudharsan V | Full Stack MERN Developer',
    description:
      'Portfolio website showcasing projects and full stack MERN development experience.',
  },
};

export default function Home() {
  return <HomePageClient />;
}