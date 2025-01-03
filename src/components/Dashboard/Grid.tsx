import React from "react";
import { ActivityGraph } from "./ActivityGraph";
import { PupilDilationGraph } from "./PupilDilationGraph";
import { CognitiveLoadEstimationGraph } from "./CognitiveLoadEstimationGraph";
import { BlinkRateGraph } from "./BlinkRateGraph";
import { EmotionsPieChart } from "./EmotionGraph";
import { OverallMarks } from "./OverallMarks";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12 bg-gray">
      <ActivityGraph />
      <PupilDilationGraph graphType="group" />
      <CognitiveLoadEstimationGraph value={50} />
      <EmotionsPieChart />
      <BlinkRateGraph graphType="group" />
      <OverallMarks />
    </div>
  );
};
