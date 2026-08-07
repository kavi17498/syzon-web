import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#dfad15] selection:text-white">
      {/* Top Header with Logo & Key Selling Points */}
      <Header />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Hero Section with Background Image & Booking Form */}
      <main className="flex-grow">
        <Hero />
      </main>

      {/* Footer minimal signature */}
      <footer className="bg-gray-900 text-gray-400 text-xs py-4 text-center border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Syzon Cab Service. All rights reserved.</p>
          <p className="text-gray-500">Best Airport Transfers & Taxi Services in Sri Lanka</p>
        </div>
      </footer>
    </div>
  );
}
