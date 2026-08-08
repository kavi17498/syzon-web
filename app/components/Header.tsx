"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-12 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Brand Name Section */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <div className="relative h-12 sm:h-16 w-14 sm:w-20 shrink-0 transition-transform duration-200 group-hover:scale-[1.03]">
            <Image
              src="/logo.png"
              alt="Syzon Cab Service Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <span className="font-sekuya text-md sm:text-base lg:text-base font-normal tracking-wide whitespace-nowrap text-primary">
            Syzon Cab Service
          </span>
        </Link>

        {/* Info Items & CTA */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 lg:gap-8 text-center md:text-left">
          {/* Item 1 */}
          <div className="flex items-center gap-3 px-3">
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                Airport Transfers
              </h3>
              <p className="text-xs text-gray-600 font-medium">
                Offered At Short Notice
              </p>
            </div>
          </div>

          <div className="hidden sm:block h-10 w-[1px] bg-gray-300"></div>

          {/* Item 2 */}
          <div className="flex items-center gap-3 px-3">
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                Pickups/Drop Offs
              </h3>
              <p className="text-xs text-gray-600 font-medium">
                From anywhere
              </p>
            </div>
          </div>

          <div className="hidden sm:block h-10 w-[1px] bg-gray-300"></div>

          {/* Item 3 */}
          <div className="flex items-center gap-3 px-3">
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                Trusted Service
              </h3>
              <p className="text-xs text-gray-600 font-medium">
                Best in Sri Lanka
              </p>
            </div>
          </div>

          {/* Header CTA Button */}
          <div className="ml-2">
            <a
              href="#booking-form"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base px-6 py-2.5 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
