import { profile } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="border-b border-line py-section">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="01 / about" title="A developer building useful things" copy="I like building focused digital experiences that solve real problems and teach me something new along the way." />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-ink/70">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-line bg-paper p-5 shadow-terminal">
                <p className="font-mono text-2xl font-bold text-accent">{stat.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {profile.strengths.map((item) => (
            <span key={item} className="rounded-full border border-line bg-muted px-3 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
