import type { Metadata } from "next";

import type { ProjectItem } from "@/data/projects";
import type { ServiceItem } from "@/data/services";

export const siteConfig = {
  name: "Rusimo Construction Company",
  shortName: "Rusimo Construction",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rusimoconstruction.com",
  description:
    "Rusimo Construction provides premium construction finishing, tiling, terrazzo, office partitioning, renovation, painting, and floor remodeling services in Kampala, Uganda.",
  email: "rusimoconstructions@gmail.com",
  phone: "+256774712943",
  alternatePhone: "+256700504534",
  addressLocality: "Kampala",
  addressCountry: "UG",
  areaServed: ["Kampala", "Uganda"],
  logo: "/Logo(bonny) white.png",
  ogImage: "/hero.jpg",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: "en_UG",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 800,
          alt: `${siteConfig.shortName} project finish`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressCountry: siteConfig.addressCountry,
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
    priceRange: "$$",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function serviceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: `${service.title} in Kampala`,
    description: service.summary,
    image: absoluteUrl(service.image),
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function projectSchema(project: ProjectItem) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(`/projects/${project.slug}`)}#project`,
    name: project.title,
    description: project.overview,
    image: absoluteUrl(project.image),
    about: project.category,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    url: absoluteUrl(`/projects/${project.slug}`),
  };
}

export function breadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What construction finishing services does Rusimo provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rusimo provides tiling, terrazzo, office partitioning, renovation works, floor remodeling, painting, exterior paving, masonry preparation, and general finishing services for residential and commercial spaces.",
        },
      },
      {
        "@type": "Question",
        name: "Does Rusimo Construction serve Kampala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rusimo Construction is based in Kampala, Uganda and serves residential and commercial clients across Kampala and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "How can I request a construction finishing quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a quote through the contact form, call Rusimo directly, or email project details including location, measurements, preferred finish, and timeline.",
        },
      },
    ],
  };
}
