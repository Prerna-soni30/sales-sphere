"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { 
    name: "Dashboard", 
    href: "/dashboard", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  { 
    name: "Leads", 
    href: "/dashboard/leads", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  { 
    name: "Customers", 
    href: "/dashboard/customers", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.769m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  { 
    name: "Deals", 
    href: "/dashboard/deals", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  { 
    name: "Tasks", 
    href: "/dashboard/tasks", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  { 
    name: "Reports", 
    href: "/dashboard/reports", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  { 
    name: "Settings", 
    href: "/dashboard/settings", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003 1.008c-.253.255-.427.577-.476.914l-.237 1.341c-.042.242.085.477.33.61.245.132.542.127.784-.006l.955-.739c.166-.128.374-.194.584-.194h1.5c.56 0 1.008.46.94 1.016l-.455 3.06c-.052.35-.344.604-.697.654l-3.06.456a1.125 1.125 0 01-.943-.272l-1.447-1.214a1.125 1.125 0 01-.338-.676l-.296-1.757a1.125 1.125 0 01.39-1.097l.856-.721c.183-.154.306-.327.35-.51l.246-.847a1.125 1.125 0 01.816-1.05l1.427-.716c.328-.165.554-.457.617-.82l.246-.847a1.125 1.125 0 01.816-1.05l1.427-.716a1.125 1.125 0 01.943-.372h2.593c.622 0 1.125.564.94 1.186l-.455 3.06a1.125 1.125 0 01-.697.654l-3.06.456a1.125 1.125 0 01-.942.272l-1.447-1.214a1.125 1.125 0 01-.338-.676l-.296-1.757a1.125 1.125 0 01.39-1.097l.857-.72c.182-.154.305-.328.35-.511l.246-.847a1.125 1.125 0 01.816-1.05l1.427-.716c.327-.165.553-.457.617-.82l.246-.847a1.125 1.125 0 01.816-1.05l1.427-.716a1.125 1.125 0 01.942-.372h2.593c.622 0 1.125.564.94 1.186l-.455 3.06a1.125 1.125 0 01-.697.654l-3.06.456a1.125 1.125 0 01-.942.272l-1.447-1.214a1.125 1.125 0 01-.338-.676l-.296-1.757a1.125 1.125 0 01.39-1.097l.856-.72c.183-.154.306-.328.35-.511l.246-.847a1.125 1.125 0 01.816-1.05l1.427-.716c.327-.165.553-.457.617-.82l.246-.847a1.125 1.125 0 01.816-1.05l1.427-.716a1.125 1.125 0 01.942-.372h2.593a1.125 1.125 0 01-.94-1.016l.455-3.06a1.125 1.125 0 01.697-.654l3.06-.456a1.125 1.125 0 01.943.372l1.446 1.214c.375.315.515.751.338 1.076l-.296 1.757a1.125 1.125 0 01-.39 1.097l-.857.72a1.125 1.125 0 01-.35.511l-.246.847a1.125 1.125 0 01-.816 1.05l-1.427.716c-.327.165-.553.457-.617.82l-.246.847a1.125 1.125 0 01-.816 1.05l-1.427.716a1.125 1.125 0 01-.942.372h-2.593c-.622 0-1.125-.564-.94-1.186l.455-3.06a1.125 1.125 0 01.697-.654l3.06-.456a1.125 1.125 0 01.942-.272l1.446 1.214a1.125 1.125 0 01.338.676l.296 1.757a1.125 1.125 0 01-.39 1.097l-.856.721c-.183.154-.306.327-.35.51l-.246.847a1.125 1.125 0 01-.816 1.05l-1.427.716c-.327.165-.553.457-.617.82l-.246.847a1.125 1.125 0 01-.816 1.05l-1.427.716a1.125 1.125 0 01-.942.372h-1.5c-.331 0-.66-.036-.975-.106a1.125 1.125 0 01-.846-.953z" />
      </svg>
    ),
  },
];

const bottomNavItems = [
  { 
    name: "Help & Support", 
    href: "#", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  { 
    name: "Logout", 
    href: "/login", 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    ),
  },
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="h-full w-72 bg-sidebar-bg text-sidebar-text flex flex-col shadow-2xl">
      <div className="flex items-center h-20 px-7 border-b border-gray-800/60">
        <Link href="/dashboard" className="text-2xl font-extrabold tracking-tight text-white" onClick={onClose}>
          <span className="text-blue-400">Sales</span>Sphere
        </Link>
      </div>
      
      <div className="px-4 py-6">
        <p className="px-3 text-xs uppercase tracking-wider text-gray-600 font-semibold mb-3">Main Menu</p>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <span className={`mr-3 transition-transform duration-200 ${isActive ? '' : 'group-hover:scale-110'}`}>
                  {item.icon}
                </span>
                {item.name}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse-soft" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto px-4 py-4 border-t border-gray-800/60">
        <p className="px-3 text-xs uppercase tracking-wider text-gray-600 font-semibold mb-3">Account</p>
        <nav className="space-y-1">
          {bottomNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
            >
              <span className="mr-3 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="m-4 mt-2">
        <div className="glass-card !bg-gray-900/60 !border-gray-700 !text-white rounded-xl p-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
              AD
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold text-white">Admin User</p>
              <p className="text-xs text-gray-400">admin@salessphere.com</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/15 text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />
              Online
            </span>
            <span className="text-xs text-gray-500">CRM Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
