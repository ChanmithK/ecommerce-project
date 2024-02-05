import UserSidebar from "@/app/components/common/user-dashboard-sidebar";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex mobile:flex-col md:flex-row p-5 gap-4">
        <UserSidebar />
        <div className=" w-full min-h-screen p-5 border-2 border-gray-100">
          {children}
        </div>
      </div>
    </section>
  );
}
