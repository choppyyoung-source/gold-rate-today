import type { FAQItem } from "../utils/schema";

export const mainPageFAQs: FAQItem[] = [
  {
    question: "What is the gold rate today in India?",
    answer:
      "The gold rate today in India varies by city and karat. 24 karat (pure) gold is priced based on the international spot price converted to INR, while 22 karat gold (commonly used in jewelry) is approximately 91.67% of the 24K price. Prices are updated every few minutes based on live market data from IBJA and international exchanges.",
  },
  {
    question: "Why is gold price different in different cities in India?",
    answer:
      "Gold prices vary across Indian cities due to several factors: transportation costs (port cities like Chennai and Mumbai typically have lower prices), local taxes and duties, demand-supply dynamics in local markets, and making charges by local jewelers. The base price set by IBJA is the same, but these additional factors create small variations of 0.1% to 0.6% between cities.",
  },
  {
    question: "What is the difference between 22K and 24K gold?",
    answer:
      "24 karat (24K) gold is 99.9% pure gold, making it the purest form available. It is softer and typically used for coins and bars. 22 karat (22K) gold contains 91.67% pure gold mixed with 8.33% other metals like copper or silver, making it harder and more suitable for jewelry. 22K gold is also known as 916 gold (916 parts per 1000 are pure gold).",
  },
  {
    question: "What is the best time to buy gold in India?",
    answer:
      "Gold prices tend to be lower during off-season months (typically July-August) when wedding and festival demand is low. Historically, buying during market dips or corrections can offer better value. Consider buying during Akshaya Tritiya or Dhanteras as jewelers offer special discounts. However, gold is a long-term investment, so timing the market is less important than consistent investing.",
  },
  {
    question: "How is the gold rate determined in India?",
    answer:
      "The gold rate in India is determined by the India Bullion and Jewellers Association (IBJA), which sets the opening and closing rates daily based on the international spot price of gold (London Bullion Market Association - LBMA), the USD/INR exchange rate, customs duty (currently 15%), GST (3%), and local demand-supply conditions.",
  },
  {
    question: "What is making charge on gold jewelry?",
    answer:
      "Making charges are the labor and craftsmanship costs charged by jewelers for converting raw gold into jewelry. These charges typically range from 8% to 35% of the gold value, depending on the design complexity, brand, and type of jewelry. Hand-crafted and intricate designs carry higher making charges than machine-made pieces.",
  },
  {
    question: "Is it better to buy gold jewelry or gold coins?",
    answer:
      "Gold coins and bars have lower premiums (3-5% over spot price) compared to jewelry (8-35% making charges), making them better for pure investment. However, jewelry serves both aesthetic and investment purposes. For investment, consider Sovereign Gold Bonds (SGBs) or Gold ETFs, which offer additional benefits like 2.5% annual interest (SGBs) and no storage concerns.",
  },
  {
    question: "What is 916 gold?",
    answer:
      "916 gold refers to 22 karat gold, where 916 out of 1000 parts are pure gold (91.6%). This is the most popular purity for gold jewelry in India. The BIS (Bureau of Indian Standards) hallmark '916' certifies this purity level. Other common hallmarks include 750 (18K), 585 (14K), and 999 (24K).",
  },
  {
    question: "How much GST is charged on gold in India?",
    answer:
      "GST on gold in India is 3% on the value of gold, plus 5% GST on making charges. For example, if you buy gold jewelry worth Rs 50,000 with Rs 5,000 making charges, the GST would be Rs 1,500 (3% of Rs 50,000) + Rs 250 (5% of Rs 5,000) = Rs 1,750 total GST.",
  },
  {
    question: "What factors affect gold prices globally?",
    answer:
      "Global gold prices are influenced by: US Dollar strength (inverse relationship), inflation rates and expectations, central bank monetary policies and interest rates, geopolitical tensions and economic uncertainty, central bank gold reserves and purchases, demand from major consumers (India, China), mining supply, and ETF inflows/outflows. Gold is traditionally seen as a safe-haven asset during economic instability.",
  },
];

export function getCityFAQs(cityName: string, stateName: string): FAQItem[] {
  return [
    {
      question: `What is the gold rate today in ${cityName}?`,
      answer: `The gold rate in ${cityName} today is updated in real-time based on international gold prices and the USD/INR exchange rate. ${cityName}, ${stateName} follows the IBJA standard rates with minor adjustments for local market conditions and transportation costs. Check the table above for the latest 22K and 24K gold prices per gram and per 10 grams.`,
    },
    {
      question: `Why is the gold rate in ${cityName} different from other cities?`,
      answer: `Gold prices in ${cityName} may differ slightly from other Indian cities due to local taxes, transportation costs from the nearest port, demand-supply dynamics in ${stateName}, and local jeweler premiums. Port cities generally have lower gold prices due to reduced transportation costs.`,
    },
    {
      question: `Where can I buy gold in ${cityName}?`,
      answer: `You can buy gold in ${cityName} from authorized jewelers, bank branches (gold coins/bars), online platforms like MMTC-PAMP, or through digital gold apps. Always ensure the gold is BIS hallmarked (916 for 22K or 999 for 24K) for quality assurance. Major jeweler chains like Tanishq, Malabar Gold, Kalyan Jewellers, and Joyalukkas have stores in ${cityName}.`,
    },
    {
      question: `Is gold cheaper in ${cityName} compared to other cities?`,
      answer: `Gold prices in ${cityName} are very close to the national average, with variations of less than 0.5%. The base gold rate from IBJA is the same across India, but local factors like proximity to ports, state-level charges, and local demand create minor differences. Compare the rates table above with other cities to see the exact difference.`,
    },
    {
      question: `What is the 22 carat gold rate in ${cityName} today?`,
      answer: `The 22 carat (22K/916) gold rate in ${cityName} today is available in the price table above. 22K gold is the most popular choice for jewelry in ${stateName} and across India. The price is calculated as 91.67% of the 24K pure gold rate, adjusted for ${cityName}'s local market conditions.`,
    },
  ];
}
