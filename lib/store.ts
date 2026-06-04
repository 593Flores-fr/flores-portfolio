/**
 * Utilitaire générique lecture/écriture JSON
 * Fonctionne en dev/prod local. Sur Vercel : lecture OK, écriture nécessite une DB.
 */
import fs from "fs";
import path from "path";

export function readJSON<T>(filename: string): T {
  const file = path.join(process.cwd(), "data", filename);
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return [] as unknown as T;
  }
}

export function writeJSON<T>(filename: string, data: T): void {
  const file = path.join(process.cwd(), "data", filename);
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
}

// ── Types ──────────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  visible: boolean;
  order: number;
};

export type Tarif = {
  id: string;
  num: string;
  title: string;
  price: string;
  description: string;
  specs: string[];
};

export type Client = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  role: "client" | "vip";
  createdAt: string;
};

export type PageView = {
  path: string;
  timestamp: string;
  referrer: string;
  ua: string;
};

export type HomeData = {
  eyebrow: string;
  tagline: string;
  ctaHeadline: string;
  ctaPitch: string;
  status: string;
  statusText: string;
};

export type AboutData = {
  bio: string[];
  stats: { value: string; label: string }[];
};
