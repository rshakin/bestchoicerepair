import { site } from './site';

// City-level only — see the note on localBusinessSchema below. Shared so
// every schema block that names a provider agrees on the same address.
const providerAddress = {
  '@type': 'PostalAddress',
  addressLocality: site.baseCity,
  addressRegion: site.baseRegion,
  addressCountry: 'US',
};

// NOTE: street address and priceRange precision are intentionally left out
// until the business supplies real, verifiable values (street address,
// license #) — see baseCity/baseRegion in site.ts for the city-level
// address that IS safe to publish (matches the registered GBP location,
// no street-level precision, standard for a service-area business with no
// public storefront). aggregateRating below reads from site.ts's
// googleRating/googleReviewCount, which are real numbers pulled from the
// verified Google Business Profile — keep those two updated as they drift
// instead of leaving them stale. Publishing fabricated address or rating
// data in structured data violates Google's guidelines and can trigger a
// manual action — never put a placeholder/estimated number here.
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    alternateName: site.alternateNames,
    url: site.url,
    description:
      'Appliance repair serving the Las Vegas metro area: washers, dryers, refrigerators, dishwashers, ovens, ranges, microwaves, and garbage disposals.',
    telephone: site.phoneHref.replace('tel:', ''),
    email: site.email,
    address: providerAddress,
    areaServed: site.serviceAreaCities.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(site.googleRating),
      reviewCount: String(site.googleReviewCount),
      bestRating: '5',
    },
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

// Real reviews only — sourced verbatim from the business's Google profile.
// Never fabricate a review or edit a reviewer's wording.
export function reviewSchema(reviews: { author: string; rating: number; date?: string; text: string }[]) {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'HomeAndConstructionBusiness',
      name: site.name,
    },
    author: { '@type': 'Person', name: r.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    ...(r.date ? { datePublished: r.date } : {}),
    reviewBody: r.text,
  }));
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
      address: providerAddress,
    },
    areaServed: site.serviceAreaCities.map((city) => ({ '@type': 'City', name: city })),
  };
}

export function locationServiceSchema(opts: {
  city: string;
  description: string;
  url: string;
  lat: number;
  lng: number;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.serviceType ?? 'Appliance Repair',
    name: `${opts.serviceType ?? 'Appliance Repair'} in ${opts.city} — ${site.name}`,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: site.name,
      telephone: site.phoneHref.replace('tel:', ''),
      address: providerAddress,
    },
    areaServed: {
      '@type': 'City',
      name: opts.city,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: opts.lat,
        longitude: opts.lng,
      },
    },
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
