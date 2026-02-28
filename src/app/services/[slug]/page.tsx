import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { services, servicesBySlug } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Rusimo`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/#services"
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          ← Back to services
        </Link>

        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-dark/80 max-w-3xl">
            {service.description}
          </p>
        </div>

        <div className="relative mt-10 h-[280px] md:h-[420px] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <article className="mt-10 rounded-2xl bg-neutral-light p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary">
            About this service
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-dark/90">
            {service.summary}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Contact us about this service
          </Link>
        </article>
      </div>
    </main>
  );
}
