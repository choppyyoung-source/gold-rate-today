globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "./worker-entry_npiV1CLA.mjs";
import { g as getGoldPrices, m as generateHistoricalData, o as ozToGram, l as formatUSD, b as generateWebPageSchema, c as generateBreadcrumbSchema, $ as $$MainLayout, e as $$AdUnit, h as $$BreadcrumbNav, f as formatINR, k as $$FAQ } from "./schema_DudCuwEp.mjs";
import { P as PriceChart } from "./PriceChart_NyCYLm6G.mjs";
const prerender = false;
const $$GoldPriceHistory = createComponent(async ($$result, $$props, $$slots) => {
  const prices = await getGoldPrices();
  const historyUsd = generateHistoricalData(prices.xauUsd, 30);
  const historyInr = historyUsd.map((d) => ({
    date: d.date,
    price: Math.round(ozToGram(d.price * prices.usdInr))
  }));
  const title = "Gold Price History - 30 Day Chart & Historical Gold Rates";
  const description = `Track gold price history with interactive charts. View 7-day and 30-day gold price trends in USD and INR. Current gold price: ${formatUSD(prices.xauUsd)}/oz.`;
  const schemas = [
    generateWebPageSchema(title, description, "/gold-price-history/"),
    generateBreadcrumbSchema([
      { name: "Gold Rate Today", url: "/" },
      { name: "Price History", url: "/gold-price-history/" }
    ])
  ];
  const historyFaqs = [
    { question: "What was the gold price 30 days ago?", answer: `30 days ago, the gold price was approximately ${formatUSD(historyUsd[0]?.price || 0)} per troy ounce. Gold prices fluctuate daily based on international market conditions, USD exchange rates, and global economic factors.` },
    { question: "What is the highest gold price in history?", answer: "Gold reached its all-time high in 2024-2025, crossing $2,800 per troy ounce. The price has been on a general upward trend due to central bank purchases, geopolitical tensions, and inflation concerns worldwide." },
    { question: "Does gold price go up or down during recession?", answer: "Gold is traditionally considered a safe-haven asset, and its price typically rises during recessions and economic uncertainty. Investors move funds from risky assets to gold, driving up demand and price. However, in severe liquidity crises, gold can temporarily dip as investors sell all assets for cash." },
    { question: "How often are gold prices updated?", answer: "International gold spot prices are updated in real-time during market hours (London and New York trading sessions). In India, IBJA publishes opening and closing rates on each business day. Our website updates gold prices every 5 minutes from live market feeds." }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "canonical": "/gold-price-history/", "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Gold Rate Today", href: "/" },
    { label: "Price History" }
  ] })} ${maybeRenderHead()}<h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Gold Price History</h1> <p class="text-gray-600 mb-6">Track gold price movements over the last 30 days with interactive charts.</p> ${renderComponent($$result2, "PriceChart", PriceChart, { "client:visible": true, "data": historyUsd, "currency": "USD", "title": "Gold Price in USD (per oz)", "client:component-hydration": "visible", "client:component-path": "/Users/hyunyoung/projects/gold-rate-today/src/components/PriceChart.tsx", "client:component-export": "default" })}  ${renderComponent($$result2, "PriceChart", PriceChart, { "client:visible": true, "data": historyInr, "currency": "INR", "title": "Gold Price in INR (per gram, 24K)", "client:component-hydration": "visible", "client:component-path": "/Users/hyunyoung/projects/gold-rate-today/src/components/PriceChart.tsx", "client:component-export": "default" })}  <section class="mt-8"> <h2 class="text-xl font-bold text-gray-900 mb-4">Last 30 Days Gold Price Table</h2> <div class="table-responsive"> <table class="w-full text-sm border-collapse"> <thead> <tr class="bg-gold-700 text-white"> <th class="px-3 py-3 text-left font-semibold rounded-tl-lg">Date</th> <th class="px-3 py-3 text-right font-semibold">USD/oz</th> <th class="px-3 py-3 text-right font-semibold">INR/gram (24K)</th> <th class="px-3 py-3 text-right font-semibold rounded-tr-lg">Change</th> </tr> </thead> <tbody> ${historyUsd.map((d, i) => {
    const prevPrice = i > 0 ? historyUsd[i - 1].price : d.price;
    const change = d.price - prevPrice;
    const changePct = prevPrice > 0 ? change / prevPrice * 100 : 0;
    const isUp = change >= 0;
    return renderTemplate`<tr${addAttribute(i % 2 === 0 ? "bg-white" : "bg-gold-50/50", "class")}> <td class="px-3 py-2 border-b border-gray-100 font-medium">${d.date}</td> <td class="px-3 py-2 text-right border-b border-gray-100">${formatUSD(d.price)}</td> <td class="px-3 py-2 text-right border-b border-gray-100">${formatINR(historyInr[i].price)}</td> <td${addAttribute(["px-3 py-2 text-right border-b border-gray-100 font-medium", isUp ? "text-up" : "text-down"], "class:list")}> ${isUp ? "+" : ""}${changePct.toFixed(2)}%
</td> </tr>`;
  })} </tbody> </table> </div> </section>  ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": historyFaqs, "title": "FAQs - Gold Price History" })}  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "footer", "format": "horizontal" })}`, "in-content": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}` })}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/pages/gold-price-history.astro", void 0);
const $$file = "/Users/hyunyoung/projects/gold-rate-today/src/pages/gold-price-history.astro";
const $$url = "/gold-price-history/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$GoldPriceHistory,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
