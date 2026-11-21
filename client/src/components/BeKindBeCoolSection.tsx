/*
 * #BeKindBeCool Kindness Awards 2026–27 (Gan Jing World).
 * Content from https://www.ganjingworld.com/bekindbecool/ and its School Edition page.
 * `compact` renders a short call-out for the Teachers page; the default is the
 * full section for the Kindness Stories page.
 */
import { ArrowUpRight, Award, CalendarDays, Download, Landmark, Palette, Trophy, Users, Video } from "lucide-react";

const BKBC = "https://www.ganjingworld.com/bekindbecool/";
const SCHOOLS = "https://www.ganjingworld.com/bekindbecool/schools.html";
const TOOLKIT = "https://gjw.us/s/bekindbecool-edu-toolkit";
const ENTRY_FORM = "https://www.ganjingworld.com/creators/bekindbecool-art/form";
const HASHTAG = "https://www.ganjingworld.com/hashtag/BeKindBeCool";

const keyFacts = [
  { icon: Trophy, value: "$10,000", label: "in total prizes" },
  { icon: Landmark, value: "Times Square", label: "billboard showcase" },
  { icon: CalendarDays, value: "Mar 31, 2027", label: "submission deadline" },
  { icon: Award, value: "Apr 30, 2027", label: "winners announced" },
];

const schoolEdition = [
  { icon: Users, text: "Open to ages 6–18 in four age groups (Grades 1–3, 4–6, 7–9, 10–12)" },
  { icon: Palette, text: "Enter a drawing in any medium, a class video — or both" },
  { icon: Trophy, text: "$500 first prize in each age group, plus a $500 People's Choice award" },
  { icon: Video, text: "80 one-year Gan Jing Kids memberships for Excellence Award winners" },
  { icon: Award, text: "Certificates for every participating student, teacher and school" },
  { icon: Download, text: "Runs in a single 45-minute lesson with the free Educator Toolkit" },
];

const states = [
  { state: "New Jersey", by: "Gov. Mikie Sherrill" },
  { state: "Massachusetts", by: "Gov. Maura Healey & Lt. Gov. Kim Driscoll" },
  { state: "Tennessee", by: "Gov. Bill Lee" },
  { state: "Vermont", by: "Gov. Phil Scott" },
  { state: "Colorado", by: "Gov. Jared Polis" },
];

const impact = [
  { value: "34K+", label: "kindness videos" },
  { value: "6,200+", label: "creator channels" },
  { value: "50+", label: "countries" },
  { value: "11", label: "languages" },
  { value: "3 yrs", label: "on Times Square" },
];

function Buttons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={TOOLKIT}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-sunshine px-6 py-3 font-bold text-white shadow-lg hover:bg-sunshine-dark transition-colors no-underline"
      >
        <Download className="w-4 h-4" />
        Free Educator Toolkit (PDF)
      </a>
      <a
        href={ENTRY_FORM}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-bold transition-colors no-underline ${
          light ? "border-white/60 text-white hover:bg-white/15" : "border-sky text-sky hover:bg-sky/10"
        }`}
      >
        Enter the contest
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function BeKindBeCoolSection({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="py-16 bg-gradient-to-br from-sky to-[oklch(0.6_0.17_230)] text-white">
        <div className="container max-w-5xl grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <img
              src="/images/bkbc-wordmark.webp"
              alt="#BeKindBeCool"
              width={2573}
              height={516}
              className="h-10 w-auto mb-4 bg-white rounded-lg px-3 py-1.5"
              loading="lazy"
            />
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
              Bring the #BeKindBeCool Kindness Awards to your class
            </h2>
            <p className="text-white/90 leading-relaxed mb-5 max-w-2xl">
              A free, one-lesson project for ages 6–18: students draw or film an act of kindness.
              $500 first prize in each age group, certificates for everyone, and winning work on the
              Times Square billboard. Final deadline March 31, 2027.
            </p>
            <Buttons light />
          </div>
          <a
            href={SCHOOLS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-white/90 hover:text-white underline-offset-4 hover:underline"
          >
            School Edition details
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="bekindbecool" className="py-20 md:py-28 bg-cream">
      <div className="container max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <img
            src="/images/bkbc-wordmark.webp"
            alt="#BeKindBeCool"
            width={2573}
            height={516}
            className="h-12 md:h-14 w-auto mx-auto mb-5"
            loading="lazy"
          />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Kindness Awards <span className="text-sky whitespace-nowrap">2026–27</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Gan Jing World's global kindness awards, now in their fourth year. This year's theme is
            <strong className="text-foreground"> Choose Kindness</strong>: share an act of kindness, big or
            small, with #BeKindBeCool and help turn it into a global movement.
          </p>
        </div>

        {/* Key facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {keyFacts.map((f) => (
            <div key={f.label} className="rounded-2xl bg-white p-5 text-center border border-border/60">
              <f.icon className="w-6 h-6 text-sunshine-dark mx-auto mb-2" />
              <div className="font-display text-xl md:text-2xl font-extrabold text-foreground">{f.value}</div>
              <div className="text-sm text-muted-foreground">{f.label}</div>
            </div>
          ))}
        </div>

        {/* School edition + winning art */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              School Edition
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              A one-lesson kindness project for your class
            </h3>
            <ul className="space-y-2.5 mb-6">
              {schoolEdition.map((item) => (
                <li key={item.text} className="flex gap-3 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mb-5">
              The toolkit includes a lesson plan, kindness prompts, the entry form and a printable
              certificate for every student.{" "}
              <a href={SCHOOLS} target="_blank" rel="noopener noreferrer" className="text-sky font-semibold hover:underline">
                School Edition details
              </a>
            </p>
            <Buttons />
          </div>
          <figure className="rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src="/images/bkbc-winner-grades-1-3.webp"
              alt="Student drawing of a child comforting a classmate during a hard math test"
              width={672}
              height={497}
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="p-5 text-sm text-muted-foreground">
              <strong className="text-foreground">2025–26 winner, Grades 1–3: "Comfort during a hard test."</strong>{" "}
              Kindness means noticing when someone needs a little support. (EM, McKinley Elementary)
            </figcaption>
          </figure>
        </div>

        {/* Recognition */}
        <div className="rounded-3xl bg-white p-6 md:p-10 border border-border/60">
          <h3 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
            Recognized by U.S. states
          </h3>
          <p className="text-muted-foreground text-center mb-6">
            #BeKindBeCool has been officially recognized by governors in five states.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
            {states.map((s) => (
              <div key={s.state} className="rounded-xl bg-cream p-4 text-center border border-border/60">
                <div className="font-display font-bold text-foreground">{s.state}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.by}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            {impact.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl md:text-3xl font-extrabold text-sky">{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm font-semibold">
            <a href={BKBC} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sky hover:underline">
              Full awards page <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={HASHTAG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sky hover:underline">
              Watch #BeKindBeCool videos <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
