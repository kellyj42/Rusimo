"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/#why-us" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          aria-label="Rusimo Construction home"
          className="flex items-center gap-3"
        >
          <Image
            src="/Logo(bonny) white.png"
            alt="Rusimo Construction Company"
            width={132}
            height={48}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-primary md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/contact" && pathname === "/contact";

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 transition-colors hover:text-accent ${
                  isActive ? "text-accent" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+256774712943"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 text-primary transition hover:border-accent hover:text-accent"
            aria-label="Call Rusimo Construction"
          >
            <Phone size={18} />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-accent-hover"
          >
            Request Quote
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 text-primary md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-primary/10 bg-white px-5 pb-6 pt-2 md:hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-primary transition hover:bg-stone-light hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="tel:+256774712943"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 px-4 py-3 text-sm font-bold text-primary"
              >
                <Phone size={16} />
                Call
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-bold text-white"
              >
                Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
