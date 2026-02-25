"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John M.",
    text: "Rusimo transformed our office space beautifully. Professional and reliable team.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    text: "Excellent tiling work. Delivered on time and exceeded expectations.",
    rating: 5,
  },
  {
    name: "David L.",
    text: "Highly recommend for renovation projects. Quality workmanship.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Decorative background elements */}
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
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="text-neutral-dark/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Real feedback from the people we’ve had the pleasure to work with.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-accent/30 transition-all duration-300 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Large quotation mark background */}
              <Quote
                size={80}
                className="absolute top-4 right-4 text-accent/10 group-hover:text-accent/20 transition-colors"
                strokeWidth={1}
              />

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-accent"
                        : "text-neutral-light"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-neutral-dark/90 text-base leading-relaxed mb-6 relative z-10">
                “{testimonial.text}”
              </p>

              {/* Author with decorative line */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <div className="w-10 h-0.5 bg-accent/30 mt-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
