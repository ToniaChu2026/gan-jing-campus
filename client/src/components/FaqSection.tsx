/*
 * FaqSection — visible FAQ (homepages, Teachers, free guide). The matching FAQPage JSON-LD is
 * baked into the route HTML at build time from the same data (lib/faq.ts).
 */
import { ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import type { FaqItem } from "@/lib/faq";

interface FaqSectionProps {
  items: FaqItem[];
  badge: string;
  heading: string;
  intro: string;
  zh?: boolean;
}

export default function FaqSection({ items, badge, heading, intro, zh = false }: FaqSectionProps) {
  const font = zh ? "font-['Noto_Sans_SC']" : "";
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <span className={`inline-flex items-center gap-1.5 bg-sky/10 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4 ${font}`}>
            <HelpCircle className="w-4 h-4" />
            {badge}
          </span>
          <h2 className={`font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4 ${font}`}>
            {heading}
          </h2>
          <p className={`text-muted-foreground text-lg ${font}`}>{intro}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border/70 bg-cream px-6 py-5 open:bg-white open:shadow-md transition-shadow"
              open={i === 0}
            >
              <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-foreground ${font}`}>
                <h3 className="text-left">{item.question}</h3>
                <span className="text-sky text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className={`mt-3 text-muted-foreground leading-relaxed ${font}`}>{item.answer}</p>
              {item.link &&
                (item.link.href.startsWith("/") ? (
                  <Link
                    href={item.link.href}
                    className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky hover:underline ${font}`}
                  >
                    {item.link.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky hover:underline ${font}`}
                  >
                    {item.link.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
