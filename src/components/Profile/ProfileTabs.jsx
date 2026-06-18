import React from "react";

export default function ProfileStats({ posts, adoptedCount, savedCount, memberSince }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex items-center gap-6 pb-6 border-b border-border-brand flex-wrap">

        {/* Numbers */}
        {[
          { num: posts,         label: "Posts" },
          { num: adoptedCount,  label: "Adoptions" },
          { num: savedCount,    label: "Saved" },
          { num: memberSince,   label: "Member since" },
        ].map(s => (
          <div key={s.label}>
            <p className="font-display text-[1.3rem] font-semibold text-bark-dark leading-none">
              {s.num}
            </p>
            <p className="text-[11px] text-text-light mt-0.5 uppercase tracking-wide">
              {s.label}
            </p>
          </div>
        ))}

        {/* Badges */}
        <div className="flex gap-2 ml-auto flex-wrap">
          <span className="text-[11px] bg-sage-light text-sage px-3 py-1 rounded-full font-medium">
            ✓ Verified
          </span>
          <span className="text-[11px] bg-warm text-bark px-3 py-1 rounded-full font-medium border border-border-brand">
            🐾 {adoptedCount} Rescued
          </span>
        </div>

      </div>
    </div>
  );
}