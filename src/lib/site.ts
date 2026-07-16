export const site = {
  name: 'Best Choice Repair',
  tagline: 'More care + Less cost = Customer satisfaction!',
  phoneDisplay: '(800) 501-2023',
  phoneHref: 'tel:+18005012023',
  phoneDisplayLocal: '(702) 726-9648',
  phoneHrefLocal: 'tel:+17027269648',
  smsHref: 'sms:+18005012023',
  email: 'bestchoicerepair@outlook.com',
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
  ],
  brandsShort: ['Samsung', 'GE', 'Whirlpool', 'Maytag', 'Bosch', 'Wolf', 'Thermador', 'Sub-Zero', 'Viking'],
  discounts: ['$10 off for mentioning our website', 'Military & veteran discounts available'],
} as const;

export const navLinks = [
  { label: 'Services', href: '/services/' },
  { label: 'Problems', href: '/problems/' },
  { label: 'Brands', href: '/brands/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'About', href: '/about/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
] as const;
