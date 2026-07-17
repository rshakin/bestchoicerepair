import type { ImageMetadata } from 'astro';
import washer from '../assets/appliances/washer.jpg';
import dryer from '../assets/appliances/dryer.jpg';
import refrigerator from '../assets/appliances/refrigerator.jpg';
import dishwasher from '../assets/appliances/dishwasher.jpg';
import oven from '../assets/appliances/oven.jpg';
import microwave from '../assets/appliances/microwave.jpg';
import disposal from '../assets/appliances/disposal.jpg';

const colors: Record<string, { bg: string; text: string }> = {
  washer: { bg: 'bg-blue-50 dark:bg-blue-950/40', text: 'text-blue-700 dark:text-blue-400' },
  dryer: { bg: 'bg-amber-50 dark:bg-amber-950/40', text: 'text-amber-700 dark:text-amber-400' },
  refrigerator: { bg: 'bg-cyan-50 dark:bg-cyan-950/40', text: 'text-cyan-700 dark:text-cyan-400' },
  dishwasher: { bg: 'bg-teal-50 dark:bg-teal-950/40', text: 'text-teal-700 dark:text-teal-400' },
  oven: { bg: 'bg-orange-50 dark:bg-orange-950/40', text: 'text-orange-700 dark:text-orange-400' },
  microwave: { bg: 'bg-violet-50 dark:bg-violet-950/40', text: 'text-violet-700 dark:text-violet-400' },
  disposal: { bg: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-700 dark:text-emerald-400' },
};

function applianceSlug(name: string) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  return slug === 'garbage-disposal' ? 'disposal' : slug;
}

export function applianceColor(name: string) {
  return colors[applianceSlug(name)] ?? { bg: 'bg-blue-50 dark:bg-blue-950/40', text: 'text-blue-700 dark:text-blue-400' };
}

const images: Record<string, ImageMetadata> = { washer, dryer, refrigerator, dishwasher, oven, microwave, disposal };

export function applianceImage(name: string): ImageMetadata | null {
  return images[applianceSlug(name)] ?? null;
}
