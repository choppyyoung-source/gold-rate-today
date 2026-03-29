import type { City } from "../data/cities";
import { ozToGram, gramToTola, gramToSovereign } from "./formatters";

export interface GoldPrices {
  /** Price of gold per troy ounce in USD */
  xauUsd: number;
  /** Price of gold per troy ounce in INR */
  xauInr: number;
  /** USD to INR exchange rate */
  usdInr: number;
  /** Price change in USD */
  changeUsd: number;
  /** Price change percentage */
  changePct: number;
  /** Silver price per troy ounce in USD */
  xagUsd: number;
  /** Silver price change in USD */
  silverChangeUsd: number;
  /** Silver price change percentage */
  silverChangePct: number;
  /** Timestamp of the data */
  timestamp: number;
}

export interface KaratPrices {
  k24: number;
  k22: number;
  k18: number;
  k14: number;
}

export interface WeightPrices {
  "1g": number;
  "2g": number;
  "5g": number;
  "8g": number;
  "10g": number;
  "20g": number;
  "50g": number;
  "100g": number;
}

export interface CityGoldData {
  city: City;
  k24PerGram: number;
  k22PerGram: number;
  k18PerGram: number;
  k24Per10g: number;
  k22Per10g: number;
  k18Per10g: number;
  k24PerTola: number;
  k22PerTola: number;
  k24PerSovereign: number;
  k22PerSovereign: number;
}

/** Get karat multipliers */
export function karatMultiplier(karat: number): number {
  return karat / 24;
}

/** Calculate per-gram prices in INR for all karats */
export function getKaratPricesINR(prices: GoldPrices): KaratPrices {
  const purePerGram = ozToGram(prices.xauInr);
  return {
    k24: Math.round(purePerGram),
    k22: Math.round(purePerGram * karatMultiplier(22)),
    k18: Math.round(purePerGram * karatMultiplier(18)),
    k14: Math.round(purePerGram * karatMultiplier(14)),
  };
}

/** Calculate per-gram prices in USD for all karats */
export function getKaratPricesUSD(prices: GoldPrices): KaratPrices {
  const purePerGram = ozToGram(prices.xauUsd);
  return {
    k24: Number(purePerGram.toFixed(2)),
    k22: Number((purePerGram * karatMultiplier(22)).toFixed(2)),
    k18: Number((purePerGram * karatMultiplier(18)).toFixed(2)),
    k14: Number((purePerGram * karatMultiplier(14)).toFixed(2)),
  };
}

/** Calculate weight-based prices for a given per-gram price */
export function getWeightPrices(pricePerGram: number): WeightPrices {
  return {
    "1g": Math.round(pricePerGram),
    "2g": Math.round(pricePerGram * 2),
    "5g": Math.round(pricePerGram * 5),
    "8g": Math.round(pricePerGram * 8),
    "10g": Math.round(pricePerGram * 10),
    "20g": Math.round(pricePerGram * 20),
    "50g": Math.round(pricePerGram * 50),
    "100g": Math.round(pricePerGram * 100),
  };
}

/** Get gold prices for a specific city */
export function getCityGoldData(city: City, prices: GoldPrices): CityGoldData {
  const basePerGram = ozToGram(prices.xauInr);
  const adjustedPerGram = basePerGram * city.adjustment;

  const k24 = Math.round(adjustedPerGram);
  const k22 = Math.round(adjustedPerGram * karatMultiplier(22));
  const k18 = Math.round(adjustedPerGram * karatMultiplier(18));

  return {
    city,
    k24PerGram: k24,
    k22PerGram: k22,
    k18PerGram: k18,
    k24Per10g: k24 * 10,
    k22Per10g: k22 * 10,
    k18Per10g: k18 * 10,
    k24PerTola: Math.round(gramToTola(adjustedPerGram)),
    k22PerTola: Math.round(gramToTola(adjustedPerGram * karatMultiplier(22))),
    k24PerSovereign: Math.round(gramToSovereign(adjustedPerGram)),
    k22PerSovereign: Math.round(
      gramToSovereign(adjustedPerGram * karatMultiplier(22))
    ),
  };
}

/** Calculate silver per-gram prices */
export function getSilverPricesINR(prices: GoldPrices) {
  const perGram = ozToGram(prices.xagUsd * prices.usdInr);
  return {
    perGram: Math.round(perGram),
    per10g: Math.round(perGram * 10),
    per100g: Math.round(perGram * 100),
    perKg: Math.round(perGram * 1000),
  };
}

/** Generate 30 days of mock historical data based on current price */
export function generateHistoricalData(
  currentPriceUsd: number,
  days = 30
): { date: string; price: number }[] {
  const data: { date: string; price: number }[] = [];
  const now = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    // Simulate small daily fluctuations (±2%)
    const variance = (Math.sin(i * 0.7) * 0.02 + Math.cos(i * 0.3) * 0.01);
    const price = currentPriceUsd * (1 + variance);
    data.push({
      date: date.toISOString().split("T")[0]!,
      price: Number(price.toFixed(2)),
    });
  }

  return data;
}
