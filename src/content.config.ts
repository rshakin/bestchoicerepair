import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    metaDescription: z.string(),
    icon: z.string(),
    order: z.number(),
    commonIssues: z.array(z.string()),
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
