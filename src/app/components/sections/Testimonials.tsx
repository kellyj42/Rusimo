"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Residential Client",
    project: "Living room tiling, Kampala",
    image: "/imgs/livingroom.jpeg",
    text: "The floor alignment and finishing details changed the whole feel of the room. The team was organized from site visit to handover.",
  },
  {
    name: "Office Manager",
    project: "Commercial partitioning",
    image: "/imgs/office.jpg",
    text: "Rusimo helped us create cleaner work zones without making the office feel closed off. The result looks professional and practical.",
  },
  {
    name: "Homeowner",
    project: "Bathroom and floor remodeling",
    image: "/imgs/bathroom.jpg",
    text: "They explained the material choices clearly and delivered a neat finish. The space is easier to maintain and feels much more modern.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
              Client feedback
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
              Trust built project by project.
            </h2>
          </div>
          <p className="text-lg leading-8 text-neutral-dark/74">
            Clients choose Rusimo for calm communication, cleaner sites, and
            finishing work that looks considered after the tools are packed away.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.project}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="relative overflow-hidden border border-primary/8 bg-stone-light"
            >
              <div className="relative h-44">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.project} finish reference`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/62 to-transparent" />
              </div>
              <div className="relative p-7">
                <Quote
                  className="absolute right-6 top-6 text-accent/20"
                  size={58}
                />
                <div className="mb-6 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="relative z-10 leading-8 text-neutral-dark/82">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-8 border-t border-primary/10 pt-5">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="mt-1 text-sm font-medium text-neutral-dark/62">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
