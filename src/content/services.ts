import type { Locale, Localized } from './projects';
import type { EmblemId } from '../components/sections/services/ServiceEmblems';

export type { Locale };

export type DemoId =
  | 'echo'
  | 'chronicle'
  | 'fortune'
  | 'continuum'
  | 'archive'
  | 'relay'
  | 'bazi'
  | 'poetry';

export interface ServiceItem {
  slug: string;
  /** Brand-style English title — kept short so it can pair with the zh subtitle. */
  name: string;
  /** zh keeps the poetic Chinese name; en is the functional metric-style name. */
  subtitle: Localized;
  tagline: Localized;
  /** 3 short bullets surfaced only when the row is expanded. */
  features: { zh: string[]; en: string[] };
  tags: string[];
  /** Inline geometric emblem rendered in the collapsed row — see ServiceEmblems.tsx. */
  emblem: EmblemId;
  /** Which scripted demo to render at the top of the expanded panel. */
  demo: DemoId;
  /**
   * Single canonical deliverable screenshot, shown as a clickable thumbnail below
   * the demo. null for Continuum (the live demo replaces the screenshot, since there
   * is no public sample image). Click opens an <ImageLightbox>.
   */
  sampleImage: string | null;
  /** Hover/expand accent color (rgba). Sampled from the source mockup palette. */
  accentRgba: `rgba(${number}, ${number}, ${number}, ${number})`;
  /**
   * Live deployment URL. Present only for the shipped subdomain products
   * (shiyun / ai / ming); when set, the expanded drawer shows a "visit site" button.
   * The older side-projects are demo + inquiry only, so they leave this undefined.
   */
  visitUrl?: string;
  /**
   * Optional compliance / entertainment-only notice, rendered as a distinct boxed
   * line in the expanded drawer. Used where the framing needs an explicit legal or
   * "for-fun only" caveat (e.g. persona modeling, fortune-telling).
   */
  disclaimer?: Localized;
  /**
   * Marks a 整蛊 / prank product: renders a "整蛊" badge on the collapsed row, and the
   * whole entry is hidden when the UI is in English (the gag only lands in Chinese).
   */
  prank?: boolean;
}

// Five small side-projects ("做着玩的副业"). Each row collapses by default; on
// expand it shows a scripted demo of the deliverable, plus one click-to-zoom
// screenshot of the actual artifact (except Continuum, which is demo-only).
export const services: ServiceItem[] = [];

// ── Section layout ──────────────────────────────────────────────────────────
// The Services list is a two-level fold. Top level is the order the owner asked
// for: shiyun → ai → (the older chat-record suite, collapsed into one group) → ming.
// A 'group' entry expands to reveal its child rows; each child then expands to its
// own demo — hence "二级折叠" (two levels of folding).
export type ServiceEntry =
  | { kind: 'item'; slug: string }
  | {
      kind: 'group';
      id: string;
      title: Localized;
      subtitle: Localized;
      emblem: EmblemId;
      accentRgba: `rgba(${number}, ${number}, ${number}, ${number})`;
      children: string[];
    };

export const serviceLayout: ServiceEntry[] = [];

/** slug → ServiceItem, for the layout renderer to resolve entries. */
export const serviceBySlug: Record<string, ServiceItem> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);
