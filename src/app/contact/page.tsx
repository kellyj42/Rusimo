import type { Metadata } from "next";

import JsonLd from "../components/seo/JsonLd";
import ContactPageClient from "./ContactPageClient";
import { breadcrumbSchema, createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Rusimo Construction | Request a Quote in Kampala",
  description:
    "Contact Rusimo Construction in Kampala for tiling, terrazzo, renovation, office partitioning, painting, floor remodeling, and construction finishing quotes.",
  path: "/contact",
  image: "/Rusimo/WhatsApp Image 2026-05-15 at 6.27.05 AM.jpeg",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Rusimo Construction",
            url: `${siteConfig.url}/contact`,
            mainEntity: {
              "@id": `${siteConfig.url}/#organization`,
            },
          },
        ]}
      />
      <ContactPageClient />
    </>
  );
}
