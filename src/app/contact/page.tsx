import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-neutral-light via-white to-white">
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 relative">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold uppercase tracking-wider mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              Tell us about your project
            </h1>
            <p className="text-neutral-dark/80 mt-6 text-lg">
              Share your goals and timeline. Our team will respond with a clear
              scope, budget guidance, and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-light">
              <h2 className="text-2xl font-semibold text-primary mb-6">
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
                    <p>+256 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p>info@rusimo.com</p>
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

            <div className="bg-primary text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-3">
                Prefer a quick quote?
              </h3>
              <p className="text-white/80 mb-6">
                Send your room dimensions and finish preferences. We will
                respond within 24 hours.
              </p>
              <a
                href="mailto:info@rusimo.com"
                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-full font-medium hover:bg-neutral-light transition"
              >
                Email our team
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-neutral-light">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Project details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-neutral-light px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Email address
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className="mt-2 w-full rounded-xl border border-neutral-light px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Phone number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+256"
                    className="mt-2 w-full rounded-xl border border-neutral-light px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-neutral-dark">
                    Service needed
                  </span>
                  <select
                    name="service"
                    className="mt-2 w-full rounded-xl border border-neutral-light px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    <option value="">Select a service</option>
                    <option value="tiling">Tiling</option>
                    <option value="terrazzo">Terrazzo installation</option>
                    <option value="partition">Office partitioning</option>
                    <option value="renovation">Renovation works</option>
                    <option value="remodel">Floor remodeling</option>
                  </select>
                </label>
              </div>

              <label className="block mt-6">
                <span className="text-sm font-medium text-neutral-dark">
                  Project summary
                </span>
                <textarea
                  name="message"
                  placeholder="Tell us about your space, timeline, and finish preferences..."
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-neutral-light px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  required
                />
              </label>

              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition"
              >
                Send request
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
