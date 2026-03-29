const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const inrDecimalFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatINR(amount: number): string {
  return inrFormatter.format(amount);
}

export function formatINRDecimal(amount: number): string {
  return inrDecimalFormatter.format(amount);
}

export function formatUSD(amount: number): string {
  return usdFormatter.format(amount);
}

export function formatNumber(n: number, decimals = 0): string {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}

export function formatPercent(n: number): string {
  const sign = n >= 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateISO(date: Date): string {
  return date.toISOString().split("T")[0]!;
}

/** Convert troy ounce price to per-gram price */
export function ozToGram(pricePerOz: number): number {
  return pricePerOz / 31.1035;
}

/** Convert gram price to tola price (1 tola = 11.6638 grams) */
export function gramToTola(pricePerGram: number): number {
  return pricePerGram * 11.6638;
}

/** Convert gram price to sovereign price (1 sovereign = 8 grams) */
export function gramToSovereign(pricePerGram: number): number {
  return pricePerGram * 8;
}
