export interface Stat { value: string; label: string; }
export interface ExperienceItem { role: string; place: string; period: string; description: string; }
export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  about: string[];
  stats: Stat[];
  strengths: string[];
  experience: ExperienceItem[];
}
export const profile: Profile = {
  name: "Pawan Rai",
  title: "Aspiring Software Engineer — Full Stack Development & Python",
  bio: "Computer science student building practical Python and full-stack applications. Comfortable taking an idea from backend APIs to deployed frontends, and quick to learn the tools a problem needs.",
  location: "Bhaktapur, Nepal",
  email: "pawannrae@gmail.com",
  phone: "+977 9849645685",
  github: "https://github.com/Pawan-Rae",
  about: [
    "I am a Computer Science student focused on turning ideas into reliable digital products. I enjoy writing code that is easy to maintain, clear in structure, and useful in everyday life.",
    "My work combines Python, web APIs, and frontend interfaces so I can build complete experiences from the backend to the UI. I learn quickly, stay curious, and enjoy solving real-world problems through clean engineering.",
  ],
  stats: [
    { value: "2+", label: "Years learning" },
    { value: "5+", label: "Projects shipped" },
    { value: "100%", label: "Curiosity-driven" },
  ],
  strengths: ["Python development", "Full-stack web apps", "API design", "Problem solving", "UI implementation", "Learning new tools"],
  experience: [
    {
      role: "Self-taught Developer",
      place: "Independent projects",
      period: "2023 — Present",
      description: "Building Python scripts, small web products, and full-stack prototypes to strengthen real-world engineering skills.",
    },
    {
      role: "Computer Science Student",
      place: "Bachelor's in Computer Application",
      period: "2023 — Present",
      description: "Expanding my understanding of data structures, software design, programming fundamentals, and modern web development workflows.",
    },
  ]
};
