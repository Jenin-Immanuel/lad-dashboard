"use client";
import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { FaEye } from "react-icons/fa";
const numberOfEntries = 36 * 3;
const generateIndividualVideoData = () => {
  const startTime = new Date("2025-01-01T00:00:00");
  const entries = [];
  for (let i = 0; i <= numberOfEntries; i++) {
    const timestamp = new Date(startTime.getTime() + i * 5000).toISOString();
    const value = Math.floor(Math.random() * 100);
    entries.push({ timestamp, value });
  }
  return entries;
};

const numberOfVideos = 20;
const generateGroupVideoData = () => {
  const entries = [];
  for (let i = 0; i < numberOfVideos; i++) {
    entries.push({
      videoName: `Video ${i + 1}`,
      value: Math.floor(Math.random() * 100),
    });
  }
  return entries;
};

interface BlinkRateGraphProps {
  graphType: "individual" | "group";
}

const BlinkRateGraph = ({ graphType }: BlinkRateGraphProps) => {
  const originalData =
    graphType === "individual"
      ? generateIndividualVideoData()
      : generateGroupVideoData();
  const [data, setData] = useState(originalData);

  useEffect(() => {
    if (graphType === "group") {
      handleVideoFilter("20");
    }
  }, []);

  const formatRelativeTime = (timestamp: string) => {
    const startTime = new Date((data[0] as { timestamp: string }).timestamp);
    const currentTime = new Date(timestamp);
    const diffMs = currentTime.getTime() - startTime.getTime();
    const minutes = Math.floor(diffMs / 60000);
    const seconds = Math.floor((diffMs % 60000) / 1000);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleVideoFilter = (value: string) => {
    const numberOfVideos = parseInt(value);
    const newData = originalData.slice(-numberOfVideos);
    setData(newData);
  };
  return (
    <div className="bg-white col-span-8 overflow-hidden rounded border border-stone-300">
      <div className="p-4 w-full flex justify-between items-center">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FaEye /> Blink Rate
        </h3>
        {graphType === "group" && (
          <Select onValueChange={handleVideoFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select number of lectures" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5" defaultChecked>
                Last 5 lectures
              </SelectItem>
              <SelectItem value="10">Last 10 lectures</SelectItem>
              <SelectItem value="20">Last 20 lectures</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="h-64 px-4 mb-12">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {graphType === "individual" && (
              <XAxis
                dataKey="timestamp"
                tickFormatter={formatRelativeTime}
                interval={numberOfEntries / 6}
                label={{
                  value: "Time (mm:ss)",
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />
            )}
            <YAxis
              domain={[0, 100]}
              label={{
                value: "Blinks per minute",
                angle: -90,
                position: "insideLeft",
              }}
            />
            {graphType === "individual" && (
              <Tooltip
                labelFormatter={(timestamp) =>
                  `Time: ${formatRelativeTime(timestamp)}`
                }
                formatter={(value) => `${value}`}
              />
            )}
            {graphType === "group" && (
              <Tooltip
                labelFormatter={(lectureName) => `Name: ${lectureName}`}
                formatter={(value) => `${value}`}
              />
            )}
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export { BlinkRateGraph };
