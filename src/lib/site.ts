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
  brandsShort: ['Samsung', 'GE', 'Whirlpool', 'Maytag', 'Bosch', 'LG', 'Wolf', 'Thermador', 'Sub-Zero', 'Viking'],
  discounts: ['$10 off for mentioning our website', 'Military & veteran discounts available'],
  // TODO: add the real Google Business Profile, Yelp, and social media
  // URLs here once available — powers the LocalBusiness schema's `sameAs`,
  // which helps Google tie this site to the same business on other
  // platforms (matters for local pack ranking / knowledge panel).
  sameAs: [] as string[],
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Brands', href: '/brands/' },
  { label: 'Services', href: '/services/' },
  { label: 'Problems', href: '/problems/' },
  { label: 'Error Codes', href: '/error-codes/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
] as const;
