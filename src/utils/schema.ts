import type { GoldPrices } from "./priceCalculator";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

const SITE_URL = "https://goldrateslive.com";
const SITE_NAME = "Gold Rates Live";

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateGoldPriceSchema(
  prices: GoldPrices,
  currency: string,
  pricePerGram: number,
  cityName?: string
) {
  const location = cityName ? ` in ${cityName}` : "";
  return {
    "@context": "https://schema.org",
    "@type": "ExchangeRateSpecification",
    currency: "XAU",
    currentExchangeRate: {
      "@type": "UnitPriceSpecification",
      price: pricePerGram,
      priceCurrency: currency,
      unitCode: "GRM",
      name: `Gold Price per Gram${location}`,
    },
    exchangeRateSpread: prices.changePct,
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
