import ContactPage from '@/components/contact/ContactPage';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Sudharsan V, a Full Stack MERN Developer open to collaboration on modern web applications and product ideas.',
  keywords: [
    'Contact Sudharsan V',
    'Hire MERN developer',
    'Full stack developer contact',
    'Web development collaboration',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Sudharsan V',
    description:
      'Reach out to Sudharsan V for full stack MERN development collaborations and opportunities.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image  ',
    title: 'Contact | Sudharsan V',
    description:
      'Contact page for collaboration, freelance work, and full stack development opportunities.',
  },
};

export default function Contact() {
  return <ContactPage />;
}


// git checkout dev
// # do changes
// git add .
// git commit -m "Update portfolio section"
// git push origin dev

// # when ready
// git checkout main
// git merge dev
// git push origin main