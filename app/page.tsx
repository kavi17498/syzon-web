import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VehicleCard from "./components/VehicleCard";
import vehicles from "./data/vehicles.json";

export default function Home() {
   
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-primary selection:text-white">
      {/* Top Header with Logo & Key Selling Points */}
      <Header />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Hero Section with Background Image & Booking Form */}
      <main className="flex-grow">
        <Hero />
      </main>

       <section
        id="vehicles"
        className="py-16 px-4 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Vehicles
            </h2>

            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-5"></div>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect vehicle for your journey.
              Comfortable, reliable and ready for your trip.
            </p>
          </div>

          {/* Vehicle Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.name}
                image={vehicle.image}
                name={vehicle.name}
                passengers={vehicle.passengers}
              />
            ))}
          </div>

        </div>
      </section>

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
