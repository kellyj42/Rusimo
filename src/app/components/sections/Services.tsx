"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary inline-block relative">
            Our Services
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-accent rounded-full hidden md:block"></span>
          </h2>
          <p className="text-neutral-dark/80 mt-6 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
            Professional finishing solutions crafted with precision, durability
            and modern design.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 auto-rows-fr"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                {/* Image Container */}
                <div className="relative h-[350px] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base mb-4 max-w-[90%] drop-shadow">
                      {service.description}
                    </p>

                    {/* Animated Link */}
                    <div className="flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="text-accent font-medium text-sm uppercase tracking-wider">
                        Learn more
                      </span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-accent text-xl"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  {/* Decorative accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
