"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const params = useParams();

  const navItems = [
    {
      name: "Dream Trip",
      href: `/city/${params.city}/dream-trip`,
    },
    {
      name: "Create",
      href: `/city/${params.city}/create`,
    },
    {
      name: "Itinerary",
      href: `/city/${params.city}/itinerary`,
    },
    {
      name: "Places",
      href: `/city/${params.city}/places`,
    },
  ];

  return (
    <ScrollArea>
      <div className="relative">
        {/* Banner with Integrated Menu */}
        <div className="bg-blue-600 text-white pb-16 shadow-lg relative">
          {/* Banner Content */}
          <div className="flex flex-col items-center justify-center h-64">
            <h1 className="text-3xl font-bold">
              Dubai, United Arab Emirates 🇦🇪
            </h1>
          </div>

          {/* Menu Group */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="bg-white rounded-lg shadow-xl p-2 flex gap-1 border border-gray-100">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-3 rounded-md transition-all text-sm font-medium ${
                    pathname === item.href
                      ? "bg-blue-600 text-white shadow-inner"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-20">
          {children}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Layout;
