/*
 * WeeklyThemes — Gan Jing Summer Camp
 * Design: Alternating color-block sections with large numbered circles
 * Matches Gan Jing Kids "6 Expert-Recommended Educational Values" style
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Tent,
  Rocket,
  Palette,
  Landmark,
  Heart,
  BookOpen,
  Leaf,
  Scissors,
  ArrowUpRight,
} from "lucide-react";

const ARTICLE = "https://www.ganjingworld.com/article/";

const weeks = [
  {
    num: 1,
    title: "My Outdoor Moments",
    icon: Tent,
    color: "text-meadow",
    bgColor: "bg-meadow/10",
    numBg: "bg-meadow",
    tags: ["Camping", "Picnics", "Nature Trails", "Stargazing"],
    desc: "20+ films and series about the outdoors, sports and travel, like The Pony Sitter Club and Nature Knows Best. Campers stargaze, go on a nature trail treasure hunt and tell stories under the stars.",
    image: "/images/week-1.webp",
    link: `${ARTICLE}1hjrfob7b551wUxqvpqucE78M1st1c`,
  },
  {
    num: 2,
    title: "Space & Science",
    icon: Rocket,
    color: "text-[oklch(0.55_0.2_280)]",
    bgColor: "bg-[oklch(0.55_0.2_280)]/10",
    numBg: "bg-[oklch(0.55_0.2_280)]",
    tags: ["Space", "Ocean Life", "Experiments", "Nature"],
    desc: "Fun, educational shows about nature, space and the ocean, from emperor penguins to Shark School. Campers build molecule models from clay and try hands-on science activities.",
    image: "/images/week-2.webp",
    link: `${ARTICLE}1hjrg7h0mo13cDJsbNU54yoRr1f31c`,
  },
  {
    num: 3,
    title: "Art & Music Journey",
    icon: Palette,
    color: "text-coral",
    bgColor: "bg-coral/10",
    numBg: "bg-coral",
    tags: ["Drawing", "Music", "Performance", "Creativity"],
    desc: "Sing-alongs, The Mozart Band and the film Hope Dances bring art and music to life. Campers sketch nature, share a musical performance and express themselves creatively.",
    image: "/images/week-3.webp",
    link: `${ARTICLE}1hjrg8de72m5rKFvi8hdIn3ak1o01c`,
  },
  {
    num: 4,
    title: "Legends of History",
    icon: Landmark,
    color: "text-sunshine-dark",
    bgColor: "bg-sunshine/10",
    numBg: "bg-sunshine-dark",
    tags: ["Historical Heroes", "Chinese Culture", "Storytelling", "Role-play"],
    desc: "Dramas and animated series about legendary figures take kids on a time-travel journey. Campers tell the story of a hero like Confucius or Hua Mulan and imagine a day as a young scholar.",
    image: "/images/week-4.webp",
    link: `${ARTICLE}1hjrg942odf5IYYYGRpumo9vh17n1c`,
  },
  {
    num: 5,
    title: "Kindness & Character",
    icon: Heart,
    color: "text-coral",
    bgColor: "bg-coral/10",
    numBg: "bg-coral",
    tags: ["Kindness", "Gratitude", "Empathy", "Role Models"],
    desc: "A week focused on the heart. Campers become Secret Kindness Agents, fill a Gratitude Jar, make a Hero Wall Poster and draw a kindness comic strip.",
    image: "/images/week-5.webp",
    link: `${ARTICLE}1hjrg9ra4pt2DMD8k6c5lVJVa1sb1c`,
  },
  {
    num: 6,
    title: "Reading Adventure",
    icon: BookOpen,
    color: "text-sky",
    bgColor: "bg-sky/10",
    numBg: "bg-sky",
    tags: ["Books", "Book Reviews", "Acting", "Reading Aloud"],
    desc: "Dive into captivating stories and new worlds. Campers review a favorite book, act out a scene, design a new book cover and read aloud to friends or family.",
    image: "/images/week-6.webp",
    link: `${ARTICLE}1hjrgbeah3f6qdSd7gnN33avg1ti1c`,
  },
  {
    num: 7,
    title: "Little Naturalist",
    icon: Leaf,
    color: "text-meadow",
    bgColor: "bg-meadow/10",
    numBg: "bg-meadow",
    tags: ["Plants", "Animals", "Nature Diary", "Eco-Friendly"],
    desc: "Discover plants, animals and the environment. Campers go on a scavenger hunt, keep a nature diary, plant a seed and write an eco-friendly pledge.",
    image: "/images/week-7.webp",
    link: `${ARTICLE}1hjrgcdnssk45Y795WV0fG4Dh1uj1c`,
  },
  {
    num: 8,
    title: "Let's DIY Together",
    icon: Scissors,
    color: "text-sunshine-dark",
    bgColor: "bg-sunshine/10",
    numBg: "bg-sunshine-dark",
    tags: ["Crafts", "Recycling", "Teamwork", "Hands-on"],
    desc: "Creative shows like Let's DIY and Nicole's Attic inspire hands-on learning. Campers take the Trash to Treasure challenge and turn everyday materials into new creations.",
    image: "/images/week-8.webp",
    link: `${ARTICLE}1hjrgd71vrj45iNYFfEonXRlE18n1c`,
  },
];

function WeekCard({
  week,
  index,
}: {
  week: (typeof weeks)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col md:flex-row gap-6 items-start"
    >
      {/* Number circle */}
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${week.numBg} flex items-center justify-center shadow-lg shrink-0 ${isEven ? "md:order-first" : "md:order-last"}`}>
        <span className="font-display text-2xl md:text-3xl font-extrabold text-white">
          {week.num}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <week.icon className={`w-6 h-6 ${week.color}`} />
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
            {week.title}
          </h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-3">{week.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {week.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-block ${week.bgColor} ${week.color} text-xs font-semibold px-3 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={week.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block max-w-sm overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            src={week.image}
            alt={`Week ${week.num} theme: ${week.title}`}
            className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform"
            loading="lazy"
          />
        </a>
        <a
          href={week.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 mt-3 text-sm font-semibold ${week.color} hover:underline`}
        >
          See this week's watchlist & activities
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function WeeklyThemes() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? weeks : weeks.slice(0, 4);

  return (
    <section id="weekly-themes" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            8-Week Program
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Weekly <span className="text-sunshine-dark">Themes</span> &{" "}
            <span className="text-sky">Adventures</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each week brought a new theme with a curated watchlist of films and shows, plus hands-on
            activities. Campers shared their work on Gan Jing World with #GanJingSummerCamp — open any
            week to revisit it.
          </p>
        </motion.div>

        {/* Week cards */}
        <div className="max-w-3xl mx-auto space-y-10">
          {displayed.map((week, i) => (
            <WeekCard key={week.num} week={week} index={i} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center rounded-full bg-sky px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-[oklch(0.6_0.17_230)] transition-all hover:scale-105"
            >
              Show All 8 Weeks
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
