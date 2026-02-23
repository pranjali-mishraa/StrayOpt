import CurrPups from "./assets/Components/CurrPups";
import Quotes from "./assets/Components/Qoutes";
import PetSlideshow from "./assets/Components/PetSlideshow";
import Navbar from "./assets/Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 bg-cream mt-6 md:mt-0">
        
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-10 lg:gap-12 items-center">
          
          {/* Slideshow Section */}
          <div className="w-full lg:w-1/2">
            <PetSlideshow />
          </div>

          {/* Quotes Section */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            
            <Quotes para="Adopting one dog won’t change the world, but for that one dog, the world will change forever." />
            <Quotes para="New best friend unlocked 🐾" />
            <Quotes para="From shelter to forever." />
            <Quotes para="Adoption turns tears into tail wags." />
            <Quotes para="Open your heart. Open your home." />

          </div>

        </div>
      </div>
    </div>
  );
}