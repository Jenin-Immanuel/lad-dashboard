"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaBrain } from "react-icons/fa6";

const data = [
  { name: "Focused", value: 40 },
  { name: "Happy", value: 30 },
  { name: "Calm", value: 20 },
  { name: "Energetic", value: 10 },
];
const EmotionsPieChart = () => {
  // Custom colors for each emotion
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="bg-white col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FaBrain /> Emotions
        </h3>
      </div>
      <div className="h-64 px-4 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={70} height={70}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export { EmotionsPieChart };
