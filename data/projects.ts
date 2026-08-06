export interface Project { title: string; description: string[]; tech: string[]; githubUrl: string; featured?: boolean; }
export const projects: Project[] = [
  { title: "ExpenseTracker", tech: ["JavaScript", "Full-Stack"], featured: true, githubUrl: "https://github.com/Pawan-Rae/ExpenseTracker", description: ["Full-stack expense tracking web application with separate frontend and backend codebases.", "Records, categorizes, and manages personal expenses through a client-server architecture."] },
  { title: "Note-Taking App", tech: ["Python"], githubUrl: "https://github.com/Pawan-Rae/note-taking-app", description: ["Command-line application for creating, storing, and managing personal notes."] },
  { title: "To-do List", tech: ["Python"], githubUrl: "https://github.com/Pawan-Rae/To-do-List", description: ["Command-line application to add, track, and manage daily tasks."] },
  { title: "Guessing Number Game", tech: ["Python"], githubUrl: "https://github.com/Pawan-Rae/guessing-number", description: ["Interactive number-guessing game built around core logic, loops, and conditionals."] },
  { title: "Countdown Timer", tech: ["Python"], githubUrl: "https://github.com/Pawan-Rae/count-down", description: ["Countdown timer script exploring time-based program logic."] }
];
