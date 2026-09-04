import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    // Overrides the default `<title>` tag ("<title> in Las Vegas | <site>")
    // when the appliance goes by more than one search term — e.g. washer /
    // washing machine, oven / range / stove, refrigerator / freezer. GSC
    // (2026-09-03) showed these pages drawing impressions on the synonym
    // and the "top-rated / professional / emergency" modifier variants but
    // never matching in the snippet, so CTR was flat zero. Does NOT change
    // the H1, breadcrumb, or schema serviceType — only the title tag.
    seoTitle: z.string().optional(),
    shortDescription: z.string(),
    metaDescription: z.string(),
    icon: z.string(),
    order: z.number(),
    commonIssues: z.array(z.string()),
    // Service-specific Q&As appended after the shared set the template
    // builds (same-day/emergency, pricing, warranty, brands). Use these for
    // subtype and synonym coverage — top-load vs front-load, gas vs
    // electric, "is washing machine repair the same thing".
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    relatedProblems: z.array(reference('problems')).default([]),
  }),
});

const brands = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/brands' }),
  schema: z.object({
    name: z.string(),
    metaDescription: z.string(),
    order: z.number(),
    tier: z.enum(['Luxury & Built-In', 'Modern & Everyday', 'Workhorse & Value']),
    commonIssues: z.array(z.string()),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
    metaDescription: z.string(),
    order: z.number(),
    zipCodes: z.array(z.string()),
    neighborhoods: z.array(z.string()),
    lat: z.number(),
    lng: z.number(),
    // One sentence per service slug (services/*.md's filename), tying that
    // specific service to this location's actual housing stock/appliance
    // profile — e.g. Summerlin's built-in refrigeration columns, Paradise's
    // stacked laundry units. Lets the /services/[service]/[location]/ combo
    // pages say something genuinely different per city instead of just
    // swapping the city name into an otherwise identical paragraph (see
    // that template for why this matters — it was the single biggest
    // driver of "not indexed" pages as of the 2026-08-19 GSC review).
    serviceNotes: z.record(z.string(), z.string()),
  }),
});

const problems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/problems' }),
  schema: z.object({
    title: z.string(),
    appliance: z.string(),
    metaDescription: z.string(),
    causes: z.array(z.string()),
    relatedService: reference('services'),
  }),
});

export const collections = { services, brands, locations, problems };
