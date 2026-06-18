import React from "react";
import { Link } from "react-router-dom";

export default function ProfileHeader({
  profile,
  avatarPreview,
  coverPreview,
  onAvatarChange,
  onCoverChange,
}) {
  return (
    <>
      {/* ── Cover photo ── */}
      <div className="relative h-48 md:h-60 bg-warm overflow-hidden">
        {coverPreview ? (
          <img
            src={coverPreview}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-warm via-tan to-warm flex items-end justify-end p-4">
            <label className="flex items-center gap-1.5 text-[12px] text-text-light cursor-pointer bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border-brand hover:bg-white transition-colors duration-200">
              <CameraIcon />
              Add cover photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onCoverChange}
              />
            </label>
          </div>
        )}
        {/* Decorative paw */}
        <div className="absolute top-4 left-6 text-[60px] opacity-10 select-none pointer-events-none rotate-12">
          🐾
        </div>
      </div>

      {/* ── Avatar + name row ── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 mb-6">

          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-full border-4 border-cream bg-warm overflow-hidden shadow-md flex items-center justify-center">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-display text-[2.2rem] font-semibold text-bark">
                  {profile.name.charAt(0)}
                </span>
              )}
            </div>

            {/* Avatar edit button */}
            <label className="absolute bottom-0 right-0 w-7 h-7 bg-bark-dark text-cream rounded-full flex items-center justify-center cursor-pointer hover:bg-rust transition-colors duration-200 shadow-md">
              <EditIcon />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onAvatarChange}
              />
            </label>
          </div>

          {/* Name + bio + post button */}
          <div className="sm:mb-2 flex-1">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                <h1 className="font-display text-[1.6rem] font-semibold text-bark-dark leading-tight">
                  {profile.name}
                </h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-rust">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-[13px] text-text-light">{profile.city}</span>
                </div>
                <p className="text-[13px] text-text-mid mt-1.5 max-w-md">{profile.bio}</p>
              </div>

              <Link
                to="/post"
                className="inline-flex items-center gap-2 bg-bark-dark text-cream px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-rust transition-all duration-200 active:scale-95"
              >
                + Post a Stray
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function CameraIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}