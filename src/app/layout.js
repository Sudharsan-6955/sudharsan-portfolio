import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
  Gochi_Hand,
  Syne,
  Unbounded,
  Bricolage_Grotesque,
  Share_Tech_Mono,
  Plus_Jakarta_Sans,
  DM_Sans,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@fontsource/dseg7-classic-mini";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/Texts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});


const siteUrl = "https://www.sudharsanv.in";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sudharsan V",
  alternateName: [
    "Sudharsan",
    "Sudharsan Vetrivelmurugan",
    "Sudharsan Dev",
    "Sudharsan V Developer",
  ],
  url: siteUrl,
  image: `${siteUrl}/favicon/web-app-manifest-512x512.png`,
  jobTitle: "Full Stack MERN Developer",
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack MERN Developer",
    occupationLocation: {
      "@type": "Country",
      name: "India",
    },
    skills:
      "MongoDB, Express.js, React.js, Node.js, Next.js, JavaScript, TypeScript, REST APIs, Tailwind CSS, Full Stack Web Development",
  },
  description:
    "Sudharsan V is a professional Full Stack MERN Developer specializing in building high-performance web applications using MongoDB, Express.js, React, Node.js, and Next.js. Experienced in developing scalable backend architectures, secure RESTful APIs, and modern responsive user interfaces.",
  knowsAbout: [
    "MERN Stack Development",
    "MongoDB Database Architecture",
    "Express.js RESTful APIs & Middleware",
    "React.js & Next.js App Router",
    "Node.js Backend Engineering",
    "JavaScript (ES6+) & TypeScript",
    "Tailwind CSS & Modern Responsive UI/UX",
    "Full Stack Architecture & State Management",
    "Git & GitHub Version Control",
  ],
  sameAs: [
    "https://www.linkedin.com/in/sudharsan-dev",
    "https://github.com/Sudharsan-6955",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Sudharsan V | Full Stack MERN Developer Portfolio",
  url: siteUrl,
  description:
    "Official portfolio website of Sudharsan V, Full Stack MERN Developer showcasing hands-on web projects, technical expertise in React, Node.js, MongoDB, Express, and full stack applications.",
  inLanguage: "en",
  mainEntity: personJsonLd,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sudharsan V | Full Stack MERN Developer",
    template: "%s | Sudharsan V",
  },
  alternates: {
    canonical: "/",
  },
  description:
    "Sudharsan V is a Full Stack MERN Developer with hands-on experience building scalable, secure, and modern web applications with MongoDB, Express.js, React.js, and Node.js.",
  keywords: [
    "Sudharsan V",
    "Sudharsan",
    "Sudharsan Vetrivelmurugan",
    "Sudharsan V Portfolio",
    "Full Stack MERN Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "Web Developer India",
    "Full Stack Engineer",
    "MERN Stack Projects",
  ],
  authors: [{ name: "Sudharsan V" }],
  creator: "Sudharsan V",
  publisher: "Sudharsan V",
  applicationName: "Sudharsan V Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Sudharsan V | Full Stack MERN Developer",
    description:
      "Explore projects by Sudharsan V, a Full Stack MERN Developer with hands-on experience in building responsive, scalable, and user-focused web applications.",
    siteName: "Sudharsan V Portfolio",
    images: [
      {
        url: `${siteUrl}/favicon/web-app-manifest-512x512.png`,
        width: 512,
        height: 512,
        alt: "Sudharsan V - Full Stack MERN Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharsan V | Full Stack MERN Developer",
    description:
      "Portfolio of Sudharsan V featuring MERN stack projects, practical development experience, and full-stack capabilities.",
    images: [`${siteUrl}/favicon/web-app-manifest-512x512.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: {
    title: "Sudharsan V",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${gochiHand.variable} ${satoshi.variable} ${syne.variable} ${unbounded.variable} ${bricolage.variable} ${shareTechMono.variable} ${plusJakartaSans.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
