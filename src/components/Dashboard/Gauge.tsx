import React from "react";
import { PieChart, Pie, Cell } from "recharts";

interface GaugeChartProps {
  value: number;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value }) => {
  const data = [{ value }, { value: 100 - value }];

  const getGradientColor = (value: number): string => {
    if (value <= 50) {
      const green = 255;
      const red = Math.floor((value / 50) * 255);
      return `rgb(${red}, ${green}, 0)`;
    } else {
      const red = 255;
      const green = Math.floor(((100 - value) / 50) * 255);
      return `rgb(${red}, ${green}, 0)`;
    }
  };

  const COLORS = [getGradientColor(value), "#EEE"];
  const needleRotation = (value / 100) * 180;

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <PieChart width={300} height={150}>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      {/* Needle */}
      <div
        style={{
          position: "absolute",
          width: "2px",
          height: "100px",
          backgroundColor: "black",
          transform: `rotate(${needleRotation}deg)`,
          transformOrigin: "bottom center",
          top: "75px",
          left: "calc(50% - 1px)",
        }}
      ></div>
      {/* Value Label */}
      <div style={{ marginTop: "20px", fontSize: "16px", fontWeight: "bold" }}>
        {value}%
      </div>
    </div>
  );
};

export { GaugeChart };
