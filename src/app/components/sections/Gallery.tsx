"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { imageLibrary } from "@/data/imageLibrary";

const previewImages = imageLibrary.slice(0, 6);

export default function Gallery() {
  return (
    <section className="bg-white py-20 md:py-28" id="gallery">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
              Finish preview
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
              A cleaner glimpse of the work.
            </h2>
          </div>
          <p className="text-lg leading-8 text-neutral-dark/74">
            A compact selection of refined interiors, practical commercial
            layouts, material details, and site work. The full visual archive is
            available for a deeper look.
          </p>
        </div>

        <div className="grid auto-rows-[230px] grid-flow-dense gap-4 sm:grid-cols-2 md:auto-rows-[250px] lg:grid-cols-4">
          {previewImages.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
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
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-white shadow-soft transition hover:bg-accent-hover"
          >
            See more
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
