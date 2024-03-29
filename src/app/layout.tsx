import Link from "next/link"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { marketingConfig } from "@/config/marketing"

import "./globals.css";
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AIternate",
    "AI",
    "Machine Learning",
    "Dev Shop",
    "Software Engineering",
    "Data Science",
    "Silicon Valley",
    "Technology",
  ],
  authors: [
    {
      name: "AIternate",
      url: "https://aiternate.co",
    },
  ],
  creator: "aiternate",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    images: [{
        url: siteConfig.ogImage,
     }],
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.ogImage}`],
    creator: "@CShen1992",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  )
}
