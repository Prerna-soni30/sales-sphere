"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "Leads", href: "/dashboard/leads", icon: "👥" },
  { name: "Customers", href: "/dashboard/customers", icon: "👤" },
  { name: "Deals", href: "/dashboard/deals", icon: "💼" },
  { name: "Tasks", href: "/dashboard/tasks", icon: "✅" },
  { name: "Reports", href: "/dashboard/reports", icon: "📊" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="flex h-16 items-center px-6 border-b border-gray-200 dark:border-gray-700">
        <Link href="/dashboard" className="text-xl font-bold text-gray-900 dark:text-gray-100" onClick={onClose}>
          <span className="text-blue-600">Sales</span>Sphere
        </Link>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
              pathname === item.href
                ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Admin User</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">admin@salessphere.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
