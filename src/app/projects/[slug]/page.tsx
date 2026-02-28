import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects, projectsBySlug } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Rusimo Projects`,
    description: project.excerpt,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/projects"
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          ← Back to projects
        </Link>

        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {project.category}
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-primary">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-dark/80">
            {project.excerpt}
          </p>
        </header>

        <div className="relative mt-10 h-[280px] md:h-[460px] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <article className="mt-10 rounded-2xl bg-neutral-light p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary">
            Project overview
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-dark/90">
            {project.overview}
          </p>

          <h3 className="mt-8 text-xl font-semibold text-primary">
            Scope delivered
          </h3>
          <ul className="mt-4 space-y-3">
            {project.scope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-neutral-dark/90"
              >
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-primary">Outcome</h3>
          <p className="mt-4 leading-relaxed text-neutral-dark/90">
            {project.outcome}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Contact us about a similar project
          </Link>
        </article>
      </div>
    </main>
  );
}
