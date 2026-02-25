"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse move effect for floating shapes
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const shape1X = useTransform(springX, (x) => x * 0.05);
  const shape1Y = useTransform(springY, (y) => y * 0.05);
  const shape2X = useTransform(springX, (x) => -x * 0.03);
  const shape2Y = useTransform(springY, (y) => -y * 0.03);
  const shape3X = useTransform(springX, (x) => x * 0.02);
  const shape3Y = useTransform(springY, (y) => y * 0.02);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 overflow-hidden bg-gradient-to-br from-accent to-accent/80"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating shapes */}
      <motion.div
        style={{ x: shape1X, y: shape1Y }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"
      />
      <motion.div
        style={{ x: shape2X, y: shape2Y }}
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"
      />
      <motion.div
        style={{ x: shape3X, y: shape3Y }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Ready to Transform
          <br />
          <span className="text-white/90">Your Space?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto"
        >
          Let’s bring your vision to life with precision, quality and modern finishing solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-white text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
          >
            <span className="relative z-10">Request a Free Consultation</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </Link>
        </motion.div>

        {/* Small trust element */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-sm text-white/60 mt-8"
        >
          No obligations. Free consultation & estimate.
        </motion.p>
      </div>
    </section>
  );
}