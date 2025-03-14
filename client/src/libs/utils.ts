import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// TODO : typography not working at some case
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
