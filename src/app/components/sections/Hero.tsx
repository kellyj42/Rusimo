"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years of finishing experience" },
  { value: "80+", label: "Residential and commercial spaces" },
  { value: "24h", label: "Quote response target" },
];

const highlights = ["Tiling", "Terrazzo", "Renovation", "Office partitioning"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-24 text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Premium living room interior with detailed ceiling, wall, and floor finishes"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/88 to-primary/38" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary-dark/88 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-accent-soft">
            Premium construction finishing in Uganda
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-6xl">
            Construction finishes that make spaces feel complete.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Rusimo delivers precise tiling, terrazzo, renovations, partitioning,
            exterior paving, and floor remodeling for homes, offices, and
            commercial spaces.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-white/86"
              >
                <CheckCircle2 size={16} className="text-accent-soft" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-white shadow-lift transition hover:bg-accent-hover"
            >
              Request a site visit
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+256774712943"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-base font-bold text-white transition hover:bg-white hover:text-primary"
            >
              <Phone size={18} />
              Call for a quote
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 border border-accent-soft/30" />
            <div className="relative border border-white/14 bg-white/10 p-3 shadow-lift backdrop-blur">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/imgs/sittingroom.jpg"
                  alt="Modern sitting room with marble-look flooring and feature wall finishing"
                  fill
                  sizes="(max-width: 1024px) 0vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/72 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 border border-white/14 bg-primary-dark/72 p-5 backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
                    Featured finish
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold">
                    Interior surfaces, ceilings, and feature walls.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-8 hidden border border-white/12 bg-white/92 p-3 shadow-lift xl:block">
              <div className="relative h-36 w-56 overflow-hidden">
                <Image
                  src="/imgs/kitchen.jpeg"
                  alt="Completed kitchen cabinetry with black countertop and clean wall finish"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-white/10 bg-primary-dark/82">
        <div className="mx-auto grid max-w-7xl gap-px px-5 md:grid-cols-3 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 md:py-8">
              <p className="font-display text-4xl font-bold text-accent-soft">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
