"use client";
import React from "react";
import { TopBar } from "./TopBar";
import { Grid } from "./Grid";

export const Dashboard = () => {
  return (
    <div className="bg-gray rounded-lg pb-4">
      <TopBar className="mt-2" />
      <Grid />
    </div>
  );
};
