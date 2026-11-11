import { profile } from "./profile";

export interface ContactLink {
  label: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { label: "GitHub", href: profile.github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alejandro-valverde-43a727232/",
  },
];
