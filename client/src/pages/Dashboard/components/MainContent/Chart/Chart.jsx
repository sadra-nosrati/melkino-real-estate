import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

function Chart({ active }) {
  const fullData = [
    { name: "فروردین", price: 60 },
    { name: "اردیبهشت", price: 70 },
    { name: "خرداد", price: 80 },
    { name: "تیر", price: 90 },
    { name: "مرداد", price: 69 },
    { name: "شهریور", price: 92 },
    { name: "مهر", price: 58 },
    { name: "آبان", price: 105 },
    { name: "آذر", price: 180 },
    { name: "دی", price: 140 },
    { name: "بهمن", price: 120 },
    { name: "اسفند", price: 110 },
  ];

  const monthsMap = {
    1: 1,
    6: 6,
    12: 12,
  };

  const data = fullData.slice(-monthsMap[active]);

  return (
    <div className="w-full aspect-[1.6] rounded-2xl bg-[#1B1B1B] mt-20 h-100">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 10, left: -10 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />

          <XAxis
            dataKey="name"
            tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: "rgba(255,255,255,0.4)",
              fontSize: 12,
              dx: -20,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "rgba(242,202,80,0.06)" }}
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;

              const value = payload[0].value;

              const formatted =
                value >= 100
                  ? `${value} میلیارد تومان`
                  : `${value} میلیون تومان`;

              return (
                <div className="rounded-xl border border-[#F2CA50]/20 bg-[#1C1B1B] px-4 py-2 text-sm text-white shadow-lg">
                  <div className="text-[#F2CA50] mb-1">{label}</div>
                  <div>{formatted}</div>
                </div>
              );
            }}
          />

          <Bar
            dataKey="price"
            fill="#F2CA5099"
            radius={[10, 10, 0, 0]}
            barSize={200}
            animationDuration={900}
            animationEasing="ease"
            activeBar={{ fill: "#F2CA50" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
