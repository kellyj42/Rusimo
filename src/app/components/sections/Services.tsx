"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const serviceBenefits = [
  "Site inspection and measurement",
  "Material guidance and finish planning",
  "Clean installation and final detailing",
];

export default function Services() {
  return (
    <section id="services" className="bg-stone-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
              What we do
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
              Finishing services with site-ready precision.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-neutral-dark/74">
            From substrate preparation to the final polish, each service is
            planned around durability, alignment, material quality, and the way
            the finished space will be used every day.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden border border-primary/8 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold text-primary">
                      {service.title}
                    </h3>
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-light text-accent transition group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-neutral-dark/72">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border border-primary/8 bg-white p-5 shadow-soft md:grid-cols-3 md:p-6">
          {serviceBenefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Check size={18} />
              </span>
              <p className="font-semibold text-primary">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
