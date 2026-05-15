"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const [featured, ...supporting] = projects;

  return (
    <section id="projects" className="bg-primary py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent-soft">
              Selected work
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Projects that prove the finish.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-primary"
          >
            View all projects
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="group relative min-h-[560px] overflow-hidden bg-primary-dark"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/42 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-soft">
                Featured {featured.category}
              </p>
              <h3 className="mt-3 max-w-xl font-display text-4xl font-bold">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-white/78">
                {featured.excerpt}
              </p>
              <Link
                href={`/projects/${featured.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-hover"
              >
                View case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.article>

          <div className="grid gap-5">
            {supporting.slice(0, 4).map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group grid overflow-hidden border border-white/10 bg-white/6 sm:grid-cols-[190px_1fr]"
              >
                <div className="relative h-48 sm:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 190px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-soft">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                    {project.excerpt}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent-soft"
                  >
                    Details
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
