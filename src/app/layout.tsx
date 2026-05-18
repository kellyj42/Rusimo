import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/nav";
import Footer from "./components/layouts/footer";
import JsonLd from "./components/seo/JsonLd";
import {
  absoluteUrl,
  organizationSchema,
  siteConfig,
  websiteSchema,
} from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  title: {
    default: "Rusimo Construction | Premium Finishing, Tiling & Renovation",
    template: "%s | Rusimo Construction",
  },
  description: siteConfig.description,
  keywords: [
    "construction finishing Kampala",
    "residential construction Kampala",
    "house construction Uganda",
    "home builders Kampala",
    "tiling services Uganda",
    "terrazzo flooring Kampala",
    "office partitioning Kampala",
    "renovation contractors Uganda",
    "floor remodeling Kampala",
    "painting and finishing Uganda",
    "Rusimo Construction",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Rusimo Construction | Premium Finishing in Kampala",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 800,
        alt: "Premium interior finishing by Rusimo Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rusimo Construction | Premium Finishing in Kampala",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sora.variable} font-sans antialiased`}
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
