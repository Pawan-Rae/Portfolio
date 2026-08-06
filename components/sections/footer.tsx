import { profile } from "@/data/profile";
export function Footer() { return <footer className="border-t border-line"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-6 font-mono text-xs text-ink/50 sm:flex-row"><p>© {new Date().getFullYear()} {profile.name}</p><p>Designed & built with care in Nepal.</p></div></footer>; }
