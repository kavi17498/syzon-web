"use client";

export default function FloatingCallWidget() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94757890053"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110 group"
      >
        <span className="font-extrabold text-xs">WA</span>
        <span className="absolute right-14 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap pointer-events-none">
          WhatsApp: +94 75 789 0053
        </span>
      </a>

      {/* Direct Call Floating Button */}
      <a
        href="tel:+94757890053"
        aria-label="Call Syzon Cab Service"
        className="w-13 h-13 bg-[#9c7502] hover:bg-[#836200] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110 group"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.2 2.2z" />
        </svg>
        <span className="absolute right-14 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap pointer-events-none">
          Call Now: +94 75 789 0053
        </span>
      </a>
    </div>
  );
}
