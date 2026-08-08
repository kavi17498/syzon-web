"use client";

import { useState, FormEvent } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pickupAddress: "",
    dropoffAddress: "",
    pickupDate: "",
    pickupHour: "Hour",
    pickupMinute: "00",
    ampm: "AM",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div id="booking-form" className="w-full max-w-sm sm:max-w-md shadow-2xl rounded-lg overflow-hidden">
      {/* Form Top Banner Tab */}
      <div className="relative bg-[#1e40af] text-white py-3 px-6 text-center shadow-sm">
        <h2 className="text-lg sm:text-xl font-bold tracking-wide">Book Now</h2>
        {/* Downward triangle arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#1e40af] z-10"></div>
      </div>

      {/* Form Card Body */}
      <div className="bg-[#2563eb] p-5 sm:p-7 pt-7 space-y-4">
        {submitted && (
          <div className="bg-green-700 text-white p-3 rounded text-sm text-center font-medium animate-fade-in">
            ✓ Booking request submitted successfully! We will contact you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Full Name */}
          <div>
            <input
              type="text"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af] text-sm sm:text-base font-normal"
            />
          </div>

          {/* Email Address */}
          <div>
            <input
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af] text-sm sm:text-base font-normal"
            />
          </div>

          {/* Pick Up Address */}
          <div>
            <input
              type="text"
              required
              placeholder="Pick Up Address"
              value={formData.pickupAddress}
              onChange={(e) =>
                setFormData({ ...formData, pickupAddress: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af] text-sm sm:text-base font-normal"
            />
          </div>

          {/* Drop Off Address */}
          <div>
            <input
              type="text"
              required
              placeholder="Drop Off Address"
              value={formData.dropoffAddress}
              onChange={(e) =>
                setFormData({ ...formData, dropoffAddress: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af] text-sm sm:text-base font-normal"
            />
          </div>

          {/* Pick Up Date */}
          <div>
            <input
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              required
              placeholder="Pick Up Date"
              value={formData.pickupDate}
              onChange={(e) =>
                setFormData({ ...formData, pickupDate: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-white text-gray-800 placeholder-gray-400 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af] text-sm sm:text-base font-normal cursor-pointer"
            />
          </div>

          {/* Pick Up Time row */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <label className="text-white font-bold text-sm sm:text-base whitespace-nowrap pl-1">
              Pick Up Time
            </label>
            <div className="flex items-center gap-2">
              {/* Hour Dropdown */}
              <div className="relative">
                <select
                  value={formData.pickupHour}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupHour: e.target.value })
                  }
                  className="appearance-none bg-white text-gray-700 pl-3 pr-7 py-1.5 rounded text-sm sm:text-base border border-transparent focus:outline-none focus:ring-2 focus:ring-[#1e40af] cursor-pointer"
                >
                  <option value="Hour">Hour</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                    <option key={h} value={h.toString().padStart(2, "0")}>
                      {h.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              {/* Minute Dropdown */}
              <div className="relative">
                <select
                  value={formData.pickupMinute}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupMinute: e.target.value })
                  }
                  className="appearance-none bg-white text-gray-700 pl-3 pr-7 py-1.5 rounded text-sm sm:text-base border border-transparent focus:outline-none focus:ring-2 focus:ring-[#1e40af] cursor-pointer"
                >
                  <option value="00">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              {/* AM/PM */}
              <div className="relative">
                <select
                  value={formData.ampm}
                  onChange={(e) =>
                    setFormData({ ...formData, ampm: e.target.value })
                  }
                  className="appearance-none bg-white text-gray-700 pl-2 pr-6 py-1.5 rounded text-sm sm:text-base border border-transparent focus:outline-none focus:ring-2 focus:ring-[#1e40af] cursor-pointer"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-gray-500">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold px-6 py-2.5 rounded shadow hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 text-sm sm:text-base"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
