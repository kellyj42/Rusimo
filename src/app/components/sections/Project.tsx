"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Living Room Tiling",
    category: "Residential",
    image: "/hero.jpg",
  },
  {
    title: "Modern Office Partitioning",
    category: "Commercial",
    image: "/hero.jpg",
  },
  {
    title: "Terrazzo Floor Installation",
    category: "Flooring",
    image: "/hero.jpg",
  },
  {
    title: "Kitchen Renovation",
    category: "Residential",
    image: "/hero.jpg",
  },
  {
    title: "Bathroom Remodeling",
    category: "Residential",
    image: "/hero.jpg",
  },
];

export default function ProjectsPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-neutral-light to-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 inline-block px-4 py-1 bg-accent/10 rounded-full">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Featured Projects
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Scroll buttons (visible on md+) */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full bg-white border border-neutral-light hover:border-accent hover:text-accent transition shadow-md hover:shadow-lg"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-full bg-white border border-neutral-light hover:border-accent hover:text-accent transition shadow-md hover:shadow-lg"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <Link
              href="/projects"
              className="group flex items-center gap-2 text-accent font-medium bg-white px-6 py-3 rounded-full border border-accent/30 hover:bg-accent hover:text-white transition shadow-md hover:shadow-accent/20"
            >
              <span>View All Projects</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Horizontal scrollable projects */}
        <div className="relative">
          {/* Gradient fade edges (indicate scrollability) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-light to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-light to-transparent pointer-events-none z-10" />

          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative min-w-[280px] sm:min-w-[350px] md:min-w-[400px] h-[450px] rounded-3xl overflow-hidden group snap-start flex-shrink-0"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-accent font-medium mb-2 tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <Link
                    href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-white/90 hover:text-accent transition"
                  >
                    <span className="text-sm uppercase tracking-wider">
                      View Project
                    </span>
                    <span className="text-lg">→</span>
                  </Link>
                </div>

                {/* Decorative accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator dots (optional) */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {projects.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-neutral-dark/30" />
          ))}
        </div>
      </div>
    </section>
  );
}
