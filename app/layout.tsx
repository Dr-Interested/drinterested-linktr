import "@/styles/globals.css"
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "@/components/structured-data"
import { organizationSchema } from "@/lib/structured-data"
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — All Our Links | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Dr. Interested",
    "Dr Interested",
    "Doctor Interested",
    "Dr. Interested links",
    "Dr. Interested Instagram",
    "Dr. Interested Discord",
    "Dr. Interested LinkedIn",
    "Dr. Interested YouTube",
    "Dr. Interested Spotify",
    "Dr. Interested podcast",
    "healthcare community",
    "pre-med community",
    "healthcare education",
    "medical careers for high school students",
    "volunteer hours healthcare",
    "link in bio",
    "Adil Mukhi",
  ],
  authors: [{ name: "Dr. Interested Team", url: "https://www.drinterested.org" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  alternates: {
    // Self-canonical: link.drinterested.org is the primary link-in-bio URL. It is tied to the
    // main site as one entity via the shared Organization schema, not via rel=canonical.
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — All Our Links`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1920,
        height: 1080,
        alt: "Dr. Interested — Inspiring the Next Generation of Healthcare Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrInterested",
    creator: "@DrInterested",
    title: `${SITE_NAME} — All Our Links`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
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
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1eb" },
    { media: "(prefers-color-scheme: dark)", color: "#334852" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData id="organization-schema" data={organizationSchema()} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
