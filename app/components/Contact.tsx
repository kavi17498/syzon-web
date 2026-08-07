"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#9c7502] font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Contact Syzon Cab Service
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Have questions or need an instant cab reservation? We are available 24 hours a day, 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card 1: Phone */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-amber-100 text-[#9c7502] rounded-full flex items-center justify-center text-2xl mb-4">
              📞
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Hotline & Phone</h3>
            <p className="text-xs text-gray-500 my-1">Available 24/7 for urgent bookings</p>
            <a
              href="tel:+94757890053"
              className="text-lg font-extrabold text-[#9c7502] hover:underline mt-2"
            >
              +94 75 789 0053
            </a>
          </div>

          {/* Info Card 2: WhatsApp */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-2xl mb-4">
              💬
            </div>
            <h3 className="font-bold text-gray-900 text-lg">WhatsApp Chat</h3>
            <p className="text-xs text-gray-500 my-1">Instant quotes & location sharing</p>
            <a
              href="https://wa.me/94757890053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2 rounded-xl shadow mt-2 transition"
            >
              Chat on WhatsApp (+94 75 789 0053)
            </a>
          </div>

          {/* Info Card 3: Location */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-amber-100 text-[#9c7502] rounded-full flex items-center justify-center text-2xl mb-4">
              📍
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Service Area</h3>
            <p className="text-xs text-gray-500 my-1">Bandaranaike International Airport (CMB)</p>
            <p className="text-sm font-bold text-gray-800 mt-2">
              Islandwide Pickups & Drop Offs across Sri Lanka
            </p>
          </div>
        </div>

        {/* Send Inquiry Form Box */}
        <div className="mt-12 max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Send Us a Message
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 text-center mb-6">
            For custom tour inquiries or corporate ride arrangements.
          </p>

          {sent && (
            <div className="bg-green-700 text-white text-sm p-3 rounded-lg text-center mb-4 font-medium">
              ✓ Message sent! We will get back to you immediately.
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={contactData.name}
                onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#9c7502]"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number / WhatsApp"
                value={contactData.phone}
                onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#9c7502]"
              />
            </div>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your trip itinerary, dates, or questions..."
              value={contactData.message}
              onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#9c7502]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#9c7502] hover:bg-[#836200] text-white font-bold py-3 rounded-xl shadow transition duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
