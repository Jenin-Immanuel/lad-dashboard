import { Dashboard } from "@/components/Dashboard/Dashboard";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (user?.publicMetadata?.role === "ADMIN") {
    redirect("/admin/get-student-details");
  }
  return <Dashboard />;
}
