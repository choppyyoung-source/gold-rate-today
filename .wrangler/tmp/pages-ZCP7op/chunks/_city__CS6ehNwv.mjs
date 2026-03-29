globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "./worker-entry_npiV1CLA.mjs";
import { n as getCityBySlug, g as getGoldPrices, p as getCityGoldData, q as getNearbyCities, a as getKaratPricesINR, f as formatINR, b as generateWebPageSchema, d as generateFAQSchema, c as generateBreadcrumbSchema, r as generateGoldPriceSchema, $ as $$MainLayout, e as $$AdUnit, h as $$BreadcrumbNav, k as $$FAQ, s as cities } from "./schema_DudCuwEp.mjs";
import { g as getCityFAQs, $ as $$GoldPriceHero, a as $$PriceTable } from "./faqs_B72o2YGj.mjs";
import { $ as $$CityRatesTable } from "./CityRatesTable_CJx7uUZV.mjs";
const prerender = false;
const $$city = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$city;
  const { city: citySlug } = Astro2.params;
  const city = getCityBySlug(citySlug);
  if (!city) {
    return Astro2.redirect("/");
  }
  const prices = await getGoldPrices();
  const cityData = getCityGoldData(city, prices);
  const nearbyCities = getNearbyCities(city.slug);
  const faqs = getCityFAQs(city.name, city.state);
  getKaratPricesINR(prices);
  const title = `Gold Rate Today in ${city.name} - ${formatINR(cityData.k22PerGram)}/g 22K, ${formatINR(cityData.k24PerGram)}/g 24K`;
  const description = `Live gold rate in ${city.name}, ${city.state} today: 22K gold at ${formatINR(cityData.k22PerGram)}/gram (${formatINR(cityData.k22Per10g)}/10g) and 24K at ${formatINR(cityData.k24PerGram)}/gram. Updated every 5 minutes. Check ${city.name} gold price history, calculator, and comparison with nearby cities.`;
  const schemas = [
    generateWebPageSchema(title, description, `/gold-rate-today-in/${city.slug}/`),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Gold Rate Today", url: "/" },
      { name: `Gold Rate in ${city.name}`, url: `/gold-rate-today-in/${city.slug}/` }
    ]),
    generateGoldPriceSchema(prices, "INR", cityData.k24PerGram, city.name)
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "canonical": `/gold-rate-today-in/${city.slug}/`, "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Gold Rate Today", href: "/" },
    { label: `Gold Rate in ${city.name}` }
  ] })} ${renderComponent($$result2, "GoldPriceHero", $$GoldPriceHero, { "prices": prices, "cityName": city.name })}   ${maybeRenderHead()}<section class="mt-6 bg-white border border-gray-200 rounded-xl p-5"> <h2 class="text-lg font-bold text-gray-900 mb-3">Today's Gold Rate Summary - ${city.name}, ${city.state}</h2> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4"> <div class="text-center p-3 bg-gold-50 rounded-lg"> <p class="text-xs text-gray-500 mb-1">22K per gram</p> <p class="text-lg font-bold text-gray-900">${formatINR(cityData.k22PerGram)}</p> </div> <div class="text-center p-3 bg-gold-50 rounded-lg"> <p class="text-xs text-gray-500 mb-1">24K per gram</p> <p class="text-lg font-bold text-gray-900">${formatINR(cityData.k24PerGram)}</p> </div> <div class="text-center p-3 bg-gold-50 rounded-lg"> <p class="text-xs text-gray-500 mb-1">22K per 10g</p> <p class="text-lg font-bold text-gray-900">${formatINR(cityData.k22Per10g)}</p> </div> <div class="text-center p-3 bg-gold-50 rounded-lg"> <p class="text-xs text-gray-500 mb-1">24K per 10g</p> <p class="text-lg font-bold text-gray-900">${formatINR(cityData.k24Per10g)}</p> </div> </div> <!-- Additional weight formats --> <div class="mt-4 grid grid-cols-2 gap-3 text-sm"> <div class="flex justify-between px-3 py-2 bg-gray-50 rounded"> <span class="text-gray-500">22K per Tola</span> <span class="font-semibold">${formatINR(cityData.k22PerTola)}</span> </div> <div class="flex justify-between px-3 py-2 bg-gray-50 rounded"> <span class="text-gray-500">24K per Tola</span> <span class="font-semibold">${formatINR(cityData.k24PerTola)}</span> </div> <div class="flex justify-between px-3 py-2 bg-gray-50 rounded"> <span class="text-gray-500">22K per Sovereign (8g)</span> <span class="font-semibold">${formatINR(cityData.k22PerSovereign)}</span> </div> <div class="flex justify-between px-3 py-2 bg-gray-50 rounded"> <span class="text-gray-500">24K per Sovereign (8g)</span> <span class="font-semibold">${formatINR(cityData.k24PerSovereign)}</span> </div> </div> </section> ${renderComponent($$result2, "PriceTable", $$PriceTable, { "prices": prices, "cityName": city.name, "adjustment": city.adjustment })}   ${nearbyCities.length > 0 && renderTemplate`${renderComponent($$result2, "CityRatesTable", $$CityRatesTable, { "prices": prices, "cities": nearbyCities, "title": `Gold Rate in Cities Near ${city.name}`, "showAllLink": false })}`} <section class="mt-8 bg-white border border-gray-200 rounded-lg p-5"> <h2 class="text-lg font-bold text-gray-900 mb-3">About Gold Market in ${city.name}</h2> <div class="text-sm text-gray-600 leading-relaxed space-y-3"> <p> ${city.name} is one of India's important gold markets, located in ${city.state}.
        The gold rate in ${city.name} follows the IBJA (India Bullion and Jewellers Association) standard
        rate with minor adjustments based on local market conditions, transportation costs, and demand patterns.
</p> <p>
Gold jewelry is an integral part of cultural traditions in ${city.state}. Whether for weddings,
        festivals like Dhanteras and Akshaya Tritiya, or investment purposes, gold remains one of the
        most preferred assets in ${city.name}. The city has numerous authorized jewelers and bullion
        dealers offering BIS hallmarked gold in 22K (916) and 24K (999) purity levels.
</p> <p>
When buying gold in ${city.name}, always look for the BIS hallmark that certifies the purity of
        gold. Compare making charges across jewelers, as they can range from 8% to 35% depending on the
        design complexity. The current GST on gold is 3% on the gold value and 5% on making charges.
</p> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs, "title": `FAQs - Gold Rate in ${city.name}` })}  <section class="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5"> <h3 class="font-semibold text-gray-900 mb-3">Gold Rate in Other Indian Cities</h3> <div class="flex flex-wrap gap-2"> ${cities.filter((c) => c.slug !== city.slug).slice(0, 30).map((c) => renderTemplate`<a${addAttribute(`/gold-rate-today-in/${c.slug}/`, "href")} class="text-xs px-2.5 py-1 bg-white border border-gray-200 text-gold-700 rounded-full hover:bg-gold-50 transition-colors"> ${c.name} </a>`)} </div> </section>  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "footer", "format": "horizontal" })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "header", "format": "horizontal" })}`, "in-content": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}` })}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/pages/gold-rate-today-in/[city].astro", void 0);
const $$file = "/Users/hyunyoung/projects/gold-rate-today/src/pages/gold-rate-today-in/[city].astro";
const $$url = "/gold-rate-today-in/[city]/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$city,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
