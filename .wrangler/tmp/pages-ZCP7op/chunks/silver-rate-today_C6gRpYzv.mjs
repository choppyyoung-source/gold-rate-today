globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "./worker-entry_npiV1CLA.mjs";
import { g as getGoldPrices, u as getSilverPricesINR, f as formatINR, l as formatUSD, b as generateWebPageSchema, c as generateBreadcrumbSchema, d as generateFAQSchema, $ as $$MainLayout, e as $$AdUnit, h as $$BreadcrumbNav, v as formatPercent, k as $$FAQ } from "./schema_DudCuwEp.mjs";
const prerender = false;
const $$SilverRateToday = createComponent(async ($$result, $$props, $$slots) => {
  const prices = await getGoldPrices();
  const silver = getSilverPricesINR(prices);
  const isUp = prices.silverChangePct >= 0;
  const title = `Silver Rate Today (${formatINR(silver.perGram)}/g) - Live Silver Price in India`;
  const description = `Today's silver rate: ${formatINR(silver.perGram)} per gram, ${formatINR(silver.perKg)} per kg. Live silver prices updated every 5 minutes. International silver price: ${formatUSD(prices.xagUsd)}/oz.`;
  const faqs = [
    { question: "What is the silver rate today in India?", answer: `The silver rate today in India is approximately ${formatINR(silver.perGram)} per gram, ${formatINR(silver.per10g)} per 10 grams, and ${formatINR(silver.perKg)} per kilogram. Prices are based on international silver spot price converted to INR.` },
    { question: "Is silver a good investment?", answer: "Silver can be a good investment for portfolio diversification. It is more volatile than gold but has significant industrial demand (electronics, solar panels, medical devices) in addition to investment demand. Silver typically has a higher percentage gain during bull markets compared to gold. Consider Silver ETFs or physical bars for investment." },
    { question: "What is the gold-to-silver ratio?", answer: `The gold-to-silver ratio indicates how many ounces of silver it takes to buy one ounce of gold. The current ratio is approximately ${Math.round(prices.xauUsd / prices.xagUsd)}:1. Historically, the ratio averages 60-70:1. A high ratio may indicate silver is undervalued relative to gold.` },
    { question: "How much GST is on silver in India?", answer: "GST on silver in India is 3% on the silver value, same as gold. Additionally, 5% GST applies on making charges for silver jewelry. Silver bars and coins also attract 3% GST." }
  ];
  const schemas = [
    generateWebPageSchema(title, description, "/silver-rate-today/"),
    generateBreadcrumbSchema([
      { name: "Gold Rate Today", url: "/" },
      { name: "Silver Rate Today", url: "/silver-rate-today/" }
    ]),
    generateFAQSchema(faqs)
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "canonical": "/silver-rate-today/", "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Gold Rate Today", href: "/" },
    { label: "Silver Rate Today" }
  ] })} ${maybeRenderHead()}<h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Silver Rate Today in India</h1>  <div class="bg-gradient-to-br from-gray-100 via-white to-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm text-center"> <p class="text-xs text-gray-500 mb-1">Per Gram</p> <p class="text-2xl font-bold text-gray-900">${formatINR(silver.perGram)}</p> <span${addAttribute(["text-xs font-semibold", isUp ? "text-up" : "text-down"], "class:list")}> ${isUp ? "▲" : "▼"} ${formatPercent(prices.silverChangePct)} </span> </div> <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm text-center"> <p class="text-xs text-gray-500 mb-1">Per 10 Grams</p> <p class="text-2xl font-bold text-gray-900">${formatINR(silver.per10g)}</p> </div> <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm text-center"> <p class="text-xs text-gray-500 mb-1">Per 100 Grams</p> <p class="text-2xl font-bold text-gray-900">${formatINR(silver.per100g)}</p> </div> <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm text-center"> <p class="text-xs text-gray-500 mb-1">Per Kilogram</p> <p class="text-2xl font-bold text-gray-900">${formatINR(silver.perKg)}</p> </div> </div> <div class="mt-4 bg-white/80 rounded-lg px-4 py-3 flex flex-wrap items-center justify-center gap-6 text-sm border border-gray-100"> <div> <span class="text-gray-500">XAG/USD: </span> <span class="font-bold">${formatUSD(prices.xagUsd)}/oz</span> </div> <div> <span class="text-gray-500">Gold/Silver Ratio: </span> <span class="font-bold">${Math.round(prices.xauUsd / prices.xagUsd)}:1</span> </div> </div> </div>   <section class="mt-8"> <h2 class="text-xl font-bold text-gray-900 mb-4">Silver Rate by Weight</h2> <div class="table-responsive"> <table class="w-full text-sm border-collapse"> <thead> <tr class="bg-gray-700 text-white"> <th class="px-3 py-3 text-left font-semibold rounded-tl-lg">Weight</th> <th class="px-3 py-3 text-right font-semibold rounded-tr-lg">Silver Price (INR)</th> </tr> </thead> <tbody> ${[1, 5, 10, 50, 100, 250, 500, 1e3].map((w, i) => renderTemplate`<tr${addAttribute(i % 2 === 0 ? "bg-white" : "bg-gray-50", "class")}> <td class="px-3 py-2.5 border-b border-gray-100 font-medium"> ${w >= 1e3 ? `${w / 1e3} kg` : `${w} gram${w > 1 ? "s" : ""}`} </td> <td class="px-3 py-2.5 text-right font-semibold border-b border-gray-100"> ${formatINR(silver.perGram * w)} </td> </tr>`)} </tbody> </table> </div> </section>  <section class="mt-8 bg-white border border-gray-200 rounded-lg p-5"> <h2 class="text-lg font-bold text-gray-900 mb-3">About Silver Prices in India</h2> <div class="text-sm text-gray-600 leading-relaxed space-y-3"> <p>
Silver is the second most popular precious metal for investment and jewelry in India.
        Silver prices are determined by international spot prices (COMEX/LBMA), converted using the
        USD/INR exchange rate, and adjusted for customs duty and GST (3%).
</p> <p>
Silver has significant industrial applications in electronics, solar panels, medical devices,
        and photography, which contributes to its price dynamics. Unlike gold, which is primarily
        driven by investment demand, silver prices are influenced by both investment and industrial
        demand, making it more volatile.
</p> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs, "title": "FAQs - Silver Rate Today" })}  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "footer", "format": "horizontal" })}`, "in-content": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}` })}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/pages/silver-rate-today.astro", void 0);
const $$file = "/Users/hyunyoung/projects/gold-rate-today/src/pages/silver-rate-today.astro";
const $$url = "/silver-rate-today/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SilverRateToday,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
