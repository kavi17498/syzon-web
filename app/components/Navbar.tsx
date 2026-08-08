"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Vehicles", href: "#vehicles" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "Book Now", href: "#booking-form" },
  ];

  return (
    <nav className="w-full bg-[#2563eb] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-stretch h-full space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center px-6 h-full font-bold text-sm sm:text-base transition-colors duration-150 ${
                    isActive
                      ? "bg-[#1e40af] text-white shadow-inner"
                      : "text-white hover:bg-[#1d4ed8]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu title & button */}
          <div className="flex md:hidden items-center justify-between w-full">
            <span className="font-bold text-white text-lg">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-white p-2 rounded-md hover:bg-[#1d4ed8] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 border-t border-[#1d4ed8]/50 space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-md font-bold text-base transition-colors ${
                    isActive
                      ? "bg-[#1e40af] text-white"
                      : "text-white hover:bg-[#1d4ed8]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
