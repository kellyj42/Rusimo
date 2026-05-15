import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const services = [
  { label: "Tiling", href: "/services/tiling" },
  { label: "Terrazzo installation", href: "/services/terrazzo" },
  { label: "Office partitioning", href: "/services/partitioning" },
  { label: "Renovation works", href: "/services/renovation" },
  { label: "Floor remodeling", href: "/services/remodeling" },
  { label: "Painting and finishing", href: "/services/painting" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.25fr_0.75fr_0.8fr_1fr] md:px-8">
        <div>
          <h3 className="font-display text-3xl font-bold">
            Rusimo Construction
          </h3>
          <p className="mt-4 max-w-sm leading-7 text-white/68">
            Premium finishing, tiling, terrazzo, renovation, partitioning, and
            remodeling services for homes and commercial spaces in Uganda.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="https://www.facebook.com/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-accent"
              aria-label="Rusimo on Facebook"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-accent"
              aria-label="Rusimo on Instagram"
            >
              <Instagram size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white">Explore</h4>
          <ul className="mt-5 space-y-3 text-white/68">
            {[
              { label: "Services", href: "/#services" },
              { label: "Projects", href: "/#projects" },
              { label: "Gallery", href: "/gallery" },
              { label: "Process", href: "/#process" },
              { label: "Testimonials", href: "/#testimonials" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition hover:text-accent-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white">Services</h4>
          <ul className="mt-5 space-y-3 text-white/68">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="transition hover:text-accent-soft"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white">Contact</h4>
          <ul className="mt-5 space-y-4 text-white/72">
            <li className="flex gap-3">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-accent-soft"
                aria-hidden="true"
              />
              Kampala, Uganda
            </li>
            <li>
              <a
                href="tel:+256774712943"
                className="flex gap-3 transition hover:text-accent-soft"
              >
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-accent-soft"
                  aria-hidden="true"
                />
                +256 774 712 943 / +256 700 504 534
              </a>
            </li>
            <li>
              <a
                href="mailto:rusimoconstructions@gmail.com"
                className="flex gap-3 transition hover:text-accent-soft"
              >
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-accent-soft"
                  aria-hidden="true"
                />
                rusimoconstructions@gmail.com
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-hover"
          >
            Request quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/48">
        © {new Date().getFullYear()} Rusimo Construction Company. All rights
        reserved.
      </div>
    </footer>
  );
}
