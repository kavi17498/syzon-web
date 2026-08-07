import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rates from "./components/Rates";
import Vehicles from "./components/Vehicles";
import About from "./components/About";
import Contact from "./components/Contact";
import FloatingCallWidget from "./components/FloatingCallWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#dfad15] selection:text-white scroll-smooth">
      {/* Top Header with Logo, Phone Number & Selling Points */}
      <Header />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Single Page Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero & Booking Form (#home & #booking-form) */}
        <Hero />

        {/* Section 2: Popular Rates (#rates) */}
        <Rates />

        {/* Section 3: Fleet / Our Vehicles (#vehicles) */}
        <Vehicles />

        {/* Section 4: About Us (#about) */}
        <About />

        {/* Section 5: Contact Us & Inquiries (#contact) */}
        <Contact />
      </main>

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingCallWidget />

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-xs py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="font-jacques text-xl text-[#E1BE22] block mb-1">
              Syzon Cab Service
            </span>
            <p>© {new Date().getFullYear()} Syzon Cab Service. All rights reserved.</p>
            <p className="text-gray-500 text-[11px] mt-0.5">
              Bandaranaike International Airport (CMB) Taxi Desk & Islandwide Transfers
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <a
              href="tel:+94757890053"
              className="text-amber-400 font-extrabold text-sm hover:underline"
            >
              Hotline: +94 75 789 0053
            </a>
            <div className="flex gap-4 text-gray-400 text-xs pt-1">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#rates" className="hover:text-white transition">Rates</a>
              <a href="#vehicles" className="hover:text-white transition">Vehicles</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
