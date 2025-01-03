"use client";

import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { GaugeComponent } from "react-gauge-component";
const data = [
  {
    feature: "Tracking",
    mobile: 15,
    desktop: 110,
    max: 150,
  },
  {
    feature: "Builder",
    mobile: 130,
    desktop: 90,
    max: 150,
  },
  {
    feature: "Schedule",
    mobile: 86,
    desktop: 130,
    max: 150,
  },
  {
    feature: "AI Train",
    mobile: 125,
    desktop: 40,
    max: 150,
  },
  {
    feature: "Interval",
    mobile: 148,
    desktop: 90,
    max: 150,
  },
];

export const UsageRadar = () => {
  return (
    <div className="bg-white col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiEye /> Cognitive Load Estimation
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
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
            value={50}
            labels={{
              valueLabel: {
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
