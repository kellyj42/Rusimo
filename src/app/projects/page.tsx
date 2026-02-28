import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Rusimo",
  description: "Browse selected Rusimo renovation and finishing projects.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-accent">
            Our Work
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary">
            Projects
          </h1>
          <p className="mt-4 mx-auto max-w-3xl text-neutral-dark/80 text-lg">
            Explore completed projects across residential and commercial spaces,
            with details on scope, process, and outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-3xl border border-neutral-light bg-white shadow-md"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium uppercase tracking-wider text-accent">
                  {project.category}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-primary">
                  {project.title}
                </h2>
                <p className="mt-3 text-neutral-dark/80 leading-relaxed">
                  {project.excerpt}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-5 inline-flex items-center gap-2 font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  View project details <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
