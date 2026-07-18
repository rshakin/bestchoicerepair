export function brandSlug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');
}

export const site = {
  name: 'Best Choice Repair',
  tagline: 'More care + Less cost = Customer satisfaction!',
  phoneDisplay: '(800) 501-2023',
  phoneHref: 'tel:+18005012023',
  phoneDisplayLocal: '(702) 726-9648',
  phoneHrefLocal: 'tel:+17027269648',
  smsHref: 'sms:+18005012023',
  email: 'repair@bestchoicerepair.com',
  // TODO: point this at the deployed dispatch-app once it's live (e.g.
  // https://dispatch.bestchoicerepair.com/api/public/booking-requests).
  // Until then, submissions will fail and the form falls back to showing
  // the phone number instead of a fake success message.
  bookingApiUrl: '',
  serviceCallFee: '$89',
  warranty: '90-Day Warranty on Parts & Labor',
  hours: [
    { days: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
    { days: 'Saturday', time: '8:00 AM – 5:00 PM' },
    { days: 'Emergency service', time: '24 hours' },
  ],
  serviceAreaCities: [
    'Las Vegas',
    'Henderson',
    'Paradise',
    'North Las Vegas',
    'Summerlin',
    'Green Valley',
    'Spring Valley',
    'Enterprise',
  ],
  brandsShort: [
    'Samsung', 'GE', 'Whirlpool', 'Maytag', 'Bosch', 'LG', 'Wolf', 'Thermador', 'Sub-Zero', 'Viking',
    'Admiral', 'AEG', 'Amana', 'Dacor', 'Electrolux', 'Frigidaire', 'Inglis', 'JennAir', 'KitchenAid',
    'Magic Chef', 'Monogram', 'Thor Kitchen', 'Café', 'Cove', 'Miele', 'Roper',
    'U-Line',
  ],
  discounts: ['$10 off for mentioning our website', 'Military & veteran discounts available'],
  // TODO: add real Yelp/Facebook/Instagram profile URLs once available —
  // these feed the LocalBusiness schema's `sameAs`, which helps Google tie
  // this site to the same business on other platforms (matters for local
  // pack ranking / knowledge panel).
  sameAs: ['https://www.google.com/maps/place/?q=place_id:ChIJr6hy9_fpyIARHGI-OhFqvts'] as string[],
  googleReviewUrl: 'https://g.page/r/CRxiPjoRar7bEBM/review',
  googleRating: 4.9,
  googleReviewCount: 116,
} as const;

// Placeholder platform homepages until we have this business's actual profile
// URLs on each — swap each href for the real profile link once available.
export const socialLinks = [
  { label: 'Yelp', icon: 'yelp', href: 'https://www.yelp.com/biz/best-choice-repair-north-las-vegas' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com' },
  { label: 'Nextdoor', icon: 'nextdoor', href: 'https://nextdoor.com' },
  { label: 'Houzz', icon: 'houzz', href: 'https://www.houzz.com' },
  { label: 'Apple Maps', icon: 'apple-maps', href: 'https://maps.apple.com' },
] as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Brands', href: '/brands/' },
  { label: 'Services', href: '/services/' },
  { label: 'Self-Help', href: '/problems/' },
  { label: 'Error Codes', href: '/error-codes/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
] as const;
