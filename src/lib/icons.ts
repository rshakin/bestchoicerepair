const colors: Record<string, { bg: string; text: string }> = {
  washer: { bg: 'bg-blue-50', text: 'text-blue-700' },
  dryer: { bg: 'bg-amber-50', text: 'text-amber-700' },
  refrigerator: { bg: 'bg-cyan-50', text: 'text-cyan-700' },
  dishwasher: { bg: 'bg-teal-50', text: 'text-teal-700' },
  oven: { bg: 'bg-orange-50', text: 'text-orange-700' },
  microwave: { bg: 'bg-violet-50', text: 'text-violet-700' },
  disposal: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
};

function applianceSlug(name: string) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  return slug === 'garbage-disposal' ? 'disposal' : slug;
}

export function applianceColor(name: string) {
  return colors[applianceSlug(name)] ?? { bg: 'bg-blue-50', text: 'text-blue-700' };
}

const withPhoto = new Set(['washer', 'dryer', 'refrigerator', 'dishwasher', 'oven', 'microwave', 'disposal']);

export function applianceImage(name: string) {
  const slug = applianceSlug(name);
  return withPhoto.has(slug) ? `/appliances/${slug}.jpg` : null;
}
