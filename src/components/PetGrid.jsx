import React from "react";
import PetCard from "./PetCard";
import { samplePets } from "./DummyData/PetsData";
import { Link } from "react-router-dom";

export default function PetGrid() {
  return (
    <section className="bg-cream py-20 px-6">

      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-rust rounded-full" />
          <p className="text-rust text-[13px] font-medium uppercase tracking-widest">
            Find a Friend
          </p>
          <span className="w-8 h-[2px] bg-rust rounded-full" />
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold text-bark-dark mb-2">
          Animals Looking for Homes
        </h2>
        <p className="text-text-light text-[14px]">
          Posted by caring people in your community
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>

      

    </section>
  );
}