"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brush,
  Hammer,
  Home,
  Layers3,
  Paintbrush,
  Ruler,
} from "lucide-react";
import { motion } from "framer-motion";

const buildStages = [
  {
    icon: Ruler,
    title: "Foundation works",
    description:
      "Setting out, excavation coordination, slab preparation, and early site structure for family homes.",
  },
  {
    icon: Hammer,
    title: "Walling and roofing",
    description:
      "Blockwork, wall alignment, structural coordination, roofing, and weather-ready residential shells.",
  },
  {
    icon: Layers3,
    title: "Plastering and floors",
    description:
      "Clean plastering, floor preparation, screeding, tiling, terrazzo, and durable surface installation.",
  },
  {
    icon: Paintbrush,
    title: "Final beautification",
    description:
      "Painting, ceiling works, interior detailing, exterior finishes, and the polished touches Rusimo is known for.",
  },
];

const residentialFocus = [
  "Residential homes",
  "Family houses",
  "Home renovations",
  "Small-to-medium housing projects",
];

export default function ResidentialConstruction() {
  return (
    <section
      id="residential-construction"
      className="overflow-hidden bg-primary py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent-soft">
              Residential construction
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              From foundation to finish, we build beautiful homes.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Rusimo is best known for premium finishing, but our team can also
              handle complete house construction projects from the ground up.
              We focus on homes, family houses, renovations, and manageable
              residential builds where structure and finishing both matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {residentialFocus.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-semibold text-white/86"
                >
                  <Home size={15} className="text-accent-soft" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-white shadow-lift transition hover:bg-accent-hover"
              >
                Build your dream home
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-primary"
              >
                View residential work
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative min-h-[430px] overflow-hidden border border-white/12 bg-white/8 p-3 shadow-lift"
              >
                <div className="relative h-full min-h-[406px] overflow-hidden">
                  <Image
                    src="/imgs/house.jpeg"
                    alt="Residential house construction and exterior finishing by Rusimo"
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/78 via-primary-dark/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
                      House construction
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold">
                      Built for residential scale, detail, and comfort.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative min-h-52 overflow-hidden border border-white/12 bg-white/8 p-3"
                >
                  <Image
                    src="/Rusimo/WhatsApp Image 2026-05-15 at 6.27.08 AM (1).jpeg"
                    alt="Residential walling and facade preparation with scaffold access"
                    fill
                    sizes="(max-width: 640px) 100vw, 28vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/72 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold">
                    Walling, plastering, and facade preparation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="border border-white/12 bg-white p-6 text-primary shadow-soft"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Brush size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    We do not stop at the shell.
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-dark/72">
                    After roofing and plastering, Rusimo completes the ceiling,
                    flooring, painting, and final finishing touches that make a
                    house feel ready to live in.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {buildStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.article
                key={stage.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className="border border-white/10 bg-white/7 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-bold">
                  {stage.title}
                </h3>
                <p className="mt-3 leading-7 text-white/68">
                  {stage.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
