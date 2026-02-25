"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your vision, requirements and budget to understand your project goals.",
  },
  {
    number: "02",
    title: "Site Inspection",
    description:
      "Our team visits the site to evaluate structure, measurements and technical needs.",
  },
  {
    number: "03",
    title: "Planning & Design",
    description:
      "We prepare detailed execution plans ensuring efficiency and precision.",
  },
  {
    number: "04",
    title: "Execution & Delivery",
    description:
      "Our skilled professionals bring the design to life with quality finishing.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 inline-block px-4 py-1 bg-accent/10 rounded-full">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            How We Work
          </h2>
          <p className="text-neutral-dark/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            A streamlined approach from concept to completion, ensuring clarity
            and quality at every stage.
          </p>
        </motion.div>

        {/* Process steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Connecting line (visible on md+) */}
          <div className="hidden md:block absolute top-[60px] left-[calc(12%+30px)] right-[calc(12%+30px)] h-0.5 bg-neutral-light/60">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-r from-accent via-accent/50 to-accent origin-left"
              style={{ scaleX: 0 }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-accent/30 flex items-center justify-center text-2xl md:text-3xl font-bold text-accent shadow-lg group-hover:shadow-accent/20 transition-shadow duration-300 z-10 relative">
                    {step.number}
                  </div>
                  {/* Pulsing dot */}
                  <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title & description */}
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-dark/80 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>

                {/* Arrow connector (visible on mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-4 text-accent/50">
                    <svg
                      className="w-6 h-6 mx-auto rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7-7-7m14-8l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optional subtle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center text-neutral-dark/60 text-sm mt-16"
        >
          Each phase is tailored to your specific project needs.
        </motion.p>
      </div>
    </section>
  );
}
