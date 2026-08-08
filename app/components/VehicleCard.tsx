"use client";

import Image from "next/image";
import Link from "next/link";

type VehicleCardProps = {
  image: string;
  name: string;
  passengers: number;
};

export default function VehicleCard({
  image,
  name,
  passengers,
}: VehicleCardProps) {
  return (
    <div className="bg-white shadow-lg overflow-hidden border border-gray-200">
      {/* Car Image */}
      <div className="relative w-full h-52 bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Vehicle Details */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 mb-5">
          {/* Passenger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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

          <span className="font-medium">
            {passengers} Passengers
          </span>
        </div>

        {/* Book Button */}
        <Link
          href="#booking-form"
          className="block w-full text-center bg-[#9c7502] hover:bg-[#c4980f] text-white font-bold py-3 transition-colors duration-150"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}