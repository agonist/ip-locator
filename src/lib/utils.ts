import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appBaseUrl = () => {
  const env = process.env.VERCEL_ENV ?? process.env.NEXT_PUBLIC_VERCEL_ENV;
  const url = process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;

  if (env === "production") {
    return `https://${url}`;
  } else if (env === "preview" || env === "development") {
    return `https://${url}`;
  } else {
    return "http://localhost:3000";
  }
};
