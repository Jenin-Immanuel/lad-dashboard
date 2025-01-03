"use client";

import React from "react";
import { FiUser } from "react-icons/fi";
import { ResponsiveContainer } from "recharts";

import { ActivityCalendar } from "react-activity-calendar";

const data = [
  {
    date: "2025-01-01",
    count: 16,
    level: 3,
  },
  {
    date: "2025-06-01",
    count: 2,
    level: 1,
  },
  {
    date: "2025-07-01",
    count: 16,
    level: 4,
  },
  {
    date: "2025-12-31",
    count: 16,
    level: 3,
  },
];

export const ActivityGraph = () => {
  return (
    <div className="bg-white col-span-12 overflow-hidden rounded border border-stone-300">
      <div className="px-4 pt-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Activity
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="flex items-center justify-center"
        >
          <ActivityCalendar
            data={data}
            theme={{
              light: ["#eee", "violet"],
              dark: ["white", "rgb(214, 16, 174)"],
            }}
            showWeekdayLabels={[
              "mon",
              "tue",
              "wed",
              "thu",
              "fri",
              "sat",
              "sun",
            ]}
            colorScheme="light"
            blockSize={15}
            blockMargin={6}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
};
