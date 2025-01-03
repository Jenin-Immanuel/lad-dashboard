"use client";

import { BlinkRateGraph } from "@/components/Dashboard/BlinkRateGraph";
import { PupilDilationGraph } from "@/components/Dashboard/PupilDilationGraph";
import { CognitiveLoadEstimationGraph } from "@/components/Dashboard/CognitiveLoadEstimationGraph";
import React from "react";
import { EmotionsPieChart } from "@/components/Dashboard/EmotionGraph";
export function CoursesDashboard() {
  return (
    <div className="px-4 grid gap-3 grid-cols-12 bg-gray mt-8">
      <CognitiveLoadEstimationGraph value={75} />
      <PupilDilationGraph graphType="individual" />
      <BlinkRateGraph graphType="individual" />
      <EmotionsPieChart />
    </div>
  );
}
