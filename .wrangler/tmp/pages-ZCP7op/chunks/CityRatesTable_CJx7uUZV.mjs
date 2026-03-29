globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from "./worker-entry_npiV1CLA.mjs";
import { t as topCities, a as getKaratPricesINR, f as formatINR } from "./schema_DudCuwEp.mjs";
const $$CityRatesTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CityRatesTable;
  const { prices, cities = topCities, title = "Gold Rate Today in Indian Cities", showAllLink = true } = Astro2.props;
  const baseKarat = getKaratPricesINR(prices);
  return renderTemplate`${maybeRenderHead()}<section class="mt-8"> <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">${title}</h2> <div class="table-responsive"> <table class="w-full text-sm border-collapse"> <thead> <tr class="bg-gold-700 text-white"> <th class="px-3 py-3 text-left font-semibold rounded-tl-lg">City</th> <th class="px-3 py-3 text-right font-semibold">22K (per gram)</th> <th class="px-3 py-3 text-right font-semibold">22K (per 10g)</th> <th class="px-3 py-3 text-right font-semibold">24K (per gram)</th> <th class="px-3 py-3 text-right font-semibold rounded-tr-lg">24K (per 10g)</th> </tr> </thead> <tbody> ${cities.map((city, i) => {
    const k24 = Math.round(baseKarat.k24 * city.adjustment);
    const k22 = Math.round(baseKarat.k22 * city.adjustment);
    return renderTemplate`<tr${addAttribute(i % 2 === 0 ? "bg-white" : "bg-gold-50/50", "class")}> <td class="px-3 py-2.5 border-b border-gray-100"> <a${addAttribute(`/gold-rate-today-in/${city.slug}/`, "href")} class="text-gold-700 hover:text-gold-900 font-medium hover:underline"> ${city.name} </a> </td> <td class="px-3 py-2.5 text-right font-semibold text-gray-900 border-b border-gray-100">${formatINR(k22)}</td> <td class="px-3 py-2.5 text-right text-gray-700 border-b border-gray-100">${formatINR(k22 * 10)}</td> <td class="px-3 py-2.5 text-right font-semibold text-gray-900 border-b border-gray-100">${formatINR(k24)}</td> <td class="px-3 py-2.5 text-right text-gray-700 border-b border-gray-100">${formatINR(k24 * 10)}</td> </tr>`;
  })} </tbody> </table> </div> ${showAllLink && renderTemplate`<p class="text-sm text-gray-500 mt-3">
View gold rates in all 80+ Indian cities.
<a href="/gold-rate-today-in/chennai/" class="text-gold-600 hover:underline">Chennai</a> |
<a href="/gold-rate-today-in/mumbai/" class="text-gold-600 hover:underline">Mumbai</a> |
<a href="/gold-rate-today-in/delhi/" class="text-gold-600 hover:underline">Delhi</a> |
<a href="/gold-rate-today-in/bangalore/" class="text-gold-600 hover:underline">Bangalore</a> |
<a href="/gold-rate-today-in/hyderabad/" class="text-gold-600 hover:underline">Hyderabad</a> |
<a href="/gold-rate-today-in/kolkata/" class="text-gold-600 hover:underline">Kolkata</a> </p>`} </section>`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/CityRatesTable.astro", void 0);
export {
  $$CityRatesTable as $
};
