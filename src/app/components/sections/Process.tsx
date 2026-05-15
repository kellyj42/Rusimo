"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Site visit",
    description:
      "We inspect the space, surfaces, measurements, access, and practical constraints.",
  },
  {
    number: "02",
    title: "Scope and estimate",
    description:
      "You receive clear recommendations, material direction, timeline, and budget guidance.",
  },
  {
    number: "03",
    title: "Preparation",
    description:
      "Surfaces are prepared properly so the finish is level, durable, and neat.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "The work is executed with attention to alignment, edges, joints, and site cleanliness.",
  },
  {
    number: "05",
    title: "Handover",
    description:
      "We review the finished work, complete final detailing, and share care guidance.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-stone-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
              Process
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
              A clearer path from quote to handover.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-dark/74">
              Construction and finishing work should feel organized. Our process
              keeps decisions, expectations, and delivery visible from the
              start.
            </p>
          </div>
          <div className="relative min-h-72 overflow-hidden bg-primary shadow-lift">
            <Image
              src="/Rusimo/WhatsApp Image 2026-05-15 at 6.27.11 AM.jpeg"
              alt="Rusimo architectural concept sketch for planning construction finishes"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover opacity-82"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/78 via-primary/35 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 max-w-sm text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
                Plan before building
              </p>
              <p className="mt-2 font-display text-2xl font-bold">
                Sketches and measurements become cleaner site execution.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="relative border border-primary/8 bg-white p-6 shadow-soft"
            >
              <p className="font-display text-4xl font-bold text-accent">
                {step.number}
              </p>
              <h3 className="mt-8 font-display text-xl font-bold text-primary">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-neutral-dark/70">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight
                  size={20}
                  className="absolute right-5 top-8 hidden text-primary/20 lg:block"
                />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
