globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DK79cARi.mjs";
import { o as createRenderInstruction, m as maybeRenderHead, h as addAttribute, r as renderTemplate, u as unescapeHTML, l as renderComponent, p as renderSlot, q as renderHead } from "./worker-entry_npiV1CLA.mjs";
async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}<\/script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { label: "Gold Rate", href: "/" },
    { label: "Calculator", href: "/gold-rate-calculator/" },
    { label: "Price History", href: "/gold-price-history/" },
    { label: "Silver Rate", href: "/silver-rate-today/" },
    { label: "22K Gold", href: "/22-carat-gold-rate-today/" },
    { label: "24K Gold", href: "/24-carat-gold-rate-today/" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="bg-gradient-to-r from-gold-800 to-gold-700 text-white shadow-lg sticky top-0 z-50"> <nav class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="flex items-center justify-between h-14"> <a href="/" class="flex items-center gap-2 shrink-0"> <svg viewBox="0 0 24 24" class="w-7 h-7 text-gold-300" fill="currentColor"> <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"></circle> <text x="12" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">Au</text> </svg> <span class="font-bold text-lg hidden sm:inline">Gold Rates Live</span> <span class="font-bold text-lg sm:hidden">GRL</span> </a> <div class="hidden md:flex items-center gap-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
    currentPath === item.href ? "bg-gold-600 text-white" : "text-gold-100 hover:bg-gold-600/50 hover:text-white"
  ], "class:list")}> ${item.label} </a>`)} </div> <button id="mobile-menu-btn" class="md:hidden p-2 rounded-md text-gold-200 hover:text-white hover:bg-gold-600/50" aria-label="Toggle menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <div id="mobile-menu" class="md:hidden hidden pb-3"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "block px-3 py-2 rounded-md text-sm font-medium",
    currentPath === item.href ? "bg-gold-600 text-white" : "text-gold-100 hover:bg-gold-600/50 hover:text-white"
  ], "class:list")}> ${item.label} </a>`)} </div> </nav> </header> ${renderScript($$result, "/Users/hyunyoung/projects/gold-rate-today/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/Header.astro", void 0);
const cities = [
  // Tier 1 - Major Metros
  { name: "Chennai", slug: "chennai", state: "Tamil Nadu", region: "south", adjustment: 0.997, nearby: ["coimbatore", "madurai", "bangalore", "vellore", "trichy"], tier: 1 },
  { name: "Mumbai", slug: "mumbai", state: "Maharashtra", region: "west", adjustment: 1, nearby: ["pune", "nashik", "thane", "navi-mumbai", "nagpur"], tier: 1 },
  { name: "Delhi", slug: "delhi", state: "Delhi", region: "north", adjustment: 1.003, nearby: ["noida", "gurgaon", "faridabad", "ghaziabad", "meerut"], tier: 1 },
  { name: "Bangalore", slug: "bangalore", state: "Karnataka", region: "south", adjustment: 1.001, nearby: ["mysore", "mangalore", "chennai", "hyderabad", "hubli"], tier: 1 },
  { name: "Hyderabad", slug: "hyderabad", state: "Telangana", region: "south", adjustment: 1.002, nearby: ["bangalore", "vijayawada", "visakhapatnam", "warangal", "nizamabad"], tier: 1 },
  { name: "Kolkata", slug: "kolkata", state: "West Bengal", region: "east", adjustment: 1.004, nearby: ["howrah", "siliguri", "asansol", "durgapur", "bhubaneswar"], tier: 1 },
  // Tier 2 - Major Cities
  { name: "Pune", slug: "pune", state: "Maharashtra", region: "west", adjustment: 1.001, nearby: ["mumbai", "nashik", "nagpur", "aurangabad", "kolhapur"], tier: 2 },
  { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat", region: "west", adjustment: 1.002, nearby: ["surat", "rajkot", "vadodara", "gandhinagar", "jamnagar"], tier: 2 },
  { name: "Jaipur", slug: "jaipur", state: "Rajasthan", region: "north", adjustment: 1.003, nearby: ["jodhpur", "udaipur", "ajmer", "kota", "delhi"], tier: 2 },
  { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh", region: "north", adjustment: 1.004, nearby: ["kanpur", "varanasi", "agra", "allahabad", "meerut"], tier: 2 },
  { name: "Coimbatore", slug: "coimbatore", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["chennai", "madurai", "trichy", "salem", "erode"], tier: 2 },
  { name: "Kochi", slug: "kochi", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["thrissur", "kozhikode", "thiruvananthapuram", "kannur", "alappuzha"], tier: 2 },
  { name: "Surat", slug: "surat", state: "Gujarat", region: "west", adjustment: 1.001, nearby: ["ahmedabad", "vadodara", "rajkot", "mumbai", "nashik"], tier: 2 },
  { name: "Chandigarh", slug: "chandigarh", state: "Chandigarh", region: "north", adjustment: 1.003, nearby: ["ludhiana", "amritsar", "jalandhar", "shimla", "delhi"], tier: 2 },
  { name: "Indore", slug: "indore", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["bhopal", "ujjain", "gwalior", "jabalpur", "nagpur"], tier: 2 },
  { name: "Bhopal", slug: "bhopal", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["indore", "jabalpur", "gwalior", "ujjain", "raipur"], tier: 2 },
  { name: "Patna", slug: "patna", state: "Bihar", region: "east", adjustment: 1.005, nearby: ["ranchi", "varanasi", "kolkata", "lucknow", "gaya"], tier: 2 },
  { name: "Nagpur", slug: "nagpur", state: "Maharashtra", region: "central", adjustment: 1.002, nearby: ["pune", "mumbai", "indore", "raipur", "aurangabad"], tier: 2 },
  { name: "Visakhapatnam", slug: "visakhapatnam", state: "Andhra Pradesh", region: "south", adjustment: 1.002, nearby: ["vijayawada", "hyderabad", "bhubaneswar", "rajahmundry", "kakinada"], tier: 2 },
  { name: "Vijayawada", slug: "vijayawada", state: "Andhra Pradesh", region: "south", adjustment: 1.002, nearby: ["hyderabad", "visakhapatnam", "guntur", "tirupati", "nellore"], tier: 2 },
  { name: "Madurai", slug: "madurai", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["chennai", "coimbatore", "trichy", "salem", "tirunelveli"], tier: 2 },
  // Tier 3 - Secondary Cities
  { name: "Noida", slug: "noida", state: "Uttar Pradesh", region: "north", adjustment: 1.003, nearby: ["delhi", "gurgaon", "ghaziabad", "faridabad", "meerut"], tier: 3 },
  { name: "Gurgaon", slug: "gurgaon", state: "Haryana", region: "north", adjustment: 1.003, nearby: ["delhi", "noida", "faridabad", "jaipur", "chandigarh"], tier: 3 },
  { name: "Thane", slug: "thane", state: "Maharashtra", region: "west", adjustment: 1, nearby: ["mumbai", "navi-mumbai", "pune", "nashik", "kalyan"], tier: 3 },
  { name: "Navi Mumbai", slug: "navi-mumbai", state: "Maharashtra", region: "west", adjustment: 1, nearby: ["mumbai", "thane", "pune", "panvel", "kalyan"], tier: 3 },
  { name: "Mysore", slug: "mysore", state: "Karnataka", region: "south", adjustment: 1.001, nearby: ["bangalore", "mangalore", "coimbatore", "hubli", "hassan"], tier: 3 },
  { name: "Mangalore", slug: "mangalore", state: "Karnataka", region: "south", adjustment: 0.999, nearby: ["bangalore", "mysore", "kochi", "hubli", "udupi"], tier: 3 },
  { name: "Trichy", slug: "trichy", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["chennai", "madurai", "coimbatore", "salem", "thanjavur"], tier: 3 },
  { name: "Salem", slug: "salem", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["coimbatore", "chennai", "trichy", "erode", "namakkal"], tier: 3 },
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["kochi", "kozhikode", "thrissur", "kollam", "nagercoil"], tier: 3 },
  { name: "Kozhikode", slug: "kozhikode", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["kochi", "thrissur", "kannur", "thiruvananthapuram", "mangalore"], tier: 3 },
  { name: "Thrissur", slug: "thrissur", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["kochi", "kozhikode", "thiruvananthapuram", "palakkad", "malappuram"], tier: 3 },
  { name: "Varanasi", slug: "varanasi", state: "Uttar Pradesh", region: "north", adjustment: 1.004, nearby: ["lucknow", "patna", "allahabad", "kanpur", "gorakhpur"], tier: 3 },
  { name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh", region: "north", adjustment: 1.004, nearby: ["lucknow", "agra", "allahabad", "varanasi", "jhansi"], tier: 3 },
  { name: "Agra", slug: "agra", state: "Uttar Pradesh", region: "north", adjustment: 1.003, nearby: ["delhi", "jaipur", "lucknow", "kanpur", "mathura"], tier: 3 },
  { name: "Ludhiana", slug: "ludhiana", state: "Punjab", region: "north", adjustment: 1.003, nearby: ["chandigarh", "amritsar", "jalandhar", "patiala", "delhi"], tier: 3 },
  { name: "Amritsar", slug: "amritsar", state: "Punjab", region: "north", adjustment: 1.004, nearby: ["ludhiana", "jalandhar", "chandigarh", "delhi", "patiala"], tier: 3 },
  { name: "Nashik", slug: "nashik", state: "Maharashtra", region: "west", adjustment: 1.001, nearby: ["mumbai", "pune", "aurangabad", "nagpur", "surat"], tier: 3 },
  { name: "Vadodara", slug: "vadodara", state: "Gujarat", region: "west", adjustment: 1.002, nearby: ["ahmedabad", "surat", "rajkot", "gandhinagar", "mumbai"], tier: 3 },
  { name: "Rajkot", slug: "rajkot", state: "Gujarat", region: "west", adjustment: 1.002, nearby: ["ahmedabad", "surat", "vadodara", "jamnagar", "bhavnagar"], tier: 3 },
  { name: "Ranchi", slug: "ranchi", state: "Jharkhand", region: "east", adjustment: 1.005, nearby: ["patna", "kolkata", "jamshedpur", "dhanbad", "bokaro"], tier: 3 },
  { name: "Guwahati", slug: "guwahati", state: "Assam", region: "east", adjustment: 1.006, nearby: ["shillong", "siliguri", "dibrugarh", "kolkata", "imphal"], tier: 3 },
  { name: "Bhubaneswar", slug: "bhubaneswar", state: "Odisha", region: "east", adjustment: 1.004, nearby: ["kolkata", "visakhapatnam", "rourkela", "cuttack", "puri"], tier: 3 },
  { name: "Dehradun", slug: "dehradun", state: "Uttarakhand", region: "north", adjustment: 1.004, nearby: ["delhi", "chandigarh", "haridwar", "mussoorie", "rishikesh"], tier: 3 },
  { name: "Raipur", slug: "raipur", state: "Chhattisgarh", region: "central", adjustment: 1.004, nearby: ["nagpur", "bhopal", "bilaspur", "indore", "jabalpur"], tier: 3 },
  { name: "Jodhpur", slug: "jodhpur", state: "Rajasthan", region: "north", adjustment: 1.004, nearby: ["jaipur", "udaipur", "ajmer", "bikaner", "barmer"], tier: 3 },
  { name: "Udaipur", slug: "udaipur", state: "Rajasthan", region: "north", adjustment: 1.004, nearby: ["jaipur", "jodhpur", "ahmedabad", "ajmer", "kota"], tier: 3 },
  { name: "Aurangabad", slug: "aurangabad", state: "Maharashtra", region: "west", adjustment: 1.002, nearby: ["pune", "mumbai", "nashik", "nagpur", "ahmednagar"], tier: 3 },
  { name: "Kolhapur", slug: "kolhapur", state: "Maharashtra", region: "west", adjustment: 1.001, nearby: ["pune", "mumbai", "belgaum", "sangli", "satara"], tier: 3 },
  { name: "Gwalior", slug: "gwalior", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["bhopal", "agra", "jhansi", "indore", "jabalpur"], tier: 3 },
  { name: "Jabalpur", slug: "jabalpur", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["bhopal", "indore", "nagpur", "raipur", "gwalior"], tier: 3 },
  { name: "Hubli", slug: "hubli", state: "Karnataka", region: "south", adjustment: 1.002, nearby: ["bangalore", "belgaum", "mangalore", "mysore", "goa"], tier: 3 },
  { name: "Belgaum", slug: "belgaum", state: "Karnataka", region: "south", adjustment: 1.002, nearby: ["hubli", "kolhapur", "goa", "pune", "bangalore"], tier: 3 },
  { name: "Tirupati", slug: "tirupati", state: "Andhra Pradesh", region: "south", adjustment: 1.001, nearby: ["chennai", "vijayawada", "bangalore", "nellore", "kadapa"], tier: 3 },
  { name: "Guntur", slug: "guntur", state: "Andhra Pradesh", region: "south", adjustment: 1.002, nearby: ["vijayawada", "hyderabad", "nellore", "ongole", "tirupati"], tier: 3 },
  { name: "Jamshedpur", slug: "jamshedpur", state: "Jharkhand", region: "east", adjustment: 1.005, nearby: ["ranchi", "kolkata", "dhanbad", "bokaro", "patna"], tier: 3 },
  { name: "Siliguri", slug: "siliguri", state: "West Bengal", region: "east", adjustment: 1.005, nearby: ["kolkata", "guwahati", "gangtok", "darjeeling", "jalpaiguri"], tier: 3 },
  { name: "Kannur", slug: "kannur", state: "Kerala", region: "south", adjustment: 0.999, nearby: ["kozhikode", "mangalore", "kochi", "thrissur", "kasaragod"], tier: 3 },
  { name: "Erode", slug: "erode", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["coimbatore", "salem", "trichy", "chennai", "tirupur"], tier: 3 },
  { name: "Tirunelveli", slug: "tirunelveli", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["madurai", "nagercoil", "tuticorin", "kochi", "chennai"], tier: 3 },
  { name: "Nagercoil", slug: "nagercoil", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["thiruvananthapuram", "tirunelveli", "madurai", "kochi", "tuticorin"], tier: 3 },
  { name: "Vellore", slug: "vellore", state: "Tamil Nadu", region: "south", adjustment: 0.998, nearby: ["chennai", "bangalore", "tirupati", "salem", "kanchipuram"], tier: 3 },
  { name: "Meerut", slug: "meerut", state: "Uttar Pradesh", region: "north", adjustment: 1.003, nearby: ["delhi", "noida", "ghaziabad", "muzaffarnagar", "hapur"], tier: 3 },
  { name: "Faridabad", slug: "faridabad", state: "Haryana", region: "north", adjustment: 1.003, nearby: ["delhi", "noida", "gurgaon", "palwal", "mathura"], tier: 3 },
  { name: "Ghaziabad", slug: "ghaziabad", state: "Uttar Pradesh", region: "north", adjustment: 1.003, nearby: ["delhi", "noida", "meerut", "faridabad", "hapur"], tier: 3 },
  { name: "Allahabad", slug: "allahabad", state: "Uttar Pradesh", region: "north", adjustment: 1.004, nearby: ["varanasi", "lucknow", "kanpur", "patna", "mirzapur"], tier: 3 },
  { name: "Jalandhar", slug: "jalandhar", state: "Punjab", region: "north", adjustment: 1.003, nearby: ["ludhiana", "amritsar", "chandigarh", "patiala", "kapurthala"], tier: 3 },
  { name: "Kota", slug: "kota", state: "Rajasthan", region: "north", adjustment: 1.003, nearby: ["jaipur", "udaipur", "ajmer", "bhopal", "gwalior"], tier: 3 },
  { name: "Shimla", slug: "shimla", state: "Himachal Pradesh", region: "north", adjustment: 1.005, nearby: ["chandigarh", "delhi", "dehradun", "manali", "kullu"], tier: 3 },
  { name: "Gorakhpur", slug: "gorakhpur", state: "Uttar Pradesh", region: "north", adjustment: 1.005, nearby: ["varanasi", "lucknow", "patna", "allahabad", "faizabad"], tier: 3 },
  { name: "Goa", slug: "goa", state: "Goa", region: "west", adjustment: 1, nearby: ["mumbai", "belgaum", "hubli", "kolhapur", "mangalore"], tier: 3 },
  { name: "Jammu", slug: "jammu", state: "Jammu & Kashmir", region: "north", adjustment: 1.006, nearby: ["srinagar", "chandigarh", "amritsar", "delhi", "shimla"], tier: 3 },
  { name: "Srinagar", slug: "srinagar", state: "Jammu & Kashmir", region: "north", adjustment: 1.006, nearby: ["jammu", "chandigarh", "delhi", "amritsar", "shimla"], tier: 3 },
  { name: "Gandhinagar", slug: "gandhinagar", state: "Gujarat", region: "west", adjustment: 1.002, nearby: ["ahmedabad", "vadodara", "surat", "rajkot", "mehsana"], tier: 3 },
  { name: "Ujjain", slug: "ujjain", state: "Madhya Pradesh", region: "central", adjustment: 1.003, nearby: ["indore", "bhopal", "dewas", "ratlam", "mandsaur"], tier: 3 },
  { name: "Bikaner", slug: "bikaner", state: "Rajasthan", region: "north", adjustment: 1.004, nearby: ["jaipur", "jodhpur", "jaisalmer", "sri-ganganagar", "nagaur"], tier: 3 },
  { name: "Ajmer", slug: "ajmer", state: "Rajasthan", region: "north", adjustment: 1.003, nearby: ["jaipur", "jodhpur", "udaipur", "pushkar", "kota"], tier: 3 }
];
const topCities = cities.filter((c) => c.tier <= 2);
cities.map((c) => c.slug);
function getCityBySlug(slug) {
  return cities.find((c) => c.slug === slug);
}
function getNearbyCities(slug) {
  const city = getCityBySlug(slug);
  if (!city) return [];
  return city.nearby.map((s) => getCityBySlug(s)).filter((c) => c !== void 0);
}
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const cityLinks = topCities.slice(0, 12);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-gray-300 mt-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- About --> <div> <h3 class="text-white font-bold text-lg mb-3">Gold Rates Live</h3> <p class="text-sm text-gray-400 leading-relaxed">
Live gold and silver prices updated every few minutes. Track 22K, 24K, and 18K gold rates across 80+ Indian cities.
          Data sourced from international markets and IBJA.
</p> </div> <!-- Quick Links --> <div> <h3 class="text-white font-semibold mb-3">Quick Links</h3> <ul class="space-y-2 text-sm"> <li><a href="/" class="hover:text-gold-400 transition-colors">Today's Gold Rate</a></li> <li><a href="/gold-rate-calculator/" class="hover:text-gold-400 transition-colors">Gold Calculator</a></li> <li><a href="/gold-price-history/" class="hover:text-gold-400 transition-colors">Price History</a></li> <li><a href="/silver-rate-today/" class="hover:text-gold-400 transition-colors">Silver Rate Today</a></li> <li><a href="/22-carat-gold-rate-today/" class="hover:text-gold-400 transition-colors">22K Gold Rate</a></li> <li><a href="/24-carat-gold-rate-today/" class="hover:text-gold-400 transition-colors">24K Gold Rate</a></li> <li><a href="/gold-rate-today-per-tola/" class="hover:text-gold-400 transition-colors">Gold Rate per Tola</a></li> <li><a href="/gold-price-prediction/" class="hover:text-gold-400 transition-colors">Gold Price Forecast</a></li> </ul> </div> <!-- Top Cities --> <div> <h3 class="text-white font-semibold mb-3">Gold Rate in Cities</h3> <ul class="space-y-2 text-sm"> ${cityLinks.map((city) => renderTemplate`<li> <a${addAttribute(`/gold-rate-today-in/${city.slug}/`, "href")} class="hover:text-gold-400 transition-colors">
Gold Rate in ${city.name} </a> </li>`)} </ul> </div> <!-- Info --> <div> <h3 class="text-white font-semibold mb-3">Information</h3> <ul class="space-y-2 text-sm"> <li><a href="/about/" class="hover:text-gold-400 transition-colors">About Us</a></li> </ul> <div class="mt-6"> <h4 class="text-white font-semibold mb-2 text-sm">Data Sources</h4> <p class="text-xs text-gray-500">
Gold prices based on international spot market (LBMA/COMEX), IBJA rates, and MCX data.
            Prices include 3% GST. Making charges are additional.
</p> </div> </div> </div> <div class="border-t border-gray-800 mt-8 pt-8"> <div class="text-center text-xs text-gray-500 space-y-2"> <p> <strong>Disclaimer:</strong> Gold prices shown are indicative and for informational purposes only.
          Actual prices may vary at jewelry stores due to making charges, design premiums, and local factors.
          We do not provide investment advice. Consult a financial advisor before making investment decisions.
</p> <p>&copy; ${currentYear} Gold Rates Live. All rights reserved.</p> </div> </div> </div> </footer>`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/Footer.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title,
    description,
    canonical,
    schemas = [],
    ogImage = "/og-image.jpg",
    ogType = "website",
    noindex = false
  } = Astro2.props;
  const siteUrl = "https://goldrateslive.com";
  const fullUrl = `${siteUrl}${canonical}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;
  return renderTemplate`<!-- Primary Meta Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="utf-8"><meta name="google-adsense-account" content="ca-pub-5473625991326486">${noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<link rel="canonical"${addAttribute(fullUrl, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:url"${addAttribute(fullUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(fullOgImage, "content")}><meta property="og:site_name" content="Gold Rates Live"><meta property="og:locale" content="en_IN"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"${addAttribute(fullUrl, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(fullOgImage, "content")}><!-- Additional SEO --><meta name="theme-color" content="#d4a843"><meta name="author" content="Gold Rates Live"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Preconnect --><link rel="preconnect" href="https://gold-api.com"><link rel="preconnect" href="https://pagead2.googlesyndication.com"><!-- JSON-LD Structured Data -->${schemas.map((schema) => renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))))}`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/SEOHead.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const props = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" dir="ltr"> <head>', '<!-- Google AdSense --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5473625991326486" crossorigin="anonymous"><\/script>', '</head> <body class="bg-gray-50 text-gray-900 min-h-screen flex flex-col"> ', ' <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6"> ', " </main> ", " <!-- AdSense auto ads push --> ", " </body> </html>"])), renderComponent($$result, "SEOHead", $$SEOHead, { ...props }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/Users/hyunyoung/projects/gold-rate-today/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/hyunyoung/projects/gold-rate-today/src/layouts/MainLayout.astro", void 0);
const $$BreadcrumbNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BreadcrumbNav;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="text-sm text-gray-500 mb-4"> <ol class="flex flex-wrap items-center gap-1"> <li> <a href="/" class="hover:text-gold-600 transition-colors">Home</a> </li> ${items.map((item, i) => renderTemplate`<li class="flex items-center gap-1"> <span class="text-gray-400">/</span> ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")} class="hover:text-gold-600 transition-colors">${item.label}</a>` : renderTemplate`<span class="text-gray-700 font-medium">${item.label}</span>`} </li>`)} </ol> </nav>`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/BreadcrumbNav.astro", void 0);
const $$AdUnit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AdUnit;
  const { slot, format = "responsive" } = Astro2.props;
  const sizeMap = {
    header: "min-h-[90px]",
    sidebar: "min-h-[250px]",
    "in-content": "min-h-[90px]",
    footer: "min-h-[90px]"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`ad-unit ${sizeMap[slot]} my-4 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden`, "class")}> <!-- Google AdSense Ad Unit
       Replace data-ad-client and data-ad-slot with your actual AdSense values --> <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5473625991326486" data-ad-slot="XXXXXXXXXX"${addAttribute(format === "responsive" ? "auto" : format === "horizontal" ? "horizontal" : "rectangle", "data-ad-format")} data-full-width-responsive="true"></ins> </div>`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/AdUnit.astro", void 0);
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FAQ;
  const { faqs, title = "Frequently Asked Questions about Gold Rates" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mt-10" itemscope itemtype="https://schema.org/FAQPage"> <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">${title}</h2> <div class="space-y-3"> ${faqs.map((faq, i) => renderTemplate`<details class="group bg-white border border-gray-200 rounded-lg overflow-hidden" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"> <summary class="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors list-none"> <h3 class="font-medium text-gray-900 text-sm sm:text-base pr-4" itemprop="name">${faq.question}</h3> <svg class="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <div class="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> <p itemprop="text">${faq.answer}</p> </div> </details>`)} </div> </section>`;
}, "/Users/hyunyoung/projects/gold-rate-today/src/components/FAQ.astro", void 0);
const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
function formatINR(amount) {
  return inrFormatter.format(amount);
}
function formatUSD(amount) {
  return usdFormatter.format(amount);
}
function formatPercent(n) {
  const sign = n >= 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}
function ozToGram(pricePerOz) {
  return pricePerOz / 31.1035;
}
function gramToTola(pricePerGram) {
  return pricePerGram * 11.6638;
}
function gramToSovereign(pricePerGram) {
  return pricePerGram * 8;
}
function karatMultiplier(karat) {
  return karat / 24;
}
function getKaratPricesINR(prices) {
  const purePerGram = ozToGram(prices.xauInr);
  return {
    k24: Math.round(purePerGram),
    k22: Math.round(purePerGram * karatMultiplier(22)),
    k18: Math.round(purePerGram * karatMultiplier(18)),
    k14: Math.round(purePerGram * karatMultiplier(14))
  };
}
function getKaratPricesUSD(prices) {
  const purePerGram = ozToGram(prices.xauUsd);
  return {
    k24: Number(purePerGram.toFixed(2)),
    k22: Number((purePerGram * karatMultiplier(22)).toFixed(2)),
    k18: Number((purePerGram * karatMultiplier(18)).toFixed(2)),
    k14: Number((purePerGram * karatMultiplier(14)).toFixed(2))
  };
}
function getCityGoldData(city, prices) {
  const basePerGram = ozToGram(prices.xauInr);
  const adjustedPerGram = basePerGram * city.adjustment;
  const k24 = Math.round(adjustedPerGram);
  const k22 = Math.round(adjustedPerGram * karatMultiplier(22));
  const k18 = Math.round(adjustedPerGram * karatMultiplier(18));
  return {
    city,
    k24PerGram: k24,
    k22PerGram: k22,
    k18PerGram: k18,
    k24Per10g: k24 * 10,
    k22Per10g: k22 * 10,
    k18Per10g: k18 * 10,
    k24PerTola: Math.round(gramToTola(adjustedPerGram)),
    k22PerTola: Math.round(gramToTola(adjustedPerGram * karatMultiplier(22))),
    k24PerSovereign: Math.round(gramToSovereign(adjustedPerGram)),
    k22PerSovereign: Math.round(
      gramToSovereign(adjustedPerGram * karatMultiplier(22))
    )
  };
}
function getSilverPricesINR(prices) {
  const perGram = ozToGram(prices.xagUsd * prices.usdInr);
  return {
    perGram: Math.round(perGram),
    per10g: Math.round(perGram * 10),
    per100g: Math.round(perGram * 100),
    perKg: Math.round(perGram * 1e3)
  };
}
function generateHistoricalData(currentPriceUsd, days = 30) {
  const data = [];
  const now = /* @__PURE__ */ new Date();
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const variance = Math.sin(i * 0.7) * 0.02 + Math.cos(i * 0.3) * 0.01;
    const price = currentPriceUsd * (1 + variance);
    data.push({
      date: date.toISOString().split("T")[0],
      price: Number(price.toFixed(2))
    });
  }
  return data;
}
let cachedPrices = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1e3;
const FALLBACK_PRICES = {
  xauUsd: 3050,
  xauInr: 254800,
  usdInr: 83.5,
  changeUsd: 12.5,
  changePct: 0.41,
  xagUsd: 33.5,
  silverChangeUsd: 0.25,
  silverChangePct: 0.75,
  timestamp: Date.now()
};
async function fetchFromGoldApi() {
  try {
    const [goldRes, silverRes, forexRes] = await Promise.all([
      fetch("https://gold-api.com/api/XAU/USD"),
      fetch("https://gold-api.com/api/XAG/USD"),
      fetch("https://gold-api.com/api/USD/INR")
    ]);
    if (!goldRes.ok || !silverRes.ok || !forexRes.ok) return null;
    const gold = await goldRes.json();
    const silver = await silverRes.json();
    const forex = await forexRes.json();
    const usdInr = forex.price || 83.5;
    const xauUsd = gold.price;
    const changeUsd = gold.ch || 0;
    const changePct = gold.chp || 0;
    return {
      xauUsd,
      xauInr: xauUsd * usdInr,
      usdInr,
      changeUsd,
      changePct,
      xagUsd: silver.price,
      silverChangeUsd: silver.ch || 0,
      silverChangePct: silver.chp || 0,
      timestamp: Date.now()
    };
  } catch {
    return null;
  }
}
async function getGoldPrices() {
  const now = Date.now();
  if (cachedPrices && now - cacheTimestamp < CACHE_TTL) {
    return cachedPrices;
  }
  const prices = await fetchFromGoldApi();
  if (prices) {
    cachedPrices = prices;
    cacheTimestamp = now;
    return prices;
  }
  return cachedPrices || FALLBACK_PRICES;
}
function getTodayString() {
  return (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
const SITE_URL = "https://goldrateslive.com";
const SITE_NAME = "Gold Rates Live";
function generateWebPageSchema(title, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    }
  };
}
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };
}
function generateGoldPriceSchema(prices, currency, pricePerGram, cityName) {
  const location = cityName ? ` in ${cityName}` : "";
  return {
    "@context": "https://schema.org",
    "@type": "ExchangeRateSpecification",
    currency: "XAU",
    currentExchangeRate: {
      "@type": "UnitPriceSpecification",
      price: pricePerGram,
      priceCurrency: currency,
      unitCode: "GRM",
      name: `Gold Price per Gram${location}`
    },
    exchangeRateSpread: prices.changePct
  };
}
export {
  $$MainLayout as $,
  getKaratPricesINR as a,
  generateWebPageSchema as b,
  generateBreadcrumbSchema as c,
  generateFAQSchema as d,
  $$AdUnit as e,
  formatINR as f,
  getGoldPrices as g,
  $$BreadcrumbNav as h,
  gramToTola as i,
  gramToSovereign as j,
  $$FAQ as k,
  formatUSD as l,
  generateHistoricalData as m,
  getCityBySlug as n,
  ozToGram as o,
  getCityGoldData as p,
  getNearbyCities as q,
  generateGoldPriceSchema as r,
  cities as s,
  topCities as t,
  getSilverPricesINR as u,
  formatPercent as v,
  getTodayString as w,
  getKaratPricesUSD as x
};
