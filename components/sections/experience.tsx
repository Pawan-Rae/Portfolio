import { Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line py-section">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="02 / journey" title="Experience & learning" copy="A steady path of experimentation, learning, and building projects that sharpen both my technical and problem-solving skills." />

        <div className="grid gap-6 lg:grid-cols-2">
          {profile.experience.map((item) => (
            <article key={`${item.role}-${item.place}`} className="rounded-xl border border-line bg-paper p-6 shadow-terminal">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-md border border-accent/50 bg-accent/10 p-2 text-accent">
                  <Briefcase size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{item.period}</p>
                  <h3 className="mt-3 font-mono text-xl font-bold text-ink">{item.role}</h3>
                  <p className="mt-1 text-ink/65">{item.place}</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-ink/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
