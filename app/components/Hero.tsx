"use client";

import Image from "next/image";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center overflow-hidden bg-gray-900">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroimage.jpg"
          alt="Syzon Cab Service Sri Lanka Scenic Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01]"
        />
        {/* Subtle overlay gradient to ensure text/form pop visually */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Booking Form on Left Side */}
          <div className="w-full lg:w-auto">
            <BookingForm />
          </div>

          {/* Right side optional text highlight / promo badge */}
          <div className="hidden lg:flex flex-col items-end justify-center self-center text-white text-right space-y-3 drop-shadow-lg">
            <span className="bg-[#dfad15]/90 text-white text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
              24/7 Islandwide Taxi Service
            </span>
            <h1 className="text-3xl xl:text-4xl font-extrabold leading-tight text-white drop-shadow-md">
              Reliable, Comfortable & Safe <br />
              <span className="text-[#fcd34d]">Rides Across Sri Lanka</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
