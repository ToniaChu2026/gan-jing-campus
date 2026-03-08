/*
 * TestimonialsSection — Gan Jing Summer Camp
 * Design: Light blue background with testimonial cards and star ratings
 * Matches Gan Jing Kids "Why Parents Love" section style
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const expertQuote = {
  text: "Gan Jing Campus is prioritizing education over engagement metrics with curated, culturally rich media for whole-child development. A paradigm shift in children's digital media.",
  author: "Boris Wittgen",
  role: "Certified Educator & School Development Trainer",
};

const testimonials = [
  {
    text: "It's a great gift for teachers. The platform provides a safe space where I can share educational content without worrying about inappropriate ads or suggestions.",
    author: "Laurence Jossomme Lefebvre",
    location: "France",
    stars: 5,
  },
  {
    text: "I use Gan Jing World for our Kindness Is Cool video contest. The students love creating content about kindness, and the platform keeps everything safe and positive.",
    author: "Leejun Taylor",
    location: "New York, USA",
    stars: 5,
  },
  {
    text: "Gan Jing Campus empowers students socially and academically. Our school won the Kindness Smile Award, and it all started from one classroom experiment with kindness.",
    author: "Adel Mansilla",
    location: "Boston, USA",
    stars: 5,
  },
  {
    text: "There's no such thing as a bad child, only children who need love. Gan Jing Campus helped my students avoid internet addiction with its safe, curated content.",
    author: "Chen Jing-Rong",
    location: "Taiwan",
    stars: 5,
  },
  {
    text: "The undeniably positive impact on my students has been remarkable. They are more engaged, more creative, and more kind to each other since we started using the platform.",
    author: "Sibylle Schneller",
    location: "Switzerland",
    stars: 5,
  },
  {
    text: "My daughter loves the characters and learned how to be respectful and kind. I highly recommend it to all parents looking for safe digital content.",
    author: "Ben Hedges",
    location: "Parent",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-sunshine text-sunshine" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const visibleCards = testimonials.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-sky-light">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            What <span className="text-sky">Educators</span> &{" "}
            <span className="text-sunshine-dark">Parents</span> Say
          </h2>
        </motion.div>

        {/* Expert quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-sky/20" />
            <blockquote className="relative z-10">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-6 pl-8">
                "{expertQuote.text}"
              </p>
              <footer className="flex items-center gap-4 pl-8">
                <div className="w-12 h-12 rounded-full bg-sky/15 flex items-center justify-center">
                  <span className="font-display font-bold text-sky text-lg">
                    {expertQuote.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">
                    {expertQuote.author}
                  </div>
                  <div className="text-sm text-muted-foreground">{expertQuote.role}</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleCards.map((t) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
            >
              <StarRating count={t.stars} />
              <p className="text-foreground/80 leading-relaxed mt-4 mb-6 text-sm md:text-base">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sunshine/15 flex items-center justify-center">
                  <span className="font-display font-bold text-sunshine-dark text-sm">
                    {t.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground/60 hover:text-sky transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === page ? "bg-sky w-6" : "bg-sky/30 w-2.5"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => (p + 1) % totalPages)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground/60 hover:text-sky transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
