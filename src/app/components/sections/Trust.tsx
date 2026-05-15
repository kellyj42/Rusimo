"use client";

import Image from "next/image";
import { Award, ClipboardCheck, HardHat, Ruler } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Ruler,
    title: "Measured before quoting",
    description:
      "We inspect dimensions, surfaces, access, and material requirements before recommending a scope.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear scope and timeline",
    description:
      "Clients understand the process, expected sequence, material choices, and delivery milestones.",
  },
  {
    icon: HardHat,
    title: "Clean site workmanship",
    description:
      "Our finishing approach prioritizes neat installation, careful preparation, and controlled handover.",
  },
  {
    icon: Award,
    title: "Durability-led finishes",
    description:
      "We focus on surfaces that look refined and continue performing under daily residential or commercial use.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
              Why clients choose Rusimo
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
              Professional finishing is won in the details.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-dark/74">
              Beautiful surfaces depend on preparation, alignment, material
              fit, and the last five percent of finishing. That is where Rusimo
              puts its attention.
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4">
              <div className="border-l-4 border-accent bg-stone-light p-5">
                <p className="font-display text-3xl font-bold text-primary">
                  Homes
                </p>
                <p className="mt-1 text-sm text-neutral-dark/70">
                  Living rooms, kitchens, bathrooms, floors
                </p>
              </div>
              <div className="border-l-4 border-accent bg-stone-light p-5">
                <p className="font-display text-3xl font-bold text-primary">
                  Offices
                </p>
                <p className="mt-1 text-sm text-neutral-dark/70">
                  Partitions, renovations, commercial finishes
                </p>
              </div>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-[0.8fr_1.2fr] gap-4">
              <div className="relative min-h-64 overflow-hidden">
                <Image
                  src="/imgs/bathroom.jpg"
                  alt="Bathroom with polished wall tiles, vanity, and glass shower finish"
                  fill
                  sizes="(max-width: 1024px) 45vw, 280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/45 to-transparent" />
              </div>
              <div className="relative min-h-64 overflow-hidden">
                <Image
                  src="/imgs/office.jpg"
                  alt="Office desk partitioning reference with warm workstation finishes"
                  fill
                  sizes="(max-width: 1024px) 55vw, 360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/38 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="border border-primary/8 bg-white p-6 shadow-soft"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-accent-soft">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-dark/70">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
