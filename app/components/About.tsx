"use client";

export default function About() {
  const highlights = [
    {
      title: "24/7 Availability",
      desc: "Round-the-clock airport transfers and taxi services anytime day or night.",
      icon: "⏰",
    },
    {
      title: "Fixed Rates Guarantee",
      desc: "Upfront transparent pricing with zero surprise charges or surge rates.",
      icon: "🏷️",
    },
    {
      title: "Professional Drivers",
      desc: "Licensed, polite, English-speaking drivers trained in safe driving.",
      icon: "👨‍✈️",
    },
    {
      title: "Flight Delay Tracking",
      desc: "We monitor your flight status to adjust pickup timing seamlessly at no extra cost.",
      icon: "✈️",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-[#fcd34d] font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-900/40 border border-amber-500/30 px-3.5 py-1.5 rounded-full inline-block">
              About Syzon Cab Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Sri Lanka's Trusted Taxi & Airport Transfer Partner
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Syzon Cab Service provides premier passenger transport solutions across Sri Lanka.
              Whether you need urgent airport transfers from Bandaranaike International Airport (CMB),
              intercity taxi rides, or customized islandwide sightseeing tours, we prioritize comfort, safety, and punctuality.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              With a modern fleet of well-maintained sedans and luxury vans, our mission is to ensure every traveler enjoys a stress-free journey with unmatched hospitality.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="tel:+94757890053"
                className="bg-[#dfad15] hover:bg-[#c99b10] text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg transition duration-200"
              >
                Call Hotline: +94 75 789 0053
              </a>
              <a
                href="#contact"
                className="border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/80 border border-gray-700/80 p-5 rounded-2xl shadow hover:border-amber-500/50 transition duration-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
