"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-cream/10">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left py-6 flex items-start justify-between gap-6 group"
            aria-expanded={openIndex === i}
          >
            <span className="font-display text-cream text-xl lg:text-2xl font-medium leading-snug group-hover:text-amber transition-colors">
              {faq.question}
            </span>
            <span className={`flex-shrink-0 mt-1 text-amber transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
              <ChevronDown size={22} />
            </span>
          </button>

          <div
            className={`service-body ${openIndex === i ? "open" : ""}`}
          >
            <div>
              <p className="font-body text-cream/60 text-base leading-relaxed pb-6">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
