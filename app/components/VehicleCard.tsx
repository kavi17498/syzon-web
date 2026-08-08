"use client";

import Image from "next/image";
import Link from "next/link";

type VehicleCardProps = {
  image: string;
  name: string;
  passengers: number;
  bags?: number | string;
  ac?: string | boolean;
  description?: string;
};

export default function VehicleCard({
  image,
  name,
  passengers,
  bags = 2,
  ac = "Full A/C",
  description,
}: VehicleCardProps) {
  const acLabel = typeof ac === "boolean" ? (ac ? "Full A/C" : "Non-A/C") : ac;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col justify-between group">
      <div>
        {/* Car Image */}
        <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* A/C Badge floating on top right of image */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-primary-dark font-semibold text-xs px-2.5 py-1 rounded-full shadow flex items-center gap-1.5 border border-blue-100">
            <svg
              className="w-3.5 h-3.5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v18m9-9H3m14.364 5.364l-14.728-14.728m0 14.728l14.728-14.728"
              />
            </svg>
            <span>{acLabel}</span>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="p-5 space-y-3.5">
          <h3 className="text-xl font-bold text-gray-900 leading-snug">
            {name}
          </h3>

          {/* Quick Specs (Passengers & Luggage) */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-600 font-medium border-y border-gray-100 py-2.5">
            {/* Passengers */}
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-8a4 4 0 11-8 0 4 4 0 018 0zm6 2a3 3 0 10-6 0"
                />
              </svg>
              <span>{passengers} Passengers</span>
            </div>

            <span className="text-gray-300">•</span>

            {/* Bags */}
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <span>{bags} Bags</span>
            </div>
          </div>

          {/* Trip Fit / Description */}
          {description && (
            <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Best Fit For
              </span>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Book Button */}
      <div className="p-5 pt-0 mt-2">
        <Link
          href="#booking-form"
          className="block w-full text-center bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-lg transition-colors duration-150 shadow-sm"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}