import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { siteConfig, siteMetadata } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteMetadata.title,
    template: "%s — Felipe Schwabe"
  },
  description: siteMetadata.description,
  keywords: [...siteMetadata.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.domain
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Felipe Schwabe — Creative Developer & AI Creative Designer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0b0c0c"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
