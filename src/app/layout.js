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
  url: siteUrl,
  jobTitle: "Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer with hands-on experience building modern, responsive, and scalable web applications.",
  knowsAbout: [
    "MongoDB",
    "Express.js",
    "React",
    "Next",
    "Node.js",
    "JavaScript",
    "Frontend Development",
    "Backend Development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/sudharsan-dev",
    "https://github.com/Sudharsan-6955",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sudharsan V Portfolio",
  url: siteUrl,
  description:
    "Portfolio of Sudharsan V, Full Stack MERN Developer showcasing practical project experience.",
  inLanguage: "en",
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
    "Sudharsan V is a Full Stack MERN Developer with hands-on experience building modern web applications and real-world projects using MongoDB, Express.js, React, and Node.js.",
  keywords: [
    "Sudharsan V",
    "Full Stack Developer",
    "MERN Developer",
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "JavaScript",
    "Web Developer Portfolio",
    "Frontend Development",
    "Backend Development",
    "Hands-on project experience",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharsan V | Full Stack MERN Developer",
    description:
      "Portfolio of Sudharsan V featuring MERN stack projects, practical development experience, and full-stack capabilities.",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
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
