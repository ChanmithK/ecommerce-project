"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const UserSidebar = () => {
  const pathname = usePathname();

  const naviLinks = [
    { name: "Dashboard", link: "/pages/user" },
    { name: "Request Product", link: "/pages/user/request-product" },
    { name: "Edit Profile", link: "/pages/user/edit-profile" },
    { name: "Order History", link: "/pages/user/order-history" },
    { name: "Addresses", link: "/pages/user/addresses" },
    { name: "Password", link: "/pages/user/password" },
  ];

  return (
    <div>
      {/* Laptop View */}
      <aside
        id="default-sidebar"
        className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mobile:hidden md:block"
        aria-label="Sidebar"
      >
        <div className="  h-full px-3 py-4 dark:bg-white border-2 border-gray-100">
          <ul className="space-y-0 font-medium">
            {naviLinks.map((item: any, index: number) => {
              const isActive = pathname.endsWith(item.link);
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`flex items-center p-2 text-gray-900 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100 group ${
                      isActive ? "border-l-4 border-primary" : ""
                    }`}
                  >
                    <span
                      className={`flex-1 ms-3 whitespace-nowrap text-sm font-medium ${
                        isActive ? "font-extrabold" : ""
                      } `}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}

            <div className="border-t">
              <li className="px-5 py-3 text-gray-900 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100 text-sm">
                Logout
              </li>
            </div>
          </ul>
        </div>
      </aside>

      {/* Mobile View */}
      <aside id="default-sidebar" className=" md:hidden" aria-label="Sidebar">
        <div className="flex items-center h-full px-3 py-4 dark:bg-white border-2 border-gray-100 overflow-x-scroll overflow-y-hidden">
          <ul className="flex space-x-4 font-medium">
            {naviLinks.map((item: any, index: number) => {
              const isActive = pathname.endsWith(item.link);
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`flex items-center p-2 text-gray-900 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100 group ${
                      isActive ? "border-b-4 border-primary" : ""
                    }`}
                  >
                    <span
                      className={`whitespace-nowrap text-sm font-medium ${
                        isActive ? "font-extrabold" : ""
                      } `}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}

            <li className="px-5 py-2 text-gray-900 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100 text-sm">
              Logout
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default UserSidebar;
