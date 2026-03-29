import { useState, useMemo } from "react";

interface Props {
  k24PricePerGram: number;
  k22PricePerGram: number;
  k18PricePerGram: number;
}

export default function Calculator({
  k24PricePerGram,
  k22PricePerGram,
  k18PricePerGram,
}: Props) {
  const [weight, setWeight] = useState(10);
  const [karat, setKarat] = useState<"24" | "22" | "18">("22");
  const [includeGst, setIncludeGst] = useState(true);
  const [makingPct, setMakingPct] = useState(12);

  const pricePerGram = karat === "24" ? k24PricePerGram : karat === "22" ? k22PricePerGram : k18PricePerGram;

  const calculation = useMemo(() => {
    const goldValue = pricePerGram * weight;
    const makingCharge = goldValue * (makingPct / 100);
    const subtotal = goldValue + makingCharge;
    const gstOnGold = includeGst ? goldValue * 0.03 : 0;
    const gstOnMaking = includeGst ? makingCharge * 0.05 : 0;
    const total = subtotal + gstOnGold + gstOnMaking;

    return { goldValue, makingCharge, gstOnGold, gstOnMaking, subtotal, total };
  }, [weight, pricePerGram, includeGst, makingPct]);

  const fmt = (n: number) =>
    `₹${Math.round(n).toLocaleString("en-IN")}`;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Gold Rate Calculator</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight (grams)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Math.max(0.1, Number(e.target.value)))}
            min="0.1"
            step="0.5"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
          />
        </div>

        {/* Karat */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gold Purity
          </label>
          <select
            value={karat}
            onChange={(e) => setKarat(e.target.value as "24" | "22" | "18")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
          >
            <option value="24">24 Karat (999 - Pure Gold)</option>
            <option value="22">22 Karat (916 - Jewelry Gold)</option>
            <option value="18">18 Karat (750)</option>
          </select>
        </div>

        {/* Making Charges */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Making Charges (%)
          </label>
          <input
            type="number"
            value={makingPct}
            onChange={(e) => setMakingPct(Math.max(0, Math.min(50, Number(e.target.value))))}
            min="0"
            max="50"
            step="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
          />
        </div>

        {/* GST Toggle */}
        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer py-2">
            <input
              type="checkbox"
              checked={includeGst}
              onChange={(e) => setIncludeGst(e.target.checked)}
              className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
            />
            <span className="text-sm font-medium text-gray-700">Include GST (3% on gold + 5% on making)</span>
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Gold Value ({weight}g x {fmt(pricePerGram)})</span>
          <span className="font-medium text-gray-900">{fmt(calculation.goldValue)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Making Charges ({makingPct}%)</span>
          <span className="font-medium text-gray-900">{fmt(calculation.makingCharge)}</span>
        </div>
        {includeGst && (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">GST on Gold (3%)</span>
              <span className="font-medium text-gray-900">{fmt(calculation.gstOnGold)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">GST on Making (5%)</span>
              <span className="font-medium text-gray-900">{fmt(calculation.gstOnMaking)}</span>
            </div>
          </>
        )}
        <div className="flex justify-between text-base pt-2 border-t border-amber-300">
          <span className="font-bold text-gray-900">Estimated Total</span>
          <span className="font-bold text-amber-800 text-lg">{fmt(calculation.total)}</span>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        * This is an estimated price. Actual price may vary based on jeweler, design, and local factors.
      </p>
    </div>
  );
}
