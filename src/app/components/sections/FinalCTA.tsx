"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
      <Image
        src="/imgs/finishing.jpeg"
        alt="Finished residential exterior with stone accent column and steps"
        fill
        sizes="100vw"
        className="object-cover opacity-32"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/92 to-primary/70" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent-soft">
            Start your project
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Need a cleaner, stronger, more premium finish?
          </h2>
        </div>

        <div className="border border-white/12 bg-white/8 p-6 backdrop-blur">
          <p className="text-lg leading-8 text-white/78">
            Share the space, location, service needed, and preferred timeline.
            Rusimo will respond with practical next steps for your quote or site
            visit.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-bold text-white transition hover:bg-accent-hover"
            >
              Request quote
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+256774712943"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white hover:text-primary"
            >
              <Phone size={18} />
              Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
