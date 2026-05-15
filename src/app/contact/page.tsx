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

export default function ContactPage() {
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
              Share your goals and timeline. Our team will respond with a clear
              scope, budget guidance, and next steps.
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

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white shadow-soft p-8 border border-primary/8">
              <h2 className="font-display text-2xl font-bold text-primary mb-6">
                Get in touch
              </h2>

              <div className="space-y-5 text-neutral-dark">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Visit us</p>
                    <p>Kampala, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Call us</p>
                    <p>+256 774 712 943 / +256 700 504 534</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p>rusimoconstructions@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent">
                    <Clock size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Hours</p>
                    <p>Mon - Sat, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 shadow-lift">
              <h3 className="font-display text-xl font-bold mb-3">
                Prefer a quick quote?
              </h3>
              <p className="text-white/80 mb-6">
                Send your room dimensions and finish preferences. We will
                respond within 24 hours.
              </p>
              <a
                href="mailto:rusimoconstructions@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-full font-bold hover:bg-neutral-light transition"
              >
                Email our team
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              className="bg-white shadow-soft p-8 md:p-10 border border-primary/8"
              onSubmit={handleSubmit}
            >
              <h2 className="font-display text-2xl font-bold text-primary mb-6">
                Project details
              </h2>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex gap-3">
                  <CheckCircle
                    className="text-green-600 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-green-800 text-sm">{message}</p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3">
                  <AlertCircle
                    className="text-red-600 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-red-800 text-sm">{message}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    maxLength={100}
                    className={`mt-2 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 transition ${
                      fieldErrors.name
                        ? "border-red-300 focus:ring-red-200 bg-red-50"
                        : "border-neutral-light focus:ring-accent/40"
                    }`}
                    disabled={isPending}
                    required
                  />
                  {fieldErrors.name && (
                    <p className="text-red-600 text-xs mt-1">
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
                    className={`mt-2 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 transition ${
                      fieldErrors.email
                        ? "border-red-300 focus:ring-red-200 bg-red-50"
                        : "border-neutral-light focus:ring-accent/40"
                    }`}
                    disabled={isPending}
                    required
                  />
                  {fieldErrors.email && (
                    <p className="text-red-600 text-xs mt-1">
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
                    className={`mt-2 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 transition ${
                      fieldErrors.phone
                        ? "border-red-300 focus:ring-red-200 bg-red-50"
                        : "border-neutral-light focus:ring-accent/40"
                    }`}
                    disabled={isPending}
                  />
                  {fieldErrors.phone && (
                    <p className="text-red-600 text-xs mt-1">
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
                    className={`mt-2 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 transition ${
                      fieldErrors.service
                        ? "border-red-300 focus:ring-red-200 bg-red-50"
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
                    <p className="text-red-600 text-xs mt-1">
                      {fieldErrors.service[0]}
                    </p>
                  )}
                </label>
              </div>

              <label className="block mt-6">
                <span className="text-sm font-medium text-neutral-dark">
                  Project summary
                </span>
                <textarea
                  name="message"
                  placeholder="Tell us about your space, timeline, and finish preferences..."
                  maxLength={5000}
                  rows={5}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 transition resize-none ${
                    fieldErrors.message
                      ? "border-red-300 focus:ring-red-200 bg-red-50"
                      : "border-neutral-light focus:ring-accent/40"
                  }`}
                  disabled={isPending}
                  required
                />
                {fieldErrors.message && (
                  <p className="text-red-600 text-xs mt-1">
                    {fieldErrors.message[0]}
                  </p>
                )}
              </label>

              <button
                type="submit"
                disabled={isPending}
                className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-bold shadow-soft transition disabled:opacity-50 disabled:cursor-not-allowed"
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
