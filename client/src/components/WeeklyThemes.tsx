/*
 * WeeklyThemes — Gan Jing Summer Camp
 * Design: Alternating color-block sections with large numbered circles
 * Matches Gan Jing Kids "6 Expert-Recommended Educational Values" style
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Heart,
  Palette,
  Globe,
  Brain,
  Music,
  Leaf,
  Star,
  Lightbulb,
} from "lucide-react";

const weeks = [
  {
    num: 1,
    title: "Kindness & Compassion",
    icon: Heart,
    color: "text-coral",
    bgColor: "bg-coral/10",
    numBg: "bg-coral",
    tags: ["Empathy", "Sharing", "Helping Others", "Friendship"],
    desc: "Discover the power of kindness through heartwarming stories and the #KindnessIsCool challenge. Children learn how small acts of compassion can change the world.",
  },
  {
    num: 2,
    title: "Creativity & Arts",
    icon: Palette,
    color: "text-sky",
    bgColor: "bg-sky/10",
    numBg: "bg-sky",
    tags: ["Drawing", "Music", "Dance", "Storytelling"],
    desc: "Unleash imagination through art, music, and creative expression. Watch inspiring shows and complete hands-on art projects each day.",
  },
  {
    num: 3,
    title: "World Cultures & Languages",
    icon: Globe,
    color: "text-meadow",
    bgColor: "bg-meadow/10",
    numBg: "bg-meadow",
    tags: ["Geography", "Traditions", "Languages", "Food"],
    desc: "Travel the world from home! Explore diverse cultures, learn basic phrases in new languages, and celebrate what makes each culture unique.",
  },
  {
    num: 4,
    title: "STEM Explorers",
    icon: Brain,
    color: "text-[oklch(0.55_0.2_280)]",
    bgColor: "bg-[oklch(0.55_0.2_280)]/10",
    numBg: "bg-[oklch(0.55_0.2_280)]",
    tags: ["Science", "Math", "Coding", "Experiments"],
    desc: "Dive into the wonders of science, technology, engineering, and math through fun experiments, puzzles, and problem-solving adventures.",
  },
  {
    num: 5,
    title: "Music & Movement",
    icon: Music,
    color: "text-sunshine-dark",
    bgColor: "bg-sunshine/10",
    numBg: "bg-sunshine-dark",
    tags: ["Songs", "Fitness", "Yoga", "Rhythm"],
    desc: "Get moving with energizing music, dance routines, yoga sessions, and rhythm games. A week dedicated to healthy bodies and joyful movement.",
  },
  {
    num: 6,
    title: "Nature & Environment",
    icon: Leaf,
    color: "text-meadow",
    bgColor: "bg-meadow/10",
    numBg: "bg-meadow",
    tags: ["Animals", "Plants", "Ecology", "Outdoor Fun"],
    desc: "Connect with the natural world through nature documentaries, outdoor scavenger hunts, gardening projects, and learning about our planet.",
  },
  {
    num: 7,
    title: "Character & Values",
    icon: Star,
    color: "text-sunshine-dark",
    bgColor: "bg-sunshine/10",
    numBg: "bg-sunshine-dark",
    tags: ["Honesty", "Courage", "Respect", "Responsibility"],
    desc: "Build strong character through stories of real-life heroes, moral dilemmas, and the Global Kindness Video Awards inspiration.",
  },
  {
    num: 8,
    title: "Innovation & Future",
    icon: Lightbulb,
    color: "text-sky",
    bgColor: "bg-sky/10",
    numBg: "bg-sky",
    tags: ["Invention", "Teamwork", "Leadership", "Dreams"],
    desc: "Cap off the summer by dreaming big! Explore inventions, work on a final creative project, and celebrate everything learned together.",
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
        <div className="flex flex-wrap gap-2">
          {week.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-block ${week.bgColor} ${week.color} text-xs font-semibold px-3 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
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
    <section id="weekly-themes" className="py-20 md:py-28 bg-cream">
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
            Each week brings a new theme with curated films, creative activities, and kindness challenges
            designed to inspire and educate.
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
