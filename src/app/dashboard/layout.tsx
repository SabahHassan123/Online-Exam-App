import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "../_components/sidebar";
import { authOptions } from "@/auth";
import Header from "../_components/header";

export default async function DashboardLayout({
  children,
  admin,
  user,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const userData = session?.user;

  if (!userData) redirect("/signin");
  // Add type assertion or validation
  if (userData.role !== "admin" && userData.role !== "user") {
    // This line is useless
    redirect("/signin");
  }

  return (
    <div className="flex h-screen bg-backgroundColor">
      <Sidebar role={userData.role as "admin" | "user"} />
      <section className="text-textColor w-full h-screen flex flex-col p-5 gap-8">
        <Header />

        {/* Outlet of the dashboard navigations */}
        <main className="flex-1 overflow-auto ">{children}</main>
      </section>
    </div>
  );
}
