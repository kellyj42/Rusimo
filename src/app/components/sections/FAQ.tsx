const faqs = [
  {
    question: "What construction finishing services does Rusimo provide?",
    answer:
      "Rusimo provides residential house construction, foundation works, walling, roofing, plastering, tiling, terrazzo, renovation works, floor remodeling, painting, ceiling works, exterior paving, and final finishing services.",
  },
  {
    question: "Can Rusimo build a full house from foundation to roofing?",
    answer:
      "Yes. Rusimo can handle complete residential house construction from foundation works through walling, roofing, plastering, flooring, painting, ceilings, and final interior and exterior finishing. The focus is mainly homes, family houses, renovations, and small-to-medium residential projects.",
  },
  {
    question: "Does Rusimo Construction serve Kampala?",
    answer:
      "Yes. Rusimo Construction is based in Kampala, Uganda and serves residential and commercial clients across Kampala and surrounding areas.",
  },
  {
    question: "How can I request a construction finishing quote?",
    answer:
      "You can request a quote through the contact form, call Rusimo directly, or email project details including location, measurements, preferred finish, and timeline.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-stone-light py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
            Common questions
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
            Planning a finish in Kampala?
          </h2>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="border border-primary/8 bg-white p-6 shadow-soft"
            >
              <h3 className="font-display text-xl font-bold text-primary">
                {faq.question}
              </h3>
              <p className="mt-3 leading-7 text-neutral-dark/74">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
