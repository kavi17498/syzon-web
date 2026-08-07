"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto py-2.5 sm:py-3.5 px-3 sm:px-6 lg:px-12">
        {/* Main Header Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          
          {/* Logo & Brand Name Section */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-4 group">
              <div className="relative h-10 sm:h-14 lg:h-16 w-12 sm:w-16 lg:w-20 shrink-0 transition-transform duration-200 group-hover:scale-[1.03]">
                <Image
                  src="/logo.png"
                  alt="Syzon Cab Service Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <span
                className="font-jacques text-xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-none"
                style={{ color: "#E1BE22" }}
              >
                Syzon Cab Service
              </span>
            </Link>

            {/* Mobile Call CTA Button */}
            <div className="flex md:hidden items-center gap-1.5">
              <a
                href="tel:+94757890053"
                className="flex items-center justify-center p-2 rounded-lg bg-amber-50 text-[#9c7502] border border-[#dfad15]/40 hover:bg-[#dfad15] hover:text-white transition"
                aria-label="Call +94 75 789 0053"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.2 2.2z" />
                </svg>
              </a>
              <a
                href="#booking-form"
                className="bg-[#dfad15] hover:bg-[#c99b10] text-white font-bold text-xs px-3 py-2 rounded-lg shadow transition whitespace-nowrap"
              >
                Book
              </a>
            </div>
          </div>

          {/* Desktop & Mobile Feature Points Bar */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 md:gap-6">
            
            {/* Feature Points Grid/Row */}
            <div className="w-full md:w-auto grid grid-cols-3 divide-x divide-gray-200 md:divide-x-0 md:flex md:items-center md:gap-4 lg:gap-6 text-center md:text-left bg-gray-50/80 md:bg-transparent py-2 md:py-0 px-1 rounded-xl md:rounded-none border border-gray-100 md:border-none">
              
              {/* Item 1 */}
              <div className="px-1.5 sm:px-3">
                <h3 className="font-bold text-gray-900 text-[11px] sm:text-xs lg:text-sm leading-tight">
                  Airport Transfers
                </h3>
                <p className="text-[10px] sm:text-[11px] lg:text-xs text-gray-500 font-medium">
                  Short Notice
                </p>
              </div>

              {/* Item 2 */}
              <div className="px-1.5 sm:px-3">
                <h3 className="font-bold text-gray-900 text-[11px] sm:text-xs lg:text-sm leading-tight">
                  Pickups/Drops
                </h3>
                <p className="text-[10px] sm:text-[11px] lg:text-xs text-gray-500 font-medium">
                  From anywhere
                </p>
              </div>

              {/* Item 3 */}
              <div className="px-1.5 sm:px-3">
                <h3 className="font-bold text-gray-900 text-[11px] sm:text-xs lg:text-sm leading-tight">
                  Trusted Service
                </h3>
                <p className="text-[10px] sm:text-[11px] lg:text-xs text-gray-500 font-medium">
                  Best in Sri Lanka
                </p>
              </div>
            </div>

            {/* Desktop CTA Action Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="tel:+94757890053"
                className="flex items-center gap-1.5 border border-[#dfad15] text-[#9c7502] hover:bg-[#dfad15] hover:text-white font-bold text-xs lg:text-sm px-3.5 py-2 rounded-xl transition duration-200 whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.2 2.2z" />
                </svg>
                <span>Call Now</span>
              </a>
              <a
                href="#booking-form"
                className="bg-[#dfad15] hover:bg-[#c99b10] text-white font-bold text-xs lg:text-sm px-5 py-2 rounded-xl shadow transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                Book Now
              </a>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
