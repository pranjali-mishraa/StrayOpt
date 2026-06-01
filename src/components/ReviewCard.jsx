import React from "react";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border-brand shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

      {/* ── Top: User info ── */}
      <div className="flex items-center gap-3 mb-4">

        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-warm border-2 border-border-brand flex items-center justify-center flex-shrink-0 text-[15px] font-semibold text-bark overflow-hidden">
          {review.avatar
            ? <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
            : review.name.charAt(0).toUpperCase()
          }
        </div>

        {/* Name + location */}
        <div>
          <p className="text-[14px] font-semibold text-bark-dark leading-tight">
            {review.name}
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-rust" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-[11px] text-text-light">{review.location}</span>
          </div>
        </div>

        {/* Pet emoji top right */}
        <div className="ml-auto text-2xl" aria-label={`Adopted a ${review.petType}`}>
          {review.petType === "Dog" ? "🐕" : review.petType === "Cat" ? "🐈" : "🐾"}
        </div>

      </div>

      {/* ── Star rating ── */}
      <div className="flex items-center gap-0.5 mb-3" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="13" height="13" viewBox="0 0 24 24"
            fill={i < review.rating ? "#C0572A" : "none"}
            stroke={i < review.rating ? "#C0572A" : "#D6C5B0"}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* ── Big quote mark ── */}
      <p className="font-display text-[3.5rem] leading-none text-rust/20 -mb-4 select-none" aria-hidden="true">
        "
      </p>

      {/* ── Review text ── */}
      <p className="text-text-mid text-[13.5px] leading-relaxed mb-5">
        {review.feeling}
      </p>

      {/* ── Adopted pet tag ── */}
      <div className="flex items-center gap-2 pt-3 border-t border-border-brand">
        <span className="text-[11px] text-text-light">Adopted</span>
        <span className="bg-sage-light text-sage text-[11px] font-medium px-2.5 py-0.5 rounded-full">
          {review.petName}
        </span>
        <span className="text-[11px] text-text-light ml-auto">{review.date}</span>
      </div>

    </div>
  );
}