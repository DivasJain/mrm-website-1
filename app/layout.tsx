import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/hooks/useAuth"
import ErrorBoundary from "@/components/ErrorBoundary"
import LoadingSpinner from "@/components/LoadingSpinner"
import "./globals.css"

export const metadata: Metadata = {
  title: "MRM Woodcraft - Premium Plywood, Laminates & Building Materials",
  description:
    "Leading manufacturer of premium BWP plywood, blockboards, ply and boards, designer laminates and building materials with 25-year warranty and lifetime range products.",
  generator: "Next.js",
  keywords:
    "plywood, BWP plywood, blockboards, ply and boards, laminates, building materials, MRM, woodcraft, interior design, louvers, veneers",
  authors: [{ name: "MRM Woodcraft" }],
  creator: "MRM Woodcraft",
  publisher: "MRM Woodcraft",
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
    url: "https://mrmwoodcraft.com",
    siteName: "MRM Woodcraft",
    title: "MRM Woodcraft - Premium Building Materials",
    description:
      "Leading manufacturer of premium BWP plywood, blockboards, ply and boards, designer laminates with 25-year warranty and lifetime range products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MRM Woodcraft - Premium Building Materials",
    description: "Leading manufacturer of premium BWP plywood, designer laminates, blockboards with 25-year warranty.",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ErrorBoundary>
          <AuthProvider>
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading..." className="min-h-screen" />}>
              {children}
            </Suspense>
          </AuthProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
