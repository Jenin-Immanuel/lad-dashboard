"use client";

import React from "react";
import { FaBrain } from "react-icons/fa6";
import { ResponsiveContainer } from "recharts";
import { GaugeComponent } from "react-gauge-component";

interface CognitiveLoadEstimationGraphProps {
  value: number;
}

export const CognitiveLoadEstimationGraph = ({
  value,
}: CognitiveLoadEstimationGraphProps) => {
  return (
    <div className="bg-white col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FaBrain /> Cognitive Load Estimation
        </h3>
      </div>

      <div className="h-64 px-4 flex items-center justify-center">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="flex items-center justify-center"
        >
          <GaugeComponent
            type="semicircle"
            arc={{
              subArcs: [
                {
                  limit: 20,
                  color: "#5BE12C",
                  showTick: true,
                },
                {
                  limit: 40,
                  color: "#F5CD19",
                  showTick: true,
                },
                {
                  limit: 60,
                  color: "#F58B19",
                  showTick: true,
                },
                {
                  limit: 100,
                  color: "#EA4228",
                  showTick: true,
                },
              ],
            }}
            value={value}
            labels={{
              valueLabel: {
                hide: true,
                style: {
                  textShadow: "none",
                  fill: "#000000",
                },
              },
            }}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
};
