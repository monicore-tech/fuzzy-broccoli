"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { time: "00:00", value: 12.1 },
  { time: "04:00", value: 12.3 },
  { time: "08:00", value: 12.2 },
  { time: "12:00", value: 12.5 },
  { time: "16:00", value: 12.4 },
  { time: "20:00", value: 12.6 },
  { time: "23:59", value: 12.45 },
];

export const YieldChart = () => {
  return (
    <div className="h-[120px] w-full mt-6 -mx-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f5d4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00f5d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-surface-card border border-hairline p-2 rounded-md shadow-xl">
                    <p className="text-[10px] font-mono font-bold text-primary">
                      {payload[0].value}%
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00f5d4"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#yieldGradient)"
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
