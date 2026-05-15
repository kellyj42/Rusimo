import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { imageLibrary } from "@/data/imageLibrary";

export const metadata: Metadata = {
  title: "Gallery | Rusimo",
  description:
    "Explore Rusimo Construction's full visual archive of interiors, exterior finishing, flooring, paving, office partitioning, and planning work.",
};

export default function GalleryPage() {
  return (
    <main className="bg-stone-light pb-20 pt-36 md:pb-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          href="/#gallery"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-accent"
        >
          <ArrowLeft size={17} />
          Back to home
        </Link>

        <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
              Full gallery
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary md:text-6xl">
              The Rusimo finish archive.
            </h1>
          </div>
          <p className="text-lg leading-8 text-neutral-dark/74">
            A complete visual library of interior finishes, kitchens, bathrooms,
            flooring, office partitioning, exterior paving, facade preparation,
            masonry, outdoor spaces, and project planning references.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[230px] grid-flow-dense gap-4 sm:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-4">
          {imageLibrary.map((image) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden bg-primary shadow-soft ${image.className ?? ""}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={`object-cover transition duration-700 group-hover:scale-105 ${
                  image.position ?? ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/78 via-primary-dark/8 to-transparent opacity-86 transition group-hover:opacity-70" />
              <figcaption className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3">
                <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {image.label}
                </span>
                <span className="rounded-full border border-white/20 bg-primary-dark/70 px-3 py-1 text-xs font-semibold text-white/86 backdrop-blur">
                  {image.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-6 bg-primary p-6 text-white shadow-lift md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent-soft">
              Ready to plan yours?
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold">
              Bring a finish reference, and Rusimo can help shape the scope.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-bold text-white transition hover:bg-accent-hover"
          >
            Request quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
