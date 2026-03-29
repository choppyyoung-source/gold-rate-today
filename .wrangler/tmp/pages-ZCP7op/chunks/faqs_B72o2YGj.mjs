globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from "./worker-entry_npiV1CLA.mjs";
import { a as getKaratPricesINR, x as getKaratPricesUSD, w as getTodayString, v as formatPercent, f as formatINR, l as formatUSD } from "./schema_DudCuwEp.mjs";
const $$GoldPriceHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GoldPriceHero;
  const { prices, cityName } = Astro2.props;
  const karatINR = getKaratPricesINR(prices);
  const karatUSD = getKaratPricesUSD(prices);
  const today = getTodayString();
  const isUp = prices.changePct >= 0;
  const location = cityName ? ` in ${cityName}` : " in India";
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-br from-gold-50 via-white to-gold-50 border border-gold-200 rounded-2xl p-6 sm:p-8 shadow-sm"> <div class="text-center mb-6"> <p class="text-sm text-gray-500 mb-1">${today}</p> <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
Gold Rate Today${location} </h1> <p class="text-sm text-gray-500 mt-2">Live 22K &amp; 24K Gold Prices per Gram &amp; per 10 Grams</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> <!-- 24K Gold --> <div class="bg-white rounded-xl p-5 border border-gold-200 shadow-sm"> <div class="flex items-center justify-between mb-2"> <span class="text-xs font-semibold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full">24K Pure Gold</span> <span${addAttribute(["text-xs font-semibold px-2 py-0.5 rounded-full", isUp ? "text-up bg-green-50" : "text-down bg-red-50"], "class:list")}> ${isUp ? "▲" : "▼"} ${formatPercent(prices.changePct)} </span> </div> <div class="mt-3"> <p class="text-2xl sm:text-3xl font-bold text-gray-900">${formatINR(karatINR.k24)}</p> <p class="text-xs text-gray-500 mt-1">per gram</p> </div> <div class="mt-3 pt-3 border-t border-gray-100"> <div class="flex justify-between text-sm"> <span class="text-gray-500">Per 10 grams</span> <span class="font-semibold text-gray-900">${formatINR(karatINR.k24 * 10)}</span> </div> <div class="flex justify-between text-sm mt-1"> <span class="text-gray-500">Per gram (USD)</span> <span class="font-medium text-gray-600">${formatUSD(karatUSD.k24)}</span> </div> </div> </div> <!-- 22K Gold --> <div class="bg-white rounded-xl p-5 border border-gold-200 shadow-sm"> <div class="flex items-center justify-between mb-2"> <span class="text-xs font-semibold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full">22K (916) Gold</span> <span${addAttribute(["text-xs font-semibold px-2 py-0.5 rounded-full", isUp ? "text-up bg-green-50" : "text-down bg-red-50"], "class:list")}> ${isUp ? "▲" : "▼"} ${formatPercent(prices.changePct)} </span> </div> <div class="mt-3"> <p class="text-2xl sm:text-3xl font-bold text-gray-900">${formatINR(karatINR.k22)}</p> <p class="text-xs text-gray-500 mt-1">per gram</p> </div> <div class="mt-3 pt-3 border-t border-gray-100"> <div class="flex justify-between text-sm"> <span class="text-gray-500">Per 10 grams</span> <span class="font-semibold text-gray-900">${formatINR(karatINR.k22 * 10)}</span> </div> <div class="flex justify-between text-sm mt-1"> <span class="text-gray-500">Per gram (USD)</span> <span class="font-medium text-gray-600">${formatUSD(karatUSD.k22)}</span> </div> </div> </div> <!-- 18K Gold --> <div class="bg-white rounded-xl p-5 border border-gold-200 shadow-sm sm:col-span-2 lg:col-span-1"> <div class="flex items-center justify-between mb-2"> <span class="text-xs font-semibold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full">18K (750) Gold</span> <span${addAttribute(["text-xs font-semibold px-2 py-0.5 rounded-full", isUp ? "text-up bg-green-50" : "text-down bg-red-50"], "class:list")}> ${isUp ? "▲" : "▼"} ${formatPercent(prices.changePct)} </span> </div> <div class="mt-3"> <p class="text-2xl sm:text-3xl font-bold text-gray-900">${formatINR(karatINR.k18)}</p> <p class="text-xs text-gray-500 mt-1">per gram</p> </div> <div class="mt-3 pt-3 border-t border-gray-100"> <div class="flex justify-between text-sm"> <span class="text-gray-500">Per 10 grams</span> <span class="font-semibold text-gray-900">${formatINR(karatINR.k18 * 10)}</span> </div> <div class="flex justify-between text-sm mt-1"> <span class="text-gray-500">Per gram (USD)</span> <span class="font-medium text-gray-600">${formatUSD(karatUSD.k18)}</span> </div> </div> </div> </div> <!-- International Price Bar --> <div class="mt-4 bg-white/80 rounded-lg px-4 py-3 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm border border-gold-100"> <div class="flex items-center gap-2"> <span class="text-gray-500">XAU/USD:</span> <span class="font-bold text-gray-900">${formatUSD(prices.xauUsd)}/oz</span> <span${addAttribute(["font-medium", isUp ? "text-up" : "text-down"], "class:list")}> ${isUp ? "+" : ""}${formatUSD(prices.changeUsd)} </span> </div> <div class="flex items-center gap-2"> <span class="text-gray-500">USD/INR:</span> <span class="font-semibold text-gray-900">${prices.usdInr.toFixed(2)}</span> </div> </div> </section>`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/GoldPriceHero.astro", void 0);
const $$PriceTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PriceTable;
  const { prices, cityName, adjustment = 1 } = Astro2.props;
  const karat = getKaratPricesINR(prices);
  const adj = (v) => Math.round(v * adjustment);
  const weights = [1, 2, 5, 8, 10, 20, 50, 100];
  const location = cityName || "India";
  return renderTemplate`${maybeRenderHead()}<section class="mt-8"> <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
Gold Rate Today in ${location} - Weight Wise Price
</h2> <div class="table-responsive"> <table class="w-full text-sm border-collapse"> <thead> <tr class="bg-gold-700 text-white"> <th class="px-3 py-3 text-left font-semibold rounded-tl-lg">Weight</th> <th class="px-3 py-3 text-right font-semibold">24K Gold</th> <th class="px-3 py-3 text-right font-semibold">22K Gold</th> <th class="px-3 py-3 text-right font-semibold rounded-tr-lg">18K Gold</th> </tr> </thead> <tbody> ${weights.map((w, i) => renderTemplate`<tr${addAttribute(i % 2 === 0 ? "bg-white" : "bg-gold-50/50", "class")}> <td class="px-3 py-2.5 font-medium text-gray-700 border-b border-gray-100"> ${w} gram${w > 1 ? "s" : ""} </td> <td class="px-3 py-2.5 text-right font-semibold text-gray-900 border-b border-gray-100"> ${formatINR(adj(karat.k24) * w)} </td> <td class="px-3 py-2.5 text-right font-semibold text-gray-900 border-b border-gray-100"> ${formatINR(adj(karat.k22) * w)} </td> <td class="px-3 py-2.5 text-right font-medium text-gray-700 border-b border-gray-100"> ${formatINR(adj(karat.k18) * w)} </td> </tr>`)} </tbody> </table> </div> <p class="text-xs text-gray-500 mt-2">
* Prices are indicative and exclude making charges (8-35%) and GST (3%). Actual jewelry prices will be higher.
</p> </section>`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/PriceTable.astro", void 0);
const mainPageFAQs = [
  {
    question: "What is the gold rate today in India?",
    answer: "The gold rate today in India varies by city and karat. 24 karat (pure) gold is priced based on the international spot price converted to INR, while 22 karat gold (commonly used in jewelry) is approximately 91.67% of the 24K price. Prices are updated every few minutes based on live market data from IBJA and international exchanges."
  },
  {
    question: "Why is gold price different in different cities in India?",
    answer: "Gold prices vary across Indian cities due to several factors: transportation costs (port cities like Chennai and Mumbai typically have lower prices), local taxes and duties, demand-supply dynamics in local markets, and making charges by local jewelers. The base price set by IBJA is the same, but these additional factors create small variations of 0.1% to 0.6% between cities."
  },
  {
    question: "What is the difference between 22K and 24K gold?",
    answer: "24 karat (24K) gold is 99.9% pure gold, making it the purest form available. It is softer and typically used for coins and bars. 22 karat (22K) gold contains 91.67% pure gold mixed with 8.33% other metals like copper or silver, making it harder and more suitable for jewelry. 22K gold is also known as 916 gold (916 parts per 1000 are pure gold)."
  },
  {
    question: "What is the best time to buy gold in India?",
    answer: "Gold prices tend to be lower during off-season months (typically July-August) when wedding and festival demand is low. Historically, buying during market dips or corrections can offer better value. Consider buying during Akshaya Tritiya or Dhanteras as jewelers offer special discounts. However, gold is a long-term investment, so timing the market is less important than consistent investing."
  },
  {
    question: "How is the gold rate determined in India?",
    answer: "The gold rate in India is determined by the India Bullion and Jewellers Association (IBJA), which sets the opening and closing rates daily based on the international spot price of gold (London Bullion Market Association - LBMA), the USD/INR exchange rate, customs duty (currently 15%), GST (3%), and local demand-supply conditions."
  },
  {
    question: "What is making charge on gold jewelry?",
    answer: "Making charges are the labor and craftsmanship costs charged by jewelers for converting raw gold into jewelry. These charges typically range from 8% to 35% of the gold value, depending on the design complexity, brand, and type of jewelry. Hand-crafted and intricate designs carry higher making charges than machine-made pieces."
  },
  {
    question: "Is it better to buy gold jewelry or gold coins?",
    answer: "Gold coins and bars have lower premiums (3-5% over spot price) compared to jewelry (8-35% making charges), making them better for pure investment. However, jewelry serves both aesthetic and investment purposes. For investment, consider Sovereign Gold Bonds (SGBs) or Gold ETFs, which offer additional benefits like 2.5% annual interest (SGBs) and no storage concerns."
  },
  {
    question: "What is 916 gold?",
    answer: "916 gold refers to 22 karat gold, where 916 out of 1000 parts are pure gold (91.6%). This is the most popular purity for gold jewelry in India. The BIS (Bureau of Indian Standards) hallmark '916' certifies this purity level. Other common hallmarks include 750 (18K), 585 (14K), and 999 (24K)."
  },
  {
    question: "How much GST is charged on gold in India?",
    answer: "GST on gold in India is 3% on the value of gold, plus 5% GST on making charges. For example, if you buy gold jewelry worth Rs 50,000 with Rs 5,000 making charges, the GST would be Rs 1,500 (3% of Rs 50,000) + Rs 250 (5% of Rs 5,000) = Rs 1,750 total GST."
  },
  {
    question: "What factors affect gold prices globally?",
    answer: "Global gold prices are influenced by: US Dollar strength (inverse relationship), inflation rates and expectations, central bank monetary policies and interest rates, geopolitical tensions and economic uncertainty, central bank gold reserves and purchases, demand from major consumers (India, China), mining supply, and ETF inflows/outflows. Gold is traditionally seen as a safe-haven asset during economic instability."
  }
];
function getCityFAQs(cityName, stateName) {
  return [
    {
      question: `What is the gold rate today in ${cityName}?`,
      answer: `The gold rate in ${cityName} today is updated in real-time based on international gold prices and the USD/INR exchange rate. ${cityName}, ${stateName} follows the IBJA standard rates with minor adjustments for local market conditions and transportation costs. Check the table above for the latest 22K and 24K gold prices per gram and per 10 grams.`
    },
    {
      question: `Why is the gold rate in ${cityName} different from other cities?`,
      answer: `Gold prices in ${cityName} may differ slightly from other Indian cities due to local taxes, transportation costs from the nearest port, demand-supply dynamics in ${stateName}, and local jeweler premiums. Port cities generally have lower gold prices due to reduced transportation costs.`
    },
    {
      question: `Where can I buy gold in ${cityName}?`,
      answer: `You can buy gold in ${cityName} from authorized jewelers, bank branches (gold coins/bars), online platforms like MMTC-PAMP, or through digital gold apps. Always ensure the gold is BIS hallmarked (916 for 22K or 999 for 24K) for quality assurance. Major jeweler chains like Tanishq, Malabar Gold, Kalyan Jewellers, and Joyalukkas have stores in ${cityName}.`
    },
    {
      question: `Is gold cheaper in ${cityName} compared to other cities?`,
      answer: `Gold prices in ${cityName} are very close to the national average, with variations of less than 0.5%. The base gold rate from IBJA is the same across India, but local factors like proximity to ports, state-level charges, and local demand create minor differences. Compare the rates table above with other cities to see the exact difference.`
    },
    {
      question: `What is the 22 carat gold rate in ${cityName} today?`,
      answer: `The 22 carat (22K/916) gold rate in ${cityName} today is available in the price table above. 22K gold is the most popular choice for jewelry in ${stateName} and across India. The price is calculated as 91.67% of the 24K pure gold rate, adjusted for ${cityName}'s local market conditions.`
    }
  ];
}
export {
  $$GoldPriceHero as $,
  $$PriceTable as a,
  getCityFAQs as g,
  mainPageFAQs as m
};
