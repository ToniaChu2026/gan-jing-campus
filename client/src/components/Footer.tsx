/*
 * Footer — Gan Jing Summer Camp
 * Design: Dark footer with organized links and branding
 */
import { Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Program",
    links: [
      { label: "About", href: "#about" },
      { label: "Weekly Themes", href: "#weekly-themes" },
      { label: "For Teachers", href: "#teachers" },
      { label: "Join Now", href: "#join" },
    ],
  },
  {
    title: "Gan Jing World",
    links: [
      { label: "Gan Jing Campus", href: "https://www.ganjingworld.com/ganjingcampus" },
      { label: "Gan Jing Kids", href: "https://www.ganjingworld.com/gjwplus/kids/ganjingkids" },
      { label: "Gan Jing World", href: "https://www.ganjingworld.com" },
      { label: "Teacher Channel", href: "https://www.ganjingworld.com/ganjingcampus" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Teacher Handbook", href: "https://www.ganjingworld.com/news/1i13tdngs6fsEZDUDBoyG2Fto16n1c" },
      { label: "Apply for Premium", href: "https://www.ganjingworld.com/news/1i3csp1t9651d6ebrqpymLf3u1j11c" },
      { label: "Kindness Awards", href: "https://www.ganjingworld.com/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c" },
      { label: "Success Stories", href: "https://www.ganjingworld.com/news/1htqng1kqt45DWMGkHwsYvRcf1gk1c" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#133960] text-white/70">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-sky flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#FFD166" />
                  <path d="M10 20 Q16 12 22 20" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <circle cx="12" cy="14" r="2" fill="#fff" />
                  <circle cx="20" cy="14" r="2" fill="#fff" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-white">
                Gan Jing Campus
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              An ad-free, educator-friendly platform powered by Ethical AI. 
              Promoting kindness, creativity, and safe digital learning for children worldwide.
            </p>
            <p className="text-xs text-white/40">
              Powered by Gan Jing World
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-white text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm hover:text-white transition-colors no-underline text-white/60 hover:text-white/90"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Gan Jing World. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-coral fill-coral" /> for a kinder world
          </p>
        </div>
      </div>
    </footer>
  );
}
