import type { GoldPrices } from "./priceCalculator";

// In-memory cache for development
let cachedPrices: GoldPrices | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/** Fallback prices in case API is unavailable */
const FALLBACK_PRICES: GoldPrices = {
  xauUsd: 3050.0,
  xauInr: 254800.0,
  usdInr: 83.5,
  changeUsd: 12.5,
  changePct: 0.41,
  xagUsd: 33.5,
  silverChangeUsd: 0.25,
  silverChangePct: 0.75,
  timestamp: Date.now(),
};

/** Fetch gold prices from gold-api.com (free, no auth required) */
async function fetchFromGoldApi(): Promise<GoldPrices | null> {
  try {
    const [goldRes, silverRes, forexRes] = await Promise.all([
      fetch("https://gold-api.com/api/XAU/USD"),
      fetch("https://gold-api.com/api/XAG/USD"),
      fetch("https://gold-api.com/api/USD/INR"),
    ]);

    if (!goldRes.ok || !silverRes.ok || !forexRes.ok) return null;

    const gold = (await goldRes.json()) as {
      price: number;
      prev_close_price?: number;
      ch?: number;
      chp?: number;
    };
    const silver = (await silverRes.json()) as {
      price: number;
      ch?: number;
      chp?: number;
    };
    const forex = (await forexRes.json()) as { price: number };

    const usdInr = forex.price || 83.5;
    const xauUsd = gold.price;
    const changeUsd = gold.ch || 0;
    const changePct = gold.chp || 0;

    return {
      xauUsd,
      xauInr: xauUsd * usdInr,
      usdInr,
      changeUsd,
      changePct,
      xagUsd: silver.price,
      silverChangeUsd: silver.ch || 0,
      silverChangePct: silver.chp || 0,
      timestamp: Date.now(),
    };
  } catch {
    return null;
  }
}

/** Get gold prices with caching */
export async function getGoldPrices(): Promise<GoldPrices> {
  const now = Date.now();

  // Return cached if still valid
  if (cachedPrices && now - cacheTimestamp < CACHE_TTL) {
    return cachedPrices;
  }

  // Try API
  const prices = await fetchFromGoldApi();

  if (prices) {
    cachedPrices = prices;
    cacheTimestamp = now;
    return prices;
  }

  // Return cached (even if stale) or fallback
  return cachedPrices || FALLBACK_PRICES;
}

/** Get the date string for "today" display */
export function getTodayString(): string {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
