"use client";
import { Menu, Github, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";
const links = ["Profile", "About", "Experience", "Projects", "Skills", "Certifications", "Contact"];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = (mobile = false) => links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className={mobile ? "border-b border-line py-4 font-mono text-lg uppercase tracking-wider" : "font-mono text-xs uppercase tracking-wider text-ink/70 transition-colors hover:text-accent"}>{link}</a>);
  return <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md"><nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"><a href="#profile" className="font-mono text-sm font-bold tracking-tight text-ink">PR<span className="text-accent">.</span></a><div className="hidden items-center gap-6 md:flex">{navLinks()}<a aria-label="Pawan Rai on GitHub" href={profile.github} target="_blank" rel="noreferrer" className="text-ink hover:text-accent"><Github size={18} /></a><ThemeToggle /></div><div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button aria-label="Open navigation menu" aria-expanded={open} onClick={() => setOpen(true)} className="grid size-10 place-items-center rounded-md border border-line"><Menu size={19}/></button></div></nav>{open && <div role="dialog" aria-modal="true" aria-label="Mobile navigation" className="fixed inset-0 z-50 bg-paper p-5 md:hidden"><div className="flex justify-end"><button aria-label="Close navigation menu" onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-md border border-line"><X size={20}/></button></div><div className="mt-12 flex flex-col">{navLinks(true)}<a href={profile.github} target="_blank" rel="noreferrer" className="mt-7 flex items-center gap-2 font-mono text-sm text-accent"><Github size={17}/> GitHub</a></div></div>}</header>;
}
