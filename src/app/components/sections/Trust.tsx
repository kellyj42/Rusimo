"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description:
      "We deliver precise, durable and detail-oriented finishing that stands the test of time.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Projects are completed within agreed timelines without compromising quality.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description:
      "We use trusted, high-grade materials to ensure long-lasting and elegant results.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our skilled professionals bring expertise and craftsmanship to every project.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-28 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 inline-block px-4 py-1 bg-accent/10 rounded-full">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Excellence in Every Detail
          </h2>
          <p className="text-neutral-dark/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            We combine craftsmanship, professionalism, and modern design
            principles to deliver outstanding finishing solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-light/20 hover:border-accent/50"
              >
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-accent group-hover:to-accent/80 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-accent/25">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-dark/80 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-3/4 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
