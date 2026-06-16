export type Locale = 'zh' | 'en';

export interface Localized {
  zh: string;
  en: string;
}

export interface ProjectFeature {
  title: Localized;
  description: Localized;
  /** Path under /public, e.g. /projects/sync-station/feature-1.jpg. Falls back to placeholder when missing. */
  image: string;
}

/** A single source repo. Projects that bundle more than one repo (e.g. the game
 *  trainers) use `repos` instead of `githubUrl` to render one link button each. */
export interface RepoLink {
  label: Localized;
  url: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  tagline: Localized;
  description: Localized;
  tags: string[];
  /** Single-repo projects set this; multi-repo projects use `repos` instead. */
  githubUrl?: string;
  /** Multiple source repos, each rendered as its own link button on the detail page. */
  repos?: RepoLink[];
  liveUrl?: string;
  heroImage: string;
  features: ProjectFeature[];
  techStack: string[];
}

export const projects: ProjectDetail[] = [];

export const getProjectBySlug = (slug: string): ProjectDetail | undefined =>
  projects.find((p) => p.slug === slug);
