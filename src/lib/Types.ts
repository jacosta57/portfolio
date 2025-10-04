import { JSX } from "react";

export interface Command {
  name: string;
  output: JSX.Element;
}

export interface Files {
  [filename: string]: string | object;
}

export type CommandFunction = (args: string[]) => JSX.Element;

export interface CommandMap {
  [commandName: string]: CommandFunction;
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  fullDescription?: string;
  problem?: string;
  solution?: string;
  tags: string[];
  images: string[];
  github?: string | null;
  liveDemo?: string | null;
  date?: string;
  featured?: boolean;
  category?: string;

  seniorDesign?: boolean;
  role?: string;
  teamSize?: number;
  bigPictureContribution?: string;
  skillsGained?: {
    technical?: string[];
    professional?: string[];
  };
  supportingDocuments?: SupportingDocument[];

  features?: string[];
  challenges?: string[];
  learnings?: string[];
  contributions?: Contribution[];
  futureImprovements?: string[];
  metrics?: string[];
}

export interface Contribution {
  name: string;
  percentage: number;
}

export interface SupportingDocument {
  title: string;
  path?: string;
  url?: string;
  description: string;
}
