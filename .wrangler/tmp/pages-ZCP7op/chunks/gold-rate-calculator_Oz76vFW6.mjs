globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { n as reactExports, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_npiV1CLA.mjs";
import { g as getGoldPrices, a as getKaratPricesINR, f as formatINR, b as generateWebPageSchema, c as generateBreadcrumbSchema, d as generateFAQSchema, $ as $$MainLayout, e as $$AdUnit, h as $$BreadcrumbNav, k as $$FAQ } from "./schema_DudCuwEp.mjs";
import { j as jsxRuntimeExports } from "./jsx-runtime_Bo14_ato.mjs";
function Calculator({
  k24PricePerGram,
  k22PricePerGram,
  k18PricePerGram
}) {
  const [weight, setWeight] = reactExports.useState(10);
  const [karat, setKarat] = reactExports.useState("22");
  const [includeGst, setIncludeGst] = reactExports.useState(true);
  const [makingPct, setMakingPct] = reactExports.useState(12);
  const pricePerGram = karat === "24" ? k24PricePerGram : karat === "22" ? k22PricePerGram : k18PricePerGram;
  const calculation = reactExports.useMemo(() => {
    const goldValue = pricePerGram * weight;
    const makingCharge = goldValue * (makingPct / 100);
    const subtotal = goldValue + makingCharge;
    const gstOnGold = includeGst ? goldValue * 0.03 : 0;
    const gstOnMaking = includeGst ? makingCharge * 0.05 : 0;
    const total = subtotal + gstOnGold + gstOnMaking;
    return { goldValue, makingCharge, gstOnGold, gstOnMaking, subtotal, total };
  }, [weight, pricePerGram, includeGst, makingPct]);
  const fmt = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-5 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-5", children: "Gold Rate Calculator" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Weight (grams)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: weight,
            onChange: (e) => setWeight(Math.max(0.1, Number(e.target.value))),
            min: "0.1",
            step: "0.5",
            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Gold Purity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: karat,
            onChange: (e) => setKarat(e.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "24", children: "24 Karat (999 - Pure Gold)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "22", children: "22 Karat (916 - Jewelry Gold)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "18", children: "18 Karat (750)" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Making Charges (%)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: makingPct,
            onChange: (e) => setMakingPct(Math.max(0, Math.min(50, Number(e.target.value)))),
            min: "0",
            max: "50",
            step: "1",
            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: includeGst,
            onChange: (e) => setIncludeGst(e.target.checked),
            className: "w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Include GST (3% on gold + 5% on making)" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
          "Gold Value (",
          weight,
          "g x ",
          fmt(pricePerGram),
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: fmt(calculation.goldValue) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
          "Making Charges (",
          makingPct,
          "%)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: fmt(calculation.makingCharge) })
      ] }),
      includeGst && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "GST on Gold (3%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: fmt(calculation.gstOnGold) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "GST on Making (5%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: fmt(calculation.gstOnMaking) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base pt-2 border-t border-amber-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-900", children: "Estimated Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-800 text-lg", children: fmt(calculation.total) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-3", children: "* This is an estimated price. Actual price may vary based on jeweler, design, and local factors." })
  ] });
}
const prerender = false;
const $$GoldRateCalculator = createComponent(async ($$result, $$props, $$slots) => {
  const prices = await getGoldPrices();
  const karatINR = getKaratPricesINR(prices);
  const title = "Gold Rate Calculator - Calculate Gold Jewelry Price with GST & Making Charges";
  const description = `Calculate gold jewelry price with GST and making charges. Current gold rate: 22K at ${formatINR(karatINR.k22)}/gram, 24K at ${formatINR(karatINR.k24)}/gram. Enter weight and purity to get the total estimated price.`;
  const faqs = [
    { question: "How to calculate gold jewelry price?", answer: "To calculate gold jewelry price: (1) Multiply gold rate per gram by weight in grams to get the gold value, (2) Add making charges (8-35% of gold value), (3) Add 3% GST on gold value, (4) Add 5% GST on making charges. The total of all these gives the approximate jewelry price." },
    { question: "What are typical making charges for gold jewelry?", answer: "Making charges vary by design complexity: Simple chains and bangles: 8-12%, Regular jewelry: 12-18%, Detailed temple/antique designs: 18-25%, Designer/bridal jewelry: 25-35%. Machine-made pieces have lower charges than hand-crafted ones." },
    { question: "Is GST applicable on gold jewelry?", answer: "Yes, GST is applicable on gold jewelry in India. 3% GST is charged on the gold value, and 5% GST is charged on the making charges. For example, on a ₹1,00,000 gold value with ₹12,000 making charges, the GST would be ₹3,000 (on gold) + ₹600 (on making) = ₹3,600." },
    { question: "How to calculate gold rate per gram from 10 gram price?", answer: "Simply divide the 10 gram price by 10. For example, if 10 grams of 22K gold costs ₹72,000, then the per gram rate is ₹72,000 ÷ 10 = ₹7,200 per gram." }
  ];
  const schemas = [
    generateWebPageSchema(title, description, "/gold-rate-calculator/"),
    generateBreadcrumbSchema([
      { name: "Gold Rate Today", url: "/" },
      { name: "Gold Calculator", url: "/gold-rate-calculator/" }
    ]),
    generateFAQSchema(faqs)
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "canonical": "/gold-rate-calculator/", "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Gold Rate Today", href: "/" },
    { label: "Gold Rate Calculator" }
  ] })} ${maybeRenderHead()}<h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Gold Rate Calculator</h1> <p class="text-gray-600 mb-6">Calculate the total cost of gold jewelry including making charges and GST based on today's live gold rates.</p> ${renderComponent($$result2, "Calculator", Calculator, { "client:load": true, "k24PricePerGram": karatINR.k24, "k22PricePerGram": karatINR.k22, "k18PricePerGram": karatINR.k18, "client:component-hydration": "load", "client:component-path": "/Users/hyunyoung/projects/gold-rate-today/src/components/Calculator.tsx", "client:component-export": "default" })}   <section class="mt-8 bg-white border border-gray-200 rounded-lg p-5"> <h2 class="text-lg font-bold text-gray-900 mb-3">How to Use the Gold Calculator</h2> <ol class="list-decimal list-inside space-y-2 text-sm text-gray-600"> <li><strong>Enter the weight</strong> of gold in grams (e.g., 10 grams for a standard gold chain)</li> <li><strong>Select the purity</strong> - 22K (916) for jewelry or 24K (999) for coins/bars</li> <li><strong>Set making charges</strong> percentage based on the jeweler (typically 8-35%)</li> <li><strong>Toggle GST</strong> to include or exclude 3% GST on gold and 5% GST on making charges</li> <li>The calculator instantly shows the <strong>estimated total price</strong> with a complete breakdown</li> </ol> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs, "title": "FAQs - Gold Calculator" })}  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "footer", "format": "horizontal" })}`, "in-content": async ($$result2) => renderTemplate`${renderComponent($$result2, "AdUnit", $$AdUnit, { "slot": "in-content" })}` })}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/pages/gold-rate-calculator.astro", void 0);
const $$file = "/Users/hyunyoung/projects/gold-rate-today/src/pages/gold-rate-calculator.astro";
const $$url = "/gold-rate-calculator/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$GoldRateCalculator,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
