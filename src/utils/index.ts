import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Variants, Transition } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ease = "easeOut" as const;

const t = (duration = 0.55): Transition => ({ duration, ease });

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: t() },
};

export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
