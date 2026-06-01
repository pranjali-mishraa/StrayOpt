import React, { useState } from "react";

export default function PetCard({ pet }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border-brand shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">

      {/* ── Pet Image ── */}
      <div className="relative h-52 bg-warm overflow-hidden">
        {pet.image ? (
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          // Fallback if no image uploaded yet
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-5xl">🐾</span>
            <p className="text-text-light text-[12px]">No photo yet</p>
          </div>
        )}

        {/* Urgent badge */}
        {pet.urgent && (
          <span className="absolute top-3 left-3 bg-rust text-cream text-[11px] font-medium px-3 py-1 rounded-full">
            ⚡ Urgent
          </span>
        )}

        {/* Species badge */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-bark text-[11px] font-medium px-3 py-1 rounded-full border border-border-brand">
          {pet.species === "Dog" ? "🐕" : pet.species === "Cat" ? "🐈" : "🐾"} {pet.species}
        </span>

        {/* Heart / save button */}
        <button
          onClick={() => setLiked(l => !l)}
          aria-label={liked ? "Unsave pet" : "Save pet"}
          className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <svg
            width="15" height="15" viewBox="0 0 24 24"
            fill={liked ? "#C0572A" : "none"}
            stroke={liked ? "#C0572A" : "#9C876F"}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* ── Card Body ── */}
      <div className="p-4">

        {/* Name + Age row */}
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-display text-[1.15rem] font-semibold text-bark-dark">
            {pet.name}
          </h3>
          <span className="text-[12px] text-text-light bg-warm px-2.5 py-0.5 rounded-full border border-border-brand">
            {pet.age}
          </span>
        </div>

        {/* Locality */}
        <div className="flex items-center gap-1.5 mb-3">
          <svg
            width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="text-rust flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-[12px] text-text-light">{pet.locality}</span>
        </div>

        {/* Description */}
        <p className="text-[13px] text-text-mid leading-relaxed line-clamp-2 mb-4">
          {pet.description}
        </p>

        {/* ── Footer: poster info + contact button ── */}
        <div className="flex items-center justify-between pt-3 border-t border-border-brand">

          {/* Poster */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-warm border border-border-brand flex items-center justify-center text-[11px] font-semibold text-bark flex-shrink-0">
              {pet.postedBy?.charAt(0).toUpperCase()}
            </div>
            <span className="text-[12px] text-text-light">{pet.postedBy}</span>
          </div>

          {/* Contact button */}
          <button className="inline-flex items-center gap-1.5 bg-rust text-cream text-[12px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-rust-hover hover:shadow-md active:scale-95">
            Contact
            <svg
              width="11" height="11" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}