"use client";
import React from "react";
import { IconType } from "react-icons";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RoleType } from "./Sidebar";

interface RouteSelectProps {
  role: RoleType;
}
export const RouteSelect = ({ role }: RouteSelectProps) => {
  console.log(role);
  const pathname = usePathname();
  const currentRoutes = (() => {
    switch (role) {
      case "STUDENT":
        return (
          <>
            <Route
              Icon={FiHome}
              selected={pathname === "/"}
              title="Dashboard"
              href="/"
            />
            <Route
              Icon={FiUsers}
              selected={pathname === "/courses"}
              title="Courses"
              href="/courses"
            />
          </>
        );

      case "ADMIN":
        return (
          <>
            <Route
              Icon={FiPaperclip}
              selected={pathname === "/admin/get-student-details"}
              title="Get Student Details"
              href="/admin/get-student-details"
            />
          </>
        );

      default:
        return null;
    }
  })();

  return (
    <div className="space-y-1">
      {currentRoutes}
      {/* <Route
        Icon={FiHome}
        selected={pathname === "/"}
        title="Dashboard"
        href="/"
      />
      <Route
        Icon={FiUsers}
        selected={pathname === "/courses"}
        title="Courses"
        href="/courses"
      /> */}
      {/* <Route Icon={FiPaperclip} selected={false} title="Invoices" />
      <Route Icon={FiLink} selected={false} title="Integrations" />
      <Route Icon={FiDollarSign} selected={false} title="Finance" /> */}
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
  href,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  href: string;
}) => {
  return (
    <Link
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
      href={href}
    >
      <Icon className={selected ? "text-green-500" : ""} />
      <span>{title}</span>
    </Link>
  );
};
