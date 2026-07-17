import { site } from './site';

// NOTE: address, priceRange precision, and aggregateRating are intentionally
// left out until the business supplies real, verifiable values (street
// address, license #, actual review counts/ratings). Publishing fabricated
// address or rating data in structured data violates Google's guidelines
// and can trigger a manual action — fill these in only with real data.
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    description:
      'Appliance repair serving the Las Vegas metro area: washers, dryers, refrigerators, dishwashers, ovens, ranges, microwaves, and garbage disposals.',
    telephone: site.phoneHref.replace('tel:', ''),
    email: site.email,
    areaServed: site.serviceAreaCities.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: `${opts.name} — ${site.name}`,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: site.name,
      telephone: site.phoneHref.replace('tel:', ''),
    },
    areaServed: site.serviceAreaCities.map((city) => ({ '@type': 'City', name: city })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
