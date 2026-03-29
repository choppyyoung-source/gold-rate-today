import { useEffect, useState } from "react";

interface GoldData {
  xauUsd: number;
  xauInr: number;
  usdInr: number;
  changeUsd: number;
  changePct: number;
  xagUsd: number;
  silverChangePct: number;
}

const FALLBACK: GoldData = {
  xauUsd: 3050,
  xauInr: 254675,
  usdInr: 83.5,
  changeUsd: 12.5,
  changePct: 0.41,
  xagUsd: 33.5,
  silverChangePct: 0.75,
};

function ozToGram(price: number) {
  return price / 31.1035;
}

function fmt(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

function fmtUsd(n: number) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LivePriceLoader() {
  const [data, setData] = useState<GoldData | null>(null);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const [goldRes, silverRes, forexRes] = await Promise.all([
          fetch("https://gold-api.com/api/XAU/USD"),
          fetch("https://gold-api.com/api/XAG/USD"),
          fetch("https://gold-api.com/api/USD/INR"),
        ]);

        if (!goldRes.ok || !silverRes.ok || !forexRes.ok) {
          setData(FALLBACK);
          return;
        }

        const gold = await goldRes.json() as { price: number; ch?: number; chp?: number };
        const silver = await silverRes.json() as { price: number; chp?: number };
        const forex = await forexRes.json() as { price: number };

        const usdInr = forex.price || 83.5;
        setData({
          xauUsd: gold.price,
          xauInr: gold.price * usdInr,
          usdInr,
          changeUsd: gold.ch || 0,
          changePct: gold.chp || 0,
          xagUsd: silver.price,
          silverChangePct: silver.chp || 0,
        });
      } catch {
        setData(FALLBACK);
      }
    }
    fetchPrices();
  }, []);

  if (!data) {
    return (
      <div className="text-center py-8 text-gray-500 animate-pulse">
        Loading live gold prices...
      </div>
    );
  }

  const k24 = Math.round(ozToGram(data.xauInr));
  const k22 = Math.round(ozToGram(data.xauInr) * 22 / 24);
  const k18 = Math.round(ozToGram(data.xauInr) * 18 / 24);
  const isUp = data.changePct >= 0;
  const pctStr = (isUp ? "+" : "") + data.changePct.toFixed(2) + "%";

  return (
    <>
      {/* Hero Price Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[
          { label: "24K Pure Gold", price: k24, usd: ozToGram(data.xauUsd) },
          { label: "22K (916) Gold", price: k22, usd: ozToGram(data.xauUsd) * 22 / 24 },
          { label: "18K (750) Gold", price: k18, usd: ozToGram(data.xauUsd) * 18 / 24 },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-xl p-5 border border-yellow-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-full">{item.label}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isUp ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
                {isUp ? "▲" : "▼"} {pctStr}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{fmt(item.price)}</p>
              <p className="text-xs text-gray-500 mt-1">per gram</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Per 10 grams</span>
                <span className="font-semibold text-gray-900">{fmt(item.price * 10)}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-500">Per gram (USD)</span>
                <span className="font-medium text-gray-600">{fmtUsd(item.usd)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* International Price Bar */}
      <div className="mt-4 bg-white/80 rounded-lg px-4 py-3 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm border border-yellow-100">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">XAU/USD:</span>
          <span className="font-bold text-gray-900">{fmtUsd(data.xauUsd)}/oz</span>
          <span className={`font-medium ${isUp ? "text-green-600" : "text-red-600"}`}>
            {isUp ? "+" : ""}{fmtUsd(data.changeUsd)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">USD/INR:</span>
          <span className="font-semibold text-gray-900">{data.usdInr.toFixed(2)}</span>
        </div>
      </div>

      {/* Weight Table */}
      <div className="mt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Gold Rate Today - Weight Wise Price</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-yellow-800 text-white">
                <th className="px-3 py-3 text-left font-semibold rounded-tl-lg">Weight</th>
                <th className="px-3 py-3 text-right font-semibold">24K Gold</th>
                <th className="px-3 py-3 text-right font-semibold">22K Gold</th>
                <th className="px-3 py-3 text-right font-semibold rounded-tr-lg">18K Gold</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 5, 8, 10, 20, 50, 100].map((w, i) => (
                <tr key={w} className={i % 2 === 0 ? "bg-white" : "bg-yellow-50/50"}>
                  <td className="px-3 py-2.5 font-medium text-gray-700 border-b border-gray-100">{w} gram{w > 1 ? "s" : ""}</td>
                  <td className="px-3 py-2.5 text-right font-semibold text-gray-900 border-b border-gray-100">{fmt(k24 * w)}</td>
                  <td className="px-3 py-2.5 text-right font-semibold text-gray-900 border-b border-gray-100">{fmt(k22 * w)}</td>
                  <td className="px-3 py-2.5 text-right font-medium text-gray-700 border-b border-gray-100">{fmt(k18 * w)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">* Prices are indicative and exclude making charges (8-35%) and GST (3%).</p>
      </div>
    </>
  );
}
