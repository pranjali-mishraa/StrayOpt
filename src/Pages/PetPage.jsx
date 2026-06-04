import React, { useState } from "react";
import PetDetailCard from "../components/Pets/PetsDetailCard";
import ChatDrawer    from "../components/Pets/ChatDrawer";
import { detailedPets } from "../components/DummyData/petsDetailsData";

const FILTERS = ["All", "Dog", "Cat", "Other", "Urgent"];

export default function Pets() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch]             = useState("");
  const [chatPet, setChatPet]           = useState(null);

  const filtered = detailedPets.filter(pet => {
    const matchFilter =
      activeFilter === "All"    ? true :
      activeFilter === "Urgent" ? pet.urgent :
      activeFilter === "Other"  ? pet.species !== "Dog" && pet.species !== "Cat" :
      pet.species === activeFilter;

    const matchSearch =
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.locality.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Page header ── */}
<div className="relative border-b border-border-brand overflow-hidden">

{/* Banner image */}
<img
  src="/pets-banner.png"
  alt="Stray animals looking for a home"
  className="absolute inset-0 w-full h-full object-cover object-center"
/>

{/* Dark overlay so text stays readable */}
{/* Subtle gradient only at bottom for text readability */}
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

{/* Content on top */}
<div className="relative z-10 px-6 py-16 text-center">
  <div className="flex items-center justify-center gap-3 mb-2">
    <span className="w-8 h-[2px] bg-bark-dark rounded-full" />
    <p className="text-bark-dark text-[13px] font-medium uppercase tracking-widest">
      Open for Adoption
    </p>
    <span className="w-8 h-[2px] bg-bark-darkrounded-full" />
  </div>
  <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-bark-dark mb-2">
    Available Pets
  </h1>
  

  {/* Search */}
  <div className="max-w-md mx-auto flex items-center gap-2 bg-white border border-border-brand rounded-full px-4 py-2.5 shadow-sm focus-within:border-bark transition-colors duration-200">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="text-text-light flex-shrink-0">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
    </svg>
    <input
      type="text"
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="Search by name, breed, area…"
      className="flex-1 text-[14px] text-text bg-transparent outline-none placeholder:text-text-light"
    />
    {search && (
      <button onClick={() => setSearch("")} className="text-text-light hover:text-text transition-colors">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    )}
  </div>
</div>
</div>

      {/* ── Filters ── */}
      <div className="sticky top-16 z-30 bg-cream/90 backdrop-blur-sm border-b border-border-brand px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-bark-dark text-cream border-bark-dark"
                  : "bg-white text-text-mid border-border-brand hover:border-bark hover:text-bark"
              }`}
            >
              {f === "Dog" ? "🐕 Dogs" : f === "Cat" ? "🐈 Cats" : f === "Urgent" ? "⚡ Urgent" : f === "Other" ? "🐰 Others" : f}
            </button>
          ))}
          <span className="ml-auto text-[12px] text-text-light">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(pet => (
              <PetDetailCard
                key={pet.id}
                pet={pet}
                onChat={pet => setChatPet(pet)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🐾</p>
            <h3 className="font-display text-[1.3rem] font-semibold text-bark-dark mb-2">
              No pets found
            </h3>
            <p className="text-text-light text-[13px]">
              Try a different filter or search term
            </p>
          </div>
        )}
      </div>

      {/* ── Chat drawer ── */}
      {chatPet && (
        <ChatDrawer
          pet={chatPet}
          onClose={() => setChatPet(null)}
        />
      )}

    </div>
  );
}