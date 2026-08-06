import { skillGroups } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
export function Skills() { return <section id="skills" className="border-b border-line py-section"><div className="mx-auto max-w-6xl px-5"><SectionHeading index="02 / toolkit" title="Skills & Focus"/><div className="grid gap-px border border-line bg-line sm:grid-cols-2">{skillGroups.map((group) => <article key={group.category} className="bg-paper p-6"><h3 className="font-mono text-sm font-bold uppercase tracking-wider text-accent">{group.category}</h3><div className="mt-6 flex flex-wrap gap-2">{group.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div></article>)}</div></div></section>; }
