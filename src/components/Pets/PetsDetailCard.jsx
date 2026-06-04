import React, { useState } from "react";

export default function PetDetailCard({ pet, onChat }) {
  const [activeImg, setActiveImg] = useState(0);
  const [expanded, setExpanded]   = useState(false);
  const [liked, setLiked]         = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border-brand shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* ── Images ── */}
      <div className="relative h-56 bg-warm overflow-hidden">
        {pet.images?.length > 0 ? (
          <img
            src={pet.images[activeImg]}
            alt={`${pet.name} photo ${activeImg + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl">🐾</span>
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

        {/* Heart */}
        <button
          onClick={() => setLiked(l => !l)}
          aria-label={liked ? "Unsave" : "Save"}
          className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform duration-200"
        >
          <svg width="15" height="15" viewBox="0 0 24 24"
            fill={liked ? "#C0572A" : "none"}
            stroke={liked ? "#C0572A" : "#9C876F"}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Image dots */}
        {pet.images?.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {pet.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                aria-label={`Photo ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === activeImg
                    ? "w-4 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className="p-4">

        {/* Name + age */}
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-display text-[1.1rem] font-semibold text-bark-dark">
            {pet.name}
          </h3>
          <span className="text-[11px] text-text-light bg-warm px-2.5 py-0.5 rounded-full border border-border-brand">
            {pet.age}
          </span>
        </div>

        {/* Breed + gender */}
        <p className="text-[12px] text-text-light mb-2">
          {pet.breed} · {pet.gender}
        </p>

        {/* Locality */}
        <div className="flex items-center gap-1.5 mb-3">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="text-rust flex-shrink-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-[12px] text-text-light">{pet.locality}</span>
        </div>

        {/* Health tags */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {pet.vaccinated && (
            <span className="text-[11px] bg-sage-light text-sage px-2.5 py-0.5 rounded-full">
              ✓ Vaccinated
            </span>
          )}
          {pet.neutered && (
            <span className="text-[11px] bg-sage-light text-sage px-2.5 py-0.5 rounded-full">
              ✓ Neutered
            </span>
          )}
        </div>

        {/* Description */}
        <p className={`text-[13px] text-text-mid leading-relaxed mb-1 ${expanded ? "" : "line-clamp-2"}`}>
          {pet.description}
        </p>
        {pet.description.length > 100 && (
          <button
            onClick={() => setExpanded(e => !e)}
            className="text-[12px] text-rust font-medium hover:opacity-75 transition-opacity mb-3"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        {/* ── Footer ── */}
        <div className="flex items-center justify-between pt-3 border-t border-border-brand mt-2">

          {/* Poster profile chip */}
          <button className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-warm border border-border-brand flex items-center justify-center text-[11px] font-semibold text-bark flex-shrink-0 overflow-hidden">
              {pet.postedBy.avatar
                ? <img src={pet.postedBy.avatar} alt={pet.postedBy.name} className="w-full h-full object-cover" />
                : pet.postedBy.name.charAt(0)
              }
            </div>
            <span className="text-[12px] text-text-light group-hover:text-bark transition-colors duration-200">
              {pet.postedBy.name}
            </span>
          </button>

          {/* Chat button */}
          <button
            onClick={() => onChat(pet)}
            className="inline-flex items-center gap-1.5 bg-bark-dark text-cream text-[12px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-rust hover:shadow-md active:scale-95"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Chat
          </button>

        </div>
      </div>
    </div>
  );
}