/*
 * AgeGroups — Gan Jing Summer Camp
 * Design: Matches Gan Jing Kids "Explore our shows" tab-based section
 * Three age groups with curated content highlights
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Baby, BookHeart, GraduationCap, Play, Sparkles } from "lucide-react";

const ageGroups = [
  {
    id: "early",
    label: "Early Explorers",
    age: "4 & under",
    icon: Baby,
    color: "bg-coral",
    lightColor: "bg-coral/10",
    textColor: "text-coral",
    shows: [
      { name: "Pocoyo", desc: "Curiosity, imagination, emotional intelligence" },
      { name: "Pinkfong", desc: "Music-based learning, language development" },
      { name: "Cocoland", desc: "Adventure, friendship, learning through play" },
      { name: "Guitar & Drum", desc: "Emotional intelligence, friendship, teamwork" },
    ],
    description:
      "Gentle, colorful content designed for the youngest learners. Focus on basic emotions, simple stories, and music-based learning with beloved characters.",
  },
  {
    id: "young",
    label: "Young Learners",
    age: "5-7 years",
    icon: BookHeart,
    color: "bg-sky",
    lightColor: "bg-sky/10",
    textColor: "text-sky",
    shows: [
      { name: "Super Wings", desc: "Problem-solving, teamwork, cultural awareness" },
      { name: "Too Too Boy", desc: "Adventure, problem-solving, creativity" },
      { name: "Splash & Bubbles", desc: "Ocean exploration, marine life, friendship" },
      { name: "Zippy & Little Tree", desc: "Nature, kindness, environmental care" },
    ],
    description:
      "Engaging stories that build problem-solving skills, teamwork, and cultural awareness. Content that grows with your child's expanding curiosity.",
  },
  {
    id: "growing",
    label: "Growing Minds",
    age: "8-16 years",
    icon: GraduationCap,
    color: "bg-meadow",
    lightColor: "bg-meadow/10",
    textColor: "text-meadow",
    shows: [
      { name: "STEM Adventures", desc: "Science, coding, experiments, engineering" },
      { name: "World Cultures", desc: "Geography, traditions, languages" },
      { name: "Character Stories", desc: "Real-life heroes, moral courage, leadership" },
      { name: "Creative Arts", desc: "Drawing, music composition, storytelling" },
    ],
    description:
      "Thought-provoking content for pre-teens and teens. STEM exploration, world cultures, character development, and creative expression for growing minds.",
  },
];

export default function AgeGroups() {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const group = ageGroups[active];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky/10 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Age-Appropriate Content
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Explore Our <span className="text-sky">Shows</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Content carefully organized by age group to ensure every child gets the right experience.
          </p>
        </motion.div>

        {/* Age tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {ageGroups.map((g, i) => (
            <button
              key={g.id}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-1 px-5 py-3 rounded-2xl transition-all font-display ${
                active === i
                  ? `${g.color} text-white shadow-lg scale-105`
                  : "bg-white border border-border hover:border-sky/30 text-foreground"
              }`}
            >
              <g.icon className="w-5 h-5" />
              <span className="font-bold text-sm">{g.label}</span>
              <span className={`text-xs ${active === i ? "text-white/80" : "text-muted-foreground"}`}>
                {g.age}
              </span>
            </button>
          ))}
        </div>

        {/* Active group content */}
        <motion.div
          key={group.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`rounded-3xl ${group.lightColor} p-8 md:p-12`}>
            <div className="flex items-center gap-3 mb-4">
              <group.icon className={`w-7 h-7 ${group.textColor}`} />
              <h3 className="font-display text-2xl font-bold text-foreground">
                {group.label}{" "}
                <span className="text-muted-foreground font-normal text-lg">({group.age})</span>
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{group.description}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {group.shows.map((show) => (
                <div
                  key={show.name}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg ${group.lightColor} flex items-center justify-center shrink-0`}>
                      <Play className={`w-4 h-4 ${group.textColor}`} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-1">{show.name}</h4>
                      <p className="text-muted-foreground text-sm">{show.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
