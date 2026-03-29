globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_npiV1CLA.mjs";
import { g as getGoldPrices, a as getKaratPricesINR, f as formatINR, b as generateWebPageSchema, c as generateBreadcrumbSchema, d as generateFAQSchema, $ as $$MainLayout, e as $$AdUnit, h as $$BreadcrumbNav, l as formatUSD, i as gramToTola, k as $$FAQ } from "./schema_DudCuwEp.mjs";
import { $ as $$CityRatesTable } from "./CityRatesTable_CJx7uUZV.mjs";
const prerender = false;
const $$24CaratGoldRateToday = createComponent(async ($$result, $$props, $$slots) => {
  const prices = await getGoldPrices();
  const karat = getKaratPricesINR(prices);
  const title = `24 Carat Gold Rate Today (${formatINR(karat.k24)}/g) - Live 24K/999 Pure Gold Price`;
  const description = `24 carat (24K/999) pure gold rate today: ${formatINR(karat.k24)} per gram, ${formatINR(karat.k24 * 10)} per 10 grams. Live 24K gold prices for investment, coins, and bars in India.`;
  const faqs = [
    { question: "What is 24 carat gold?", answer: "24 carat gold is the purest form of gold, containing 99.9% pure gold (999 fineness). It is too soft for jewelry but ideal for investment as gold bars, coins, and biscuits. It is the benchmark for gold pricing worldwide and the standard used for international spot prices." },
    { question: "Can 24K gold be used for jewelry?", answer: "While 24K gold is rarely used for everyday jewelry due to its softness, some specialized jewelers create lightweight 24K gold ornaments. These pieces require careful handling as they can bend and scratch easily. Most Indian jewelry is made in 22K or 18K gold for better durability." },
    { question: "How to invest in 24K gold?", answer: "You can invest in 24K gold through: (1) Physical gold bars and coins from banks or authorized dealers, (2) Sovereign Gold Bonds (SGBs) from RBI, (3) Gold ETFs on stock exchanges, (4) Digital gold platforms, (5) Gold mutual funds. SGBs offer additional 2.5% annual interest and tax benefits on maturity." },
    { question: "What is the difference between 24K and 22K gold price?", answer: `The price difference between 24K and 22K gold is approximately 8.33%, which corresponds to the difference in gold content. Today, 24K gold is ${formatINR(karat.k24)}/gram while 22K gold is ${formatINR(karat.k22)}/gram. The formula: 22K price = 24K price x (22/24) = 24K price x 0.9167.` }
  ];
  const schemas = [
    generateWebPageSchema(title, description, "/24-carat-gold-rate-today/"),
    generateBreadcrumbSchema([
      { name: "Gold Rate Today", url: "/" },
      { name: "24 Carat Gold Rate", url: "/24-carat-gold-rate-today/" }
    ]),
    generateFAQSchema(faqs)
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "canonical": "/24-carat-gold-rate-today/", "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Gold Rate Today", href: "/" },
    { label: "24 Carat Gold Rate Today" }
  ] })} ${maybeRenderHead()}<h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">24 Carat Gold Rate Today</h1> <p class="text-gray-600 mb-6">Live 24K (999 fineness) pure gold price - ideal for investment in gold bars and coins.</p>  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"> <div class="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center"> <p class="text-xs text-gray-500">Per Gram</p> <p class="text-xl font-bold text-gray-900 mt-1">${formatINR(karat.k24)}</p> </div> <div class="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center"> <p class="text-xs text-gray-500">Per 10 Grams</p> <p class="text-xl font-bold text-gray-900 mt-1">${formatINR(karat.k24 * 10)}</p> </div> <div class="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center"> <p class="text-xs text-gray-500">Per Troy Ounce</p> <p class="text-xl font-bold text-gray-900 mt-1">${formatUSD(prices.xauUsd)}</p> </div> <div class="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center"> <p class="text-xs text-gray-500">Per Tola (11.66g)</p> <p class="text-xl font-bold text-gray-900 mt-1">${formatINR(Math.round(gramToTola(karat.k24)))}</p> </div> </div>  <section class="mb-8"> <h2 class="text-xl font-bold text-gray-900 mb-4">Gold Purity Comparison</h2> <div class="table-responsive"> <table class="w-full text-sm border-collapse"> <thead> <tr class="bg-gold-700 text-white"> <th class="px-3 py-3 text-left font-semibold rounded-tl-lg">Purity</th> <th class="px-3 py-3 text-center font-semibold">Gold Content</th> <th class="px-3 py-3 text-right font-semibold">Per Gram</th> <th class="px-3 py-3 text-right font-semibold">Per 10g</th> <th class="px-3 py-3 text-left font-semibold rounded-tr-lg">Best For</th> </tr> </thead> <tbody> <tr class="bg-gold-50/50"> <td class="px-3 py-2.5 font-semibold border-b border-gray-100">24K (999)</td> <td class="px-3 py-2.5 text-center border-b border-gray-100">99.9%</td> <td class="px-3 py-2.5 text-right font-bold border-b border-gray-100">${formatINR(karat.k24)}</td> <td class="px-3 py-2.5 text-right border-b border-gray-100">${formatINR(karat.k24 * 10)}</td> <td class="px-3 py-2.5 border-b border-gray-100">Coins, Bars, Investment</td> </tr> <tr class="bg-white"> <td class="px-3 py-2.5 font-semibold border-b border-gray-100">22K (916)</td> <td class="px-3 py-2.5 text-center border-b border-gray-100">91.67%</td> <td class="px-3 py-2.5 text-right font-bold border-b border-gray-100">${formatINR(karat.k22)}</td> <td class="px-3 py-2.5 text-right border-b border-gray-100">${formatINR(karat.k22 * 10)}</td> <td class="px-3 py-2.5 border-b border-gray-100">Jewelry</td> </tr> <tr class="bg-gold-50/50"> <td class="px-3 py-2.5 font-semibold border-b border-gray-100">18K (750)</td> <td class="px-3 py-2.5 text-center border-b border-gray-100">75.0%</td> <td class="px-3 py-2.5 text-right font-bold border-b border-gray-100">${formatINR(karat.k18)}</td> <td class="px-3 py-2.5 text-right border-b border-gray-100">${formatINR(karat.k18 * 10)}</td> <td class="px-3 py-2.5 border-b border-gray-100">Designer Jewelry, Watches</td> </tr> <tr class="bg-white"> <td class="px-3 py-2.5 font-semibold">14K (585)</td> <td class="px-3 py-2.5 text-center">58.5%</td> <td class="px-3 py-2.5 text-right font-bold">${formatINR(karat.k14)}</td> <td class="px-3 py-2.5 text-right">${formatINR(karat.k14 * 10)}</td> <td class="px-3 py-2.5">Durable everyday jewelry</td> </tr> </tbody> </table> </div> </section>  ${renderComponent($$result2, "CityRatesTable", $$CityRatesTable, { "prices": prices, "title": "24K Gold Rate in Indian Cities" })} ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs, "title": "FAQs - 24 Carat Gold" })}  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "footer", "format": "horizontal" })}`, "in-content": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}` })}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/pages/24-carat-gold-rate-today.astro", void 0);
const $$file = "/Users/hyunyoung/projects/gold-rate-today/src/pages/24-carat-gold-rate-today.astro";
const $$url = "/24-carat-gold-rate-today/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$24CaratGoldRateToday,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
