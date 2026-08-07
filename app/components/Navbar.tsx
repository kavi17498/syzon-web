"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Rates", href: "#rates" },
    { name: "Our Vehicles", href: "#vehicles" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "Book Now", href: "#booking-form" },
  ];

  return (
    <nav className="w-full bg-[#dfad15] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-stretch h-full space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center px-5 lg:px-6 h-full font-bold text-sm sm:text-base transition-colors duration-150 whitespace-nowrap ${
                    isActive
                      ? "bg-[#9c7502] text-white shadow-inner"
                      : "text-white hover:bg-[#c4980f]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Quick Phone Call on Navbar right side */}
          <div className="hidden lg:flex items-center gap-2 text-white text-sm font-bold bg-[#b88c0b] px-3.5 py-1.5 rounded-lg shadow-sm">
            <svg className="w-4 h-4 fill-current text-amber-200" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.2 2.2z" />
            </svg>
            <a href="tel:+94757890053" className="hover:underline">
              +94 75 789 0053
            </a>
          </div>

          {/* Mobile menu title & toggle button */}
          <div className="flex md:hidden items-center justify-between w-full">
            <a
              href="tel:+94757890053"
              className="flex items-center gap-1.5 text-white font-bold text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.2 2.2z" />
              </svg>
              <span>+94 75 789 0053</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-white p-2 rounded-md hover:bg-[#c4980f] focus:outline-none"
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
          <div className="md:hidden py-2 border-t border-[#c4980f]/50 space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-md font-bold text-base transition-colors ${
                    isActive
                      ? "bg-[#9c7502] text-white"
                      : "text-white hover:bg-[#c4980f]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
