import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <span className={cn("inline-flex items-center rounded border border-line bg-muted px-2.5 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink", className)} {...props} />; }
