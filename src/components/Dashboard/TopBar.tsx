import { UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import React from "react";

export const TopBar = ({ className }: { className?: string }) => {
  const { user } = useUser();
  const userName = user?.firstName ?? "...";
  return (
    <div
      className={cn("border-b px-4 mb-4 mt-2 pb-4 border-stone-200", className)}
    >
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">
            🚀{" "}
            {dayjs().hour() < 12
              ? "Good Morning"
              : dayjs().hour() < 17
              ? "Good Afternoon"
              : "Good Evening"}
            , {userName}
          </span>
          <span className="text-xs block text-stone-500">
            {dayjs().format("dddd, MMM D, YYYY")}
          </span>
        </div>
        <div className="h-4 w-4 flex justify-center items-center">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
