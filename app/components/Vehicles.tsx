"use client";

export default function Vehicles() {
  const fleet = [
    {
      title: "Budget Sedan",
      models: "Toyota Axio / Grace / Fit Shuttle",
      passengers: "3 Passengers",
      luggage: "2 Large Bags",
      ac: "Full Air Conditioned",
      badge: "Economical",
      desc: "Ideal for solo travelers, couples, or small families needing quick airport transfers.",
    },
    {
      title: "Premium Sedan",
      models: "Toyota Premio / Allion / Civic",
      passengers: "4 Passengers",
      luggage: "3 Large Bags",
      ac: "Dual Zone AC",
      badge: "Comfort",
      desc: "Spacious legroom and premium comfort for business and long-distance travel.",
    },
    {
      title: "Flat Roof Mini Van",
      models: "Toyota KDH Flat Roof / HiAce",
      passengers: "6 Passengers",
      luggage: "5 Large Bags",
      ac: "Dual AC System",
      badge: "Family Favorite",
      desc: "Perfect choice for medium families and small tour groups with moderate luggage.",
    },
    {
      title: "Luxury High Roof Van",
      models: "Toyota KDH High Roof / Commuter",
      passengers: "9-12 Passengers",
      luggage: "8-10 Large Bags",
      ac: "Full Rear AC Vents",
      badge: "Group Tours",
      desc: "Maximum space, high ceiling clearance, and comfortable reclining seats for group tours.",
    },
  ];

  return (
    <section id="vehicles" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#9c7502] font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Our Fleet
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Choose Your Preferred Vehicle
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            All vehicles are modern, fully insured, regularly sanitized, and driven by experienced professional drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold bg-[#9c7502] text-white px-2.5 py-0.5 rounded-full">
                    {vehicle.badge}
                  </span>
                  <span className="text-xs text-green-700 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available 24/7
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                  {vehicle.title}
                </h3>
                <p className="text-xs text-[#9c7502] font-semibold mt-0.5 mb-3">
                  {vehicle.models}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {vehicle.desc}
                </p>

                <div className="space-y-2 py-3 border-t border-b border-gray-200 text-xs text-gray-700 font-medium">
                  <div className="flex items-center justify-between">
                    <span>Capacity:</span>
                    <span className="font-bold text-gray-900">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Luggage:</span>
                    <span className="font-bold text-gray-900">{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Climate:</span>
                    <span className="font-bold text-gray-900">{vehicle.ac}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <a
                  href="#booking-form"
                  className="w-full text-center bg-gray-900 hover:bg-[#9c7502] text-white font-bold text-sm py-2.5 rounded-xl shadow transition duration-200 block"
                >
                  Select This Vehicle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
