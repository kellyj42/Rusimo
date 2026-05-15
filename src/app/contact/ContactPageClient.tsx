"use client";

import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useState, useTransition } from "react";
import { submitContactForm } from "./actions";

export default function ContactPageClient() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldErrors({});
    setMessage("");

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus("success");
        setMessage(result.message);
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setMessage(result.message);
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    });
  };

  return (
    <main className="bg-stone-light">
      <section className="relative overflow-hidden bg-primary text-white">
        <Image
          src="/Rusimo/WhatsApp Image 2026-05-15 at 6.27.05 AM.jpeg"
          alt="Rusimo paving work in progress"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/86 to-primary/44" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-40 md:px-8 lg:grid-cols-[0.9fr_0.75fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent-soft">
              Request a quote
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Tell us about your project
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/78">
              Share your goals and timeline. Our Kampala team will respond with
              a clear scope, budget guidance, and next steps for your finishing
              project.
            </p>
          </div>
          <div className="hidden border border-white/14 bg-white/10 p-3 shadow-lift backdrop-blur lg:block">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/Rusimo/WhatsApp Image 2026-05-15 at 6.27.08 AM (2).jpeg"
                alt="Kitchen cabinet planning sketch for a Rusimo project quote"
                fill
                sizes="(max-width: 1024px) 0vw, 34vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="border border-primary/8 bg-white p-8 shadow-soft">
              <h2 className="mb-6 font-display text-2xl font-bold text-primary">
                Get in touch
              </h2>

              <div className="space-y-5 text-neutral-dark">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Visit us</p>
                    <p>Kampala, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Call us</p>
                    <p>
                      <a href="tel:+256774712943" className="hover:text-accent">
                        +256 774 712 943
                      </a>{" "}
                      /{" "}
                      <a href="tel:+256700504534" className="hover:text-accent">
                        +256 700 504 534
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p>
                      <a
                        href="mailto:rusimoconstructions@gmail.com"
                        className="break-words hover:text-accent"
                      >
                        rusimoconstructions@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    <Clock size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Hours</p>
                    <p>Mon - Sat, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 text-white shadow-lift">
              <h2 className="mb-3 font-display text-xl font-bold">
                Prefer a quick quote?
              </h2>
              <p className="mb-6 text-white/80">
                Send your room dimensions, project location, and finish
                preferences. We will respond within 24 hours.
              </p>
              <a
                href="mailto:rusimoconstructions@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-primary transition hover:bg-neutral-light"
              >
                Email our team
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              className="border border-primary/8 bg-white p-8 shadow-soft md:p-10"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-6 font-display text-2xl font-bold text-primary">
                Project details
              </h2>

              {status === "success" && (
                <div
                  className="mb-6 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
                  role="status"
                >
                  <CheckCircle
                    className="flex-shrink-0 text-green-600"
                    size={20}
                  />
                  <p className="text-sm text-green-800">{message}</p>
                </div>
              )}

              {status === "error" && (
                <div
                  className="mb-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                  role="alert"
                >
                  <AlertCircle
                    className="flex-shrink-0 text-red-600"
                    size={20}
                  />
                  <p className="text-sm text-red-800">{message}</p>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    maxLength={100}
                    className={`mt-2 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 ${
                      fieldErrors.name
                        ? "border-red-300 bg-red-50 focus:ring-red-200"
                        : "border-neutral-light focus:ring-accent/40"
                    }`}
                    disabled={isPending}
                    required
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-xs text-red-600">
                      {fieldErrors.name[0]}
                    </p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Email address
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 ${
                      fieldErrors.email
                        ? "border-red-300 bg-red-50 focus:ring-red-200"
                        : "border-neutral-light focus:ring-accent/40"
                    }`}
                    disabled={isPending}
                    required
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-600">
                      {fieldErrors.email[0]}
                    </p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Phone number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+256"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 ${
                      fieldErrors.phone
                        ? "border-red-300 bg-red-50 focus:ring-red-200"
                        : "border-neutral-light focus:ring-accent/40"
                    }`}
                    disabled={isPending}
                  />
                  {fieldErrors.phone && (
                    <p className="mt-1 text-xs text-red-600">
                      {fieldErrors.phone[0]}
                    </p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Service needed
                  </span>
                  <select
                    name="service"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 ${
                      fieldErrors.service
                        ? "border-red-300 bg-red-50 focus:ring-red-200"
                        : "border-neutral-light focus:ring-accent/40"
                    }`}
                    disabled={isPending}
                  >
                    <option value="">Select a service</option>
                    <option value="tiling">Tiling</option>
                    <option value="terrazzo">Terrazzo installation</option>
                    <option value="partition">Office partitioning</option>
                    <option value="renovation">Renovation works</option>
                    <option value="remodel">Floor remodeling</option>
                    <option value="painting">Painting and finishing</option>
                  </select>
                  {fieldErrors.service && (
                    <p className="mt-1 text-xs text-red-600">
                      {fieldErrors.service[0]}
                    </p>
                  )}
                </label>
              </div>

              <label className="mt-6 block">
                <span className="text-sm font-medium text-neutral-dark">
                  Project summary
                </span>
                <textarea
                  name="message"
                  placeholder="Tell us about your space, timeline, and finish preferences..."
                  maxLength={5000}
                  rows={5}
                  className={`mt-2 w-full resize-none rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 ${
                    fieldErrors.message
                      ? "border-red-300 bg-red-50 focus:ring-red-200"
                      : "border-neutral-light focus:ring-accent/40"
                  }`}
                  disabled={isPending}
                  required
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-xs text-red-600">
                    {fieldErrors.message[0]}
                  </p>
                )}
              </label>

              <button
                type="submit"
                disabled={isPending}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-white shadow-soft transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isPending ? "Sending..." : "Send request"}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
