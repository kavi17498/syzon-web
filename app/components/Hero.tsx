"use client";

import Image from "next/image";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center overflow-hidden bg-gray-900">
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
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Booking Form on Left Side */}
          <div className="w-full lg:w-auto">
            <BookingForm />
          </div>

          {/* Right side headline & contact highlight */}
          <div className="hidden lg:flex flex-col items-end justify-center self-center text-white text-right space-y-4 drop-shadow-lg max-w-lg">
            <span className="bg-[#dfad15] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
              24/7 Islandwide Taxi Service
            </span>
            <h1 className="text-3xl xl:text-4xl font-extrabold leading-tight text-white drop-shadow-md">
              Reliable, Comfortable & Safe <br />
              <span className="text-[#fcd34d]">Rides Across Sri Lanka</span>
            </h1>
            <p className="text-sm text-gray-200 font-medium leading-relaxed drop-shadow">
              Airport pickups, drop offs, sightseeing tours, and intercity transfers at fixed affordable rates.
            </p>
            <div className="pt-2">
              <a
                href="tel:+94757890053"
                className="inline-flex items-center gap-2 bg-[#9c7502] hover:bg-[#836200] text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.2 2.2z" />
                </svg>
                <span>Call Hotline: +94 75 789 0053</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
