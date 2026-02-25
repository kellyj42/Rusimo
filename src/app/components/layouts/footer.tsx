"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Rusimo Construction</h3>
          <p className="text-gray-300 leading-relaxed">
            We specialize in tiling, terrazzo installation, office partitioning,
            renovation and floor remodeling — delivering beauty, strength, and
            precision in every project.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Link
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-accent transition"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-accent transition"
            >
              <Instagram size={18} />
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-300">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/#services" },
              { label: "Projects", href: "/#projects" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="relative group">
                  <span className="group-hover:text-accent transition">
                    {item.label}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Our Services</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-accent transition">Tiling</li>
            <li className="hover:text-accent transition">
              Terrazzo Installation
            </li>
            <li className="hover:text-accent transition">
              Office Partitioning
            </li>
            <li className="hover:text-accent transition">Renovation Works</li>
            <li className="hover:text-accent transition">Floor Remodeling</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent mt-1" />
              Kampala, Uganda
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              +256 XXX XXX XXX
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              info@rusimo.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Rusimo Construction Company. All rights
        reserved.
      </div>
    </footer>
  );
}
