import React from "react";
import SavedPetCard from "./SavedPetCard";
import EmptyState   from "./EmptyState";

export default function SavedPetsTab({ saved, onRemove }) {
  if (saved.length === 0) {
    return (
      <EmptyState
        emoji="❤️"
        title="No saved pets"
        sub="Heart a pet on the Pets page to save it here"
        action={{ label: "Browse Pets", to: "/pets" }}
      />
    );
  }

  return (
    <div className="pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {saved.map(pet => (
          <SavedPetCard
            key={pet.id}
            pet={pet}
            onRemove={() => onRemove(pet.id)}
          />
        ))}
      </div>
    </div>
  );
}