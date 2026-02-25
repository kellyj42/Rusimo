"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-28 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-semibold mb-4 tracking-wide uppercase">
            Professional Finishing Experts
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transforming Spaces <br />
            Into Beautiful <span className="text-accent">Masterpieces</span>
          </h1>

          <p className="text-gray-200 text-lg mb-10 max-w-lg">
            We specialize in tiling, terrazzo installation, office partitioning,
            renovations and floor remodeling — delivering precision,
            durability and elegance in every project.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/projects"
              className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition duration-300"
            >
              View Our Projects
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero.jpg" // Replace with your real image
              alt="Finished interior project"
              width={600}
              height={500}
              className="object-cover w-full h-[450px]"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white text-primary px-6 py-4 rounded-xl shadow-xl">
            <p className="text-sm font-semibold">10+ Years Experience</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}