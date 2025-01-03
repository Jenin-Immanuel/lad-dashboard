import React from "react";
import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";
import { RouteSelect } from "./RouteSelect";
import { Plan } from "./Plan";
import Logo from "./Logo";

export const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <div className="logo-corner flex gap-2 mb-2">
          <Logo className="w-6 h-6" />
          <div>Learning Lens</div>
        </div>
        <Search />
        <RouteSelect />
      </div>
      <Plan />
    </div>
  );
};
