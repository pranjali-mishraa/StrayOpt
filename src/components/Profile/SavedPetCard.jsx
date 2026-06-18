import React from "react";
import { Link } from "react-router-dom";

export default function SavedPetCard({ pet, onRemove }) {
  return (
    <div className="bg-white rounded-2xl border border-border-brand overflow-hidden hover:shadow-md transition-all duration-200">

      {/* Image */}
      <div className="relative h-36 bg-warm overflow-hidden">
        {pet.images?.[0] ? (
          <img
            src={pet.images[0]}
            alt={pet.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🐾</span>
          </div>
        )}
        {pet.urgent && (
          <span className="absolute top-3 left-3 bg-rust text-cream text-[11px] font-medium px-3 py-1 rounded-full">
            ⚡ Urgent
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display text-[1rem] font-semibold text-bark-dark">
            {pet.name}
          </h3>
          <span className="text-[11px] text-text-light">{pet.age}</span>
        </div>

        <p className="text-[12px] text-text-light mb-4">
          {pet.locality} · by {pet.postedBy}
        </p>

        <div className="flex gap-2">
          <Link
            to="/pets"
            className="flex-1 text-center bg-bark-dark text-cream text-[12px] font-medium py-2 rounded-full hover:bg-rust transition-all duration-200"
          >
            View Pet
          </Link>
          <button
            onClick={onRemove}
            className="px-4 py-2 bg-red-50 text-red-400 text-[12px] rounded-full hover:bg-red-500 hover:text-white transition-all duration-200"
          >
            Remove
          </button>
        </div>
      </div>

    </div>
  );
}