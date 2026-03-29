import { useEffect, useRef, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  type ChartConfiguration,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip
);

interface PricePoint {
  date: string;
  price: number;
}

interface Props {
  data: PricePoint[];
  currency?: string;
  title?: string;
}

export default function PriceChart({
  data,
  currency = "USD",
  title = "Gold Price History",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [period, setPeriod] = useState<"7d" | "30d">("30d");

  const filteredData =
    period === "7d" ? data.slice(-7) : data;

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(212, 168, 67, 0.3)");
    gradient.addColorStop(1, "rgba(212, 168, 67, 0.02)");

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels: filteredData.map((d) => {
          const date = new Date(d.date);
          return date.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
          });
        }),
        datasets: [
          {
            label: `Gold Price (${currency})`,
            data: filteredData.map((d) => d.price),
            borderColor: "#b8860b",
            backgroundColor: gradient,
            borderWidth: 2,
            pointRadius: period === "7d" ? 4 : 2,
            pointHoverRadius: 6,
            pointBackgroundColor: "#b8860b",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            bodyColor: "#fff",
            padding: 10,
            displayColors: false,
            callbacks: {
              label: (ctx) => {
                const val = ctx.parsed.y ?? 0;
                return currency === "INR"
                  ? `₹${val.toLocaleString("en-IN")}`
                  : `$${val.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
              },
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 11 }, maxRotation: 45 },
          },
          y: {
            grid: { color: "rgba(0,0,0,0.05)" },
            ticks: {
              font: { size: 11 },
              callback: (val: string | number) =>
                currency === "INR"
                  ? `₹${Number(val).toLocaleString("en-IN")}`
                  : `$${Number(val).toLocaleString()}`,
            },
          },
        },
      },
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      chartRef.current?.destroy();
    };
  }, [filteredData, currency, period]);

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-1">
          {(["7d", "30d"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                period === p
                  ? "bg-amber-700 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {p === "7d" ? "7 Days" : "30 Days"}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-4" style={{ height: "320px" }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
