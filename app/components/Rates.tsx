"use client";

export default function Rates() {
  const rateCards = [
    {
      route: "Airport ⇄ Colombo City",
      price: "LKR 8,500",
      estTime: "45 mins - 1 hour",
      popular: true,
      features: [
        "Highway Toll Fees Included",
        "Free Airport Waiting Time",
        "Air-Conditioned Sedan/Van",
        "Door-to-Door Pickup",
      ],
    },
    {
      route: "Airport ⇄ Kandy",
      price: "LKR 18,500",
      estTime: "2.5 - 3 hours",
      popular: false,
      features: [
        "Scenic Hill Country Route",
        "English Speaking Driver",
        "Free Luggage Handling",
        "Flight Delay Monitoring",
      ],
    },
    {
      route: "Airport ⇄ Galle / Hikkaduwa",
      price: "LKR 16,000",
      estTime: "2 hours via Highway",
      popular: false,
      features: [
        "Southern Expressway Toll Included",
        "Direct Beach Resort Transfer",
        "Spacious AC Vehicle",
        "Clean & Sanitized Interior",
      ],
    },
    {
      route: "Airport ⇄ Sigiriya / Dambulla",
      price: "LKR 21,000",
      estTime: "3.5 - 4 hours",
      popular: false,
      features: [
        "Cultural Triangle Tour Transfer",
        "Flexible Refreshment Stops",
        "Child Seat Available",
        "24/7 Hotline Support",
      ],
    },
  ];

  return (
    <section id="rates" className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#9c7502] font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Our Popular Airport Transfer Rates
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            No hidden fees, no surge charges. Enjoy fixed rates with professional drivers across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rateCards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative border ${
                card.popular ? "border-[#dfad15] ring-2 ring-[#dfad15]/40" : "border-gray-200"
              }`}
            >
              {card.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#dfad15] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-snug">
                  {card.route}
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  Est. Duration: {card.estTime}
                </p>

                <div className="my-5 pb-4 border-b border-gray-100">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#9c7502]">
                    {card.price}
                  </span>
                  <span className="text-xs text-gray-500 block font-normal">
                    *Starting rate per vehicle
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                  {card.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#booking-form"
                className="w-full text-center bg-[#dfad15] hover:bg-[#c99b10] text-white font-bold text-sm py-2.5 rounded-xl shadow transition duration-200 block"
              >
                Book This Route
              </a>
            </div>
          ))}
        </div>

        {/* Contact Banner for Custom Quotes */}
        <div className="mt-12 bg-[#9c7502] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <h4 className="text-lg sm:text-xl font-bold">Need a custom route or islandwide tour package?</h4>
            <p className="text-xs sm:text-sm text-amber-100 mt-1">
              Contact our 24/7 dispatch desk for an instant custom quote tailored to your travel itinerary.
            </p>
          </div>
          <a
            href="tel:+94757890053"
            className="whitespace-nowrap bg-white text-[#9c7502] hover:bg-amber-50 font-bold px-6 py-3 rounded-xl shadow-md transition"
          >
            Call +94 75 789 0053
          </a>
        </div>
      </div>
    </section>
  );
}
