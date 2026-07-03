import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "./ui";

/**
 * Accessible accordion (button + aria-expanded/aria-controls, not a div
 * with an onClick) plus FAQPage structured data generated from the same
 * data the visible accordion renders, so the two can't drift apart.
 */
export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const panelId = `${baseId}-panel-${i}`;
          const buttonId = `${baseId}-button-${i}`;
          return (
            <Card key={faq.q} tone="light" padding="p-0" className="overflow-hidden">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-inset"
                >
                  <span className="font-serif text-navy-950">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-700 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-6 pb-5 text-gray-600 leading-relaxed"
              >
                {faq.a}
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
