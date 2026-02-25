"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Projects", href: "/#projects" },
    { name: "Process", href: "/#process" },
    { name: "Testimonials", href: "/#testimonials" },
    
  ];

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/Logo(bonny) white.png"
            alt="Rusimo Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 font-medium text-neutral-dark">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.name} href={link.href} className="relative group">
                <span
                  className={`transition ${
                    isActive ? "text-accent" : "group-hover:text-accent"
                  }`}
                >
                  {link.name}
                </span>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            Request Quote
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU WITH ANIMATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg px-6 pb-6 space-y-5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg hover:text-accent transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-accent text-white text-center py-3 rounded-full"
            >
              Request Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
