globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_npiV1CLA.mjs";
import { g as getGoldPrices, a as getKaratPricesINR, w as getTodayString, m as generateHistoricalData, f as formatINR, b as generateWebPageSchema, d as generateFAQSchema, c as generateBreadcrumbSchema, r as generateGoldPriceSchema, $ as $$MainLayout, e as $$AdUnit, h as $$BreadcrumbNav, k as $$FAQ } from "./schema_DudCuwEp.mjs";
import { m as mainPageFAQs, $ as $$GoldPriceHero, a as $$PriceTable } from "./faqs_B72o2YGj.mjs";
import { $ as $$CityRatesTable } from "./CityRatesTable_CJx7uUZV.mjs";
import { P as PriceChart } from "./PriceChart_NyCYLm6G.mjs";
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const prices = await getGoldPrices();
  const karatINR = getKaratPricesINR(prices);
  getTodayString();
  const historyData = generateHistoricalData(prices.xauUsd, 30);
  const title = `Gold Rate Today (${formatINR(karatINR.k22)}/g 22K) - Live Gold Price in India`;
  const description = `Today's gold rate: 22K gold at ${formatINR(karatINR.k22)}/gram and 24K gold at ${formatINR(karatINR.k24)}/gram. Live gold prices in India updated every 5 minutes. Check city-wise rates, price history, and gold calculator.`;
  const schemas = [
    generateWebPageSchema(title, description, "/"),
    generateFAQSchema(mainPageFAQs),
    generateBreadcrumbSchema([{ name: "Gold Rate Today", url: "/" }]),
    generateGoldPriceSchema(prices, "INR", karatINR.k24)
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "canonical": "/", "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [{ label: "Gold Rate Today" }] })} ${renderComponent($$result2, "GoldPriceHero", $$GoldPriceHero, { "prices": prices })}  ${renderComponent($$result2, "PriceTable", $$PriceTable, { "prices": prices })} ${renderComponent($$result2, "PriceChart", PriceChart, { "client:visible": true, "data": historyData, "currency": "USD", "title": "Gold Price Chart (30 Days)", "client:component-hydration": "visible", "client:component-path": "/Users/hyunyoung/projects/gold-rate-today/src/components/PriceChart.tsx", "client:component-export": "default" })}  ${renderComponent($$result2, "CityRatesTable", $$CityRatesTable, { "prices": prices })}  ${maybeRenderHead()}<section class="mt-10"> <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Understanding Gold Rates in India</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-white border border-gray-200 rounded-lg p-5"> <h3 class="font-semibold text-gray-900 mb-2">How is the Gold Rate Determined?</h3> <p class="text-sm text-gray-600 leading-relaxed">
The gold rate in India is primarily determined by the India Bullion and Jewellers Association (IBJA).
          It is calculated based on the international spot price (LBMA London Fix), converted using the USD/INR
          exchange rate, and adjusted for customs duty (15%) and GST (3%). The IBJA publishes opening and closing
          rates each business day that serve as the benchmark for jewelers across the country.
</p> </div> <div class="bg-white border border-gray-200 rounded-lg p-5"> <h3 class="font-semibold text-gray-900 mb-2">What Factors Affect Gold Prices?</h3> <p class="text-sm text-gray-600 leading-relaxed">
Gold prices are influenced by multiple factors: the US Dollar index (inverse correlation),
          global interest rates set by the Federal Reserve, geopolitical tensions, inflation expectations,
          central bank gold purchases, demand from India and China (the two largest consumers), mining
          supply, and ETF fund flows. In India, the USD/INR exchange rate adds an additional layer of
          price movement.
</p> </div> <div class="bg-white border border-gray-200 rounded-lg p-5"> <h3 class="font-semibold text-gray-900 mb-2">22K vs 24K Gold: Which Should You Buy?</h3> <p class="text-sm text-gray-600 leading-relaxed">
24 karat gold (99.9% pure) is ideal for investment as gold bars and coins, offering maximum
          gold content per gram. 22 karat gold (91.67% pure, also known as 916 gold) is the standard
          for jewelry in India, as the added alloy metals provide the hardness needed for wearable
          ornaments. For investment purposes, consider Sovereign Gold Bonds (SGBs) which offer
          2.5% annual interest in addition to gold price appreciation.
</p> </div> <div class="bg-white border border-gray-200 rounded-lg p-5"> <h3 class="font-semibold text-gray-900 mb-2">Gold as an Investment in India</h3> <p class="text-sm text-gray-600 leading-relaxed">
Indians can invest in gold through multiple channels: physical gold (jewelry, coins, bars),
          Gold ETFs on stock exchanges, Sovereign Gold Bonds (SGBs) issued by RBI, digital gold
          platforms, and gold mutual funds. SGBs are considered the most tax-efficient option, offering
          capital gains tax exemption on maturity along with a 2.5% annual interest payment.
</p> </div> </div> </section>  ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": mainPageFAQs })}  <section class="mt-8 bg-white border border-gray-200 rounded-lg p-5"> <h2 class="font-bold text-gray-900 mb-3">Related Gold Rate Pages</h2> <div class="flex flex-wrap gap-2"> <a href="/22-carat-gold-rate-today/" class="text-sm px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full hover:bg-gold-100 transition-colors">22 Carat Gold Rate</a> <a href="/24-carat-gold-rate-today/" class="text-sm px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full hover:bg-gold-100 transition-colors">24 Carat Gold Rate</a> <a href="/gold-rate-today-per-tola/" class="text-sm px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full hover:bg-gold-100 transition-colors">Gold Rate per Tola</a> <a href="/gold-rate-calculator/" class="text-sm px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full hover:bg-gold-100 transition-colors">Gold Calculator</a> <a href="/gold-price-history/" class="text-sm px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full hover:bg-gold-100 transition-colors">Price History</a> <a href="/silver-rate-today/" class="text-sm px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full hover:bg-gold-100 transition-colors">Silver Rate Today</a> <a href="/gold-price-prediction/" class="text-sm px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full hover:bg-gold-100 transition-colors">Gold Price Prediction</a> </div> </section>  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "footer", "format": "horizontal" })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "header", "format": "horizontal" })}`, "in-content": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}` })}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/pages/index.astro", void 0);
const $$file = "/Users/hyunyoung/projects/gold-rate-today/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
