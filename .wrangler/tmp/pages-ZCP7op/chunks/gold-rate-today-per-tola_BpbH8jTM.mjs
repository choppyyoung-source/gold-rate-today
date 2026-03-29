globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "./worker-entry_npiV1CLA.mjs";
import { g as getGoldPrices, a as getKaratPricesINR, f as formatINR, b as generateWebPageSchema, c as generateBreadcrumbSchema, d as generateFAQSchema, $ as $$MainLayout, i as gramToTola, e as $$AdUnit, h as $$BreadcrumbNav, t as topCities, k as $$FAQ } from "./schema_DudCuwEp.mjs";
const prerender = false;
const $$GoldRateTodayPerTola = createComponent(async ($$result, $$props, $$slots) => {
  const prices = await getGoldPrices();
  const karat = getKaratPricesINR(prices);
  const k24Tola = Math.round(gramToTola(karat.k24));
  const k22Tola = Math.round(gramToTola(karat.k22));
  const k18Tola = Math.round(gramToTola(karat.k18));
  const title = `Gold Rate Today per Tola (${formatINR(k22Tola)} 22K) - Live Tola Gold Price`;
  const description = `Today's gold rate per tola: 22K at ${formatINR(k22Tola)}, 24K at ${formatINR(k24Tola)}. 1 tola = 11.6638 grams. Live tola gold prices in India, Pakistan, and Bangladesh.`;
  const faqs = [
    { question: "What is a tola?", answer: "A tola is a traditional unit of weight used in India, Pakistan, Bangladesh, and Nepal for measuring gold and silver. 1 tola equals 11.6638 grams or 0.375 troy ounces. It originates from the weight of a silver rupee coin during British India and remains widely used in South Asian gold markets." },
    { question: "How many grams in 1 tola?", answer: "1 tola is equal to 11.6638 grams. To convert tola to grams, multiply by 11.6638. To convert grams to tola, divide by 11.6638. For example, 10 tola of gold = 116.638 grams." },
    { question: "How is tola gold rate calculated?", answer: `The tola gold rate is calculated by multiplying the per-gram gold rate by 11.6638 (grams per tola). For example, if 22K gold is ${formatINR(karat.k22)} per gram, then 1 tola of 22K gold = ${formatINR(karat.k22)} x 11.6638 = ${formatINR(k22Tola)}.` },
    { question: "Is tola the same as sovereign?", answer: "No. A tola (11.6638 grams) and a sovereign (8 grams) are different units of weight. The sovereign is primarily used in South India (Tamil Nadu, Kerala), while tola is more common in North India, Pakistan, and Bangladesh." }
  ];
  const schemas = [
    generateWebPageSchema(title, description, "/gold-rate-today-per-tola/"),
    generateBreadcrumbSchema([
      { name: "Gold Rate Today", url: "/" },
      { name: "Gold Rate per Tola", url: "/gold-rate-today-per-tola/" }
    ]),
    generateFAQSchema(faqs)
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "canonical": "/gold-rate-today-per-tola/", "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Gold Rate Today", href: "/" },
    { label: "Gold Rate per Tola" }
  ] })} ${maybeRenderHead()}<h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Gold Rate Today per Tola</h1> <p class="text-gray-600 mb-6">1 Tola = 11.6638 grams. Live gold price in tola for India, Pakistan, and Bangladesh.</p>  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"> <div class="bg-gold-50 border border-gold-200 rounded-xl p-5 text-center"> <p class="text-xs font-semibold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full inline-block mb-2">24K per Tola</p> <p class="text-2xl font-bold text-gray-900">${formatINR(k24Tola)}</p> <p class="text-xs text-gray-500 mt-1">Pure Gold (999)</p> </div> <div class="bg-gold-50 border border-gold-200 rounded-xl p-5 text-center"> <p class="text-xs font-semibold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full inline-block mb-2">22K per Tola</p> <p class="text-2xl font-bold text-gray-900">${formatINR(k22Tola)}</p> <p class="text-xs text-gray-500 mt-1">Jewelry Gold (916)</p> </div> <div class="bg-gold-50 border border-gold-200 rounded-xl p-5 text-center"> <p class="text-xs font-semibold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full inline-block mb-2">18K per Tola</p> <p class="text-2xl font-bold text-gray-900">${formatINR(k18Tola)}</p> <p class="text-xs text-gray-500 mt-1">750 Gold</p> </div> </div>   <section class="mt-8"> <h2 class="text-xl font-bold text-gray-900 mb-4">Gold Rate by Tola</h2> <div class="table-responsive"> <table class="w-full text-sm border-collapse"> <thead> <tr class="bg-gold-700 text-white"> <th class="px-3 py-3 text-left font-semibold rounded-tl-lg">Tola</th> <th class="px-3 py-3 text-center font-semibold">Grams</th> <th class="px-3 py-3 text-right font-semibold">24K Price</th> <th class="px-3 py-3 text-right font-semibold rounded-tr-lg">22K Price</th> </tr> </thead> <tbody> ${[1, 2, 3, 5, 10, 20, 50, 100].map((t, i) => renderTemplate`<tr${addAttribute(i % 2 === 0 ? "bg-white" : "bg-gold-50/50", "class")}> <td class="px-3 py-2.5 font-medium border-b border-gray-100">${t} Tola</td> <td class="px-3 py-2.5 text-center text-gray-500 border-b border-gray-100">${(t * 11.6638).toFixed(1)}g</td> <td class="px-3 py-2.5 text-right font-semibold border-b border-gray-100">${formatINR(k24Tola * t)}</td> <td class="px-3 py-2.5 text-right font-semibold border-b border-gray-100">${formatINR(k22Tola * t)}</td> </tr>`)} </tbody> </table> </div> </section>  <section class="mt-8"> <h2 class="text-xl font-bold text-gray-900 mb-4">City-wise Gold Rate per Tola</h2> <div class="table-responsive"> <table class="w-full text-sm border-collapse"> <thead> <tr class="bg-gold-700 text-white"> <th class="px-3 py-3 text-left font-semibold rounded-tl-lg">City</th> <th class="px-3 py-3 text-right font-semibold">22K per Tola</th> <th class="px-3 py-3 text-right font-semibold rounded-tr-lg">24K per Tola</th> </tr> </thead> <tbody> ${topCities.slice(0, 15).map((city, i) => renderTemplate`<tr${addAttribute(i % 2 === 0 ? "bg-white" : "bg-gold-50/50", "class")}> <td class="px-3 py-2.5 border-b border-gray-100"> <a${addAttribute(`/gold-rate-today-in/${city.slug}/`, "href")} class="text-gold-700 hover:underline font-medium">${city.name}</a> </td> <td class="px-3 py-2.5 text-right font-semibold border-b border-gray-100">${formatINR(Math.round(gramToTola(karat.k22 * city.adjustment)))}</td> <td class="px-3 py-2.5 text-right font-semibold border-b border-gray-100">${formatINR(Math.round(gramToTola(karat.k24 * city.adjustment)))}</td> </tr>`)} </tbody> </table> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs, "title": "FAQs - Gold Rate per Tola" })}  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "footer", "format": "horizontal" })}`, "in-content": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}` })}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/pages/gold-rate-today-per-tola.astro", void 0);
const $$file = "/Users/hyunyoung/projects/gold-rate-today/src/pages/gold-rate-today-per-tola.astro";
const $$url = "/gold-rate-today-per-tola/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$GoldRateTodayPerTola,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
