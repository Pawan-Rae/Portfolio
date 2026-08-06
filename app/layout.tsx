import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-mono" });
export const metadata: Metadata = { title: `${profile.name} — Software Engineer`, description: profile.bio, metadataBase: new URL("https://pawan-rae.github.io"), openGraph: { title: `${profile.name} — Software Engineer`, description: profile.bio, type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body className={`${sans.variable} ${mono.variable} font-sans`}><ThemeProvider attribute="class" defaultTheme="light" enableSystem>{children}</ThemeProvider></body></html>; }
