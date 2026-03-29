globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_npiV1CLA.mjs";
import { g as getGoldPrices, a as getKaratPricesINR, f as formatINR, b as generateWebPageSchema, c as generateBreadcrumbSchema, d as generateFAQSchema, $ as $$MainLayout, e as $$AdUnit, h as $$BreadcrumbNav, i as gramToTola, j as gramToSovereign, k as $$FAQ } from "./schema_DudCuwEp.mjs";
import { $ as $$CityRatesTable } from "./CityRatesTable_CJx7uUZV.mjs";
const prerender = false;
const $$22CaratGoldRateToday = createComponent(async ($$result, $$props, $$slots) => {
  const prices = await getGoldPrices();
  const karat = getKaratPricesINR(prices);
  const title = `22 Carat Gold Rate Today (${formatINR(karat.k22)}/g) - Live 22K/916 Gold Price`;
  const description = `22 carat (22K/916) gold rate today: ${formatINR(karat.k22)} per gram, ${formatINR(karat.k22 * 10)} per 10 grams. Live 22K gold prices in India with city-wise rates. 22K is the most popular purity for gold jewelry.`;
  const faqs = [
    { question: "What is 22 carat gold?", answer: "22 carat gold contains 91.67% pure gold (22 parts gold out of 24 parts total) mixed with 8.33% other metals like copper, silver, or zinc. This alloy is harder than pure 24K gold, making it ideal for jewelry. It is also known as 916 gold (916 parts per 1000 are pure gold). BIS hallmark '916' certifies 22K purity in India." },
    { question: "What is the difference between 22K and 916 gold?", answer: "22K and 916 gold are the same thing. '22K' refers to the karat measurement (22 out of 24 parts pure gold), while '916' refers to the fineness measurement (916 parts per 1000 are pure gold). Both indicate 91.67% gold purity. The BIS hallmark stamp on jewelry shows '916' for 22 karat gold." },
    { question: "Why is 22K gold preferred for jewelry?", answer: "22K gold is preferred for jewelry because: (1) It is harder and more durable than 24K pure gold, making it suitable for everyday wear, (2) It maintains a rich golden color similar to pure gold, (3) It is the traditional standard for Indian jewelry, (4) Most jewelers in India make their designs in 22K, and (5) It offers a good balance between purity and practicality." },
    { question: "How to check if gold is 22 karat?", answer: "To verify 22K gold: (1) Look for the BIS hallmark '916' stamped on the jewelry, (2) Check for the jeweler's identification mark and assaying center mark, (3) Use a gold purity testing machine at certified laboratories, (4) Perform a specific gravity test, or (5) Get it tested at any BIS-recognized assaying and hallmarking center. Always buy hallmarked gold from trusted jewelers." }
  ];
  const schemas = [
    generateWebPageSchema(title, description, "/22-carat-gold-rate-today/"),
    generateBreadcrumbSchema([
      { name: "Gold Rate Today", url: "/" },
      { name: "22 Carat Gold Rate", url: "/22-carat-gold-rate-today/" }
    ]),
    generateFAQSchema(faqs)
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "canonical": "/22-carat-gold-rate-today/", "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Gold Rate Today", href: "/" },
    { label: "22 Carat Gold Rate Today" }
  ] })} ${maybeRenderHead()}<h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">22 Carat Gold Rate Today</h1> <p class="text-gray-600 mb-6">Live 22K (916 hallmark) gold price - the most popular purity for jewelry in India.</p>  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"> <div class="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center"> <p class="text-xs text-gray-500">Per Gram</p> <p class="text-xl font-bold text-gray-900 mt-1">${formatINR(karat.k22)}</p> </div> <div class="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center"> <p class="text-xs text-gray-500">Per 10 Grams</p> <p class="text-xl font-bold text-gray-900 mt-1">${formatINR(karat.k22 * 10)}</p> </div> <div class="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center"> <p class="text-xs text-gray-500">Per Tola (11.66g)</p> <p class="text-xl font-bold text-gray-900 mt-1">${formatINR(Math.round(gramToTola(karat.k22)))}</p> </div> <div class="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center"> <p class="text-xs text-gray-500">Per Sovereign (8g)</p> <p class="text-xl font-bold text-gray-900 mt-1">${formatINR(Math.round(gramToSovereign(karat.k22)))}</p> </div> </div>  ${renderComponent($$result2, "CityRatesTable", $$CityRatesTable, { "prices": prices, "title": "22K Gold Rate in Indian Cities" })} <section class="mt-8 bg-white border border-gray-200 rounded-lg p-5"> <h2 class="text-lg font-bold text-gray-900 mb-3">About 22 Karat Gold</h2> <div class="text-sm text-gray-600 leading-relaxed space-y-3"> <p>
22 karat gold, also known as 916 gold, is the most widely used gold purity for jewelry in India.
        It contains 91.67% pure gold and 8.33% alloy metals (typically copper, silver, or zinc), which
        provide the necessary hardness for crafting durable jewelry pieces.
</p> <p>
The BIS (Bureau of Indian Standards) hallmark system ensures the purity of gold jewelry in India.
        When you see the hallmark "916" on a piece of jewelry, it certifies that the gold is 22 karat pure.
        Always insist on BIS hallmarked gold when making a purchase to ensure you get genuine purity.
</p> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs, "title": "FAQs - 22 Carat Gold" })}  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "footer", "format": "horizontal" })}`, "in-content": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}` })}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/pages/22-carat-gold-rate-today.astro", void 0);
const $$file = "/Users/hyunyoung/projects/gold-rate-today/src/pages/22-carat-gold-rate-today.astro";
const $$url = "/22-carat-gold-rate-today/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$22CaratGoldRateToday,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
