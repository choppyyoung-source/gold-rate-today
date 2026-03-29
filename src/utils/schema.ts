import type { GoldPrices } from "./priceCalculator";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

const SITE_URL = "https://gold-rate-today.pages.dev";
const SITE_NAME = "Gold Rates Live";

const PUBLISHER = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject" as const,
    url: `${SITE_URL}/favicon.svg`,
  },
};

/** Standalone Organization schema - include on homepage */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description:
      "Live gold and silver price tracking across 80+ Indian cities. Real-time 22K, 24K, 18K gold rates with city-wise comparison, calculator, and market analysis.",
    foundingDate: "2026",
    knowsAbout: [
      "Gold Prices",
      "Gold Rate India",
      "Silver Prices",
      "Precious Metals",
      "IBJA Gold Rate",
      "22K Gold",
      "24K Gold",
    ],
  };
}

/** WebSite schema with SearchAction - include on homepage */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Live gold rate today in India - track 22K, 24K, 18K gold prices across 80+ cities",
    publisher: PUBLISHER,
    inLanguage: "en-IN",
  };
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  const today = new Date().toISOString().split("T")[0];
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: "2026-03-29",
    dateModified: today,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: PUBLISHER,
    about: {
      "@type": "Thing",
      name: "Gold Price",
      description: "Current gold rate and price information",
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
  const allItems = [{ name: "Home", url: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
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
  const today = new Date().toISOString().split("T")[0];
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
      validFrom: today,
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
    inLanguage: "en-IN",
    author: PUBLISHER,
    publisher: PUBLISHER,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
  };
}

/** HowTo schema for calculator page */
export function generateHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Calculate Gold Jewelry Price",
    description:
      "Calculate the total cost of gold jewelry including gold value, making charges, and GST in India.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Enter weight",
        text: "Enter the weight of gold in grams (e.g., 10 grams for a standard gold chain)",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Select purity",
        text: "Select the purity - 22K (916) for jewelry or 24K (999) for coins/bars",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Set making charges",
        text: "Set making charges percentage based on the jeweler (typically 8-35%)",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Toggle GST",
        text: "Toggle GST to include 3% GST on gold value and 5% GST on making charges",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "View result",
        text: "The calculator instantly shows the estimated total price with a complete breakdown",
      },
    ],
  };
}
