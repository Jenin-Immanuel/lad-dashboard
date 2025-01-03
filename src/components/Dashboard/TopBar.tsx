import React from "react";

export const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">
            🚀 Good morning, User!
          </span>
          <span className="text-xs block text-stone-500">
            Friday, Jan 3rd 2025
          </span>
        </div>
      </div>
    </div>
  );
};
