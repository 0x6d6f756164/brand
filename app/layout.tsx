import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_TITLE = `${SITE.name}`;
const SITE_DESCRIPTION = `${SITE.role} portfolio`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE.name}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "full-stack developer",
    "web developer",
    "software engineer",
    "portfolio",
    "Next.js developer",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased">
        <div aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
