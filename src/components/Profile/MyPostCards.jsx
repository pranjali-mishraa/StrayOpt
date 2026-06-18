import React from "react";

export default function MyPostCard({ post, onAdopt, onDelete, adopted }) {
  return (
    <div className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
      adopted
        ? "border-sage/40 opacity-75"
        : "border-border-brand hover:shadow-md"
    }`}>

      {/* Image */}
      <div className="relative h-40 bg-warm overflow-hidden">
        {post.images?.[0] ? (
          <img
            src={post.images[0]}
            alt={post.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🐾</span>
          </div>
        )}

        {/* Status badge */}
        {adopted ? (
          <span className="absolute top-3 left-3 bg-sage text-white text-[11px] font-medium px-3 py-1 rounded-full">
            🎉 Adopted
          </span>
        ) : post.urgent ? (
          <span className="absolute top-3 left-3 bg-rust text-cream text-[11px] font-medium px-3 py-1 rounded-full">
            ⚡ Urgent
          </span>
        ) : null}

        <span className="absolute top-3 right-3 bg-white/90 text-bark text-[11px] px-2.5 py-0.5 rounded-full border border-border-brand">
          {post.species === "Dog" ? "🐕" : "🐈"} {post.species}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-display text-[1rem] font-semibold text-bark-dark">
            {post.name}
          </h3>
          <span className="text-[11px] text-text-light bg-warm px-2 py-0.5 rounded-full border border-border-brand">
            {post.age}
          </span>
        </div>

        <div className="flex items-center gap-1.5 mb-2">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="text-rust">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-[12px] text-text-light">{post.locality}</span>
        </div>

        <p className="text-[12px] text-text-mid line-clamp-2 mb-4">
          {post.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border-brand">
          <span className="text-[11px] text-text-light">Posted {post.postedOn}</span>

          <div className="flex gap-2">
            {!adopted && (
              <button
                onClick={onAdopt}
                className="inline-flex items-center gap-1.5 bg-sage-light text-sage text-[12px] font-medium px-3 py-1.5 rounded-full hover:bg-sage hover:text-white transition-all duration-200 active:scale-95"
              >
                🎉 Adopted
              </button>
            )}
            <button
              onClick={onDelete}
              className="inline-flex items-center gap-1.5 bg-red-50 text-red-500 text-[12px] font-medium px-3 py-1.5 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200 active:scale-95"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}