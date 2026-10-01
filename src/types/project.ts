export type ProjectAspect = "wide" | "portrait" | "standard";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  industry: string;
  creativeSkill: string;
  description: string;
  concept: string;
  objective: string;
  video: string;
  poster: string;
  images: string[];
  year: string;
  tags: string[];
  featured: boolean;
  conceptual: boolean;
  accent: string;
  aspect: ProjectAspect;
};
