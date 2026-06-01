import React from "react";
import { Link } from "react-router-dom";
import PetGrid from "../components/PetGrid";
import ReviewGrid from "../components/ReviewGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-warm">

        {/* Left content */}
        <div className="relative z-10 w-full max-w-xl px-8 md:px-16 lg:px-24">

          {/* Eyebrow */}
          <p className="text-rust text-[13px] font-medium uppercase tracking-widest mb-4">
            🐾 Find your new best friend
          </p>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.8rem,5vw,4.2rem)] font-semibold text-bark-dark leading-[1.1] mb-4">
            Ready to{" "}
            <span className="relative inline-block">
              Adopt!
              {/* Underline squiggle */}
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,8 C50,0 100,12 150,4 C175,0 190,8 200,6"
                  stroke="#C0572A"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-text-mid text-[16px] leading-relaxed mb-10 max-w-md">
            Every stray deserves a warm home and a loving family. Browse animals
            posted by caring people in your community and give one a forever home.
          </p>

          {/* CTA Button */}
          <Link
            to="/pets"
            className="
              inline-flex items-center gap-3
              bg-rust text-cream
              px-8 py-4 rounded-full
              text-[15px] font-medium
              shadow-[0_4px_20px_rgba(192,87,42,0.35)]
              transition-all duration-300
              hover:bg-rust-hover hover:shadow-[0_6px_28px_rgba(192,87,42,0.45)] hover:-translate-y-0.5
              active:scale-95
            "
          >
            View Available Pets
            <span className="bg-white/20 rounded-full p-1">
              <svg
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border-brand">
            {[
              { num: "1,240", label: "Animals Posted" },
              { num: "890",   label: "Adopted" },
              { num: "3.4k",  label: "Members" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-[1.6rem] font-semibold text-bark-dark leading-none">
                  {s.num}
                </p>
                <p className="text-[12px] text-text-light mt-1 uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero image */}
        <div className="
          absolute right-0 top-0 bottom-0
          w-[55%] hidden md:block
        ">
          {/* Replace src with your actual image */}
          <img
            src="/LandingImage.png"
            alt="A happy dog ready for adoption"
            className="w-full h-full object-cover object-center"
          />

          {/* Gradient fade on the left edge so text stays readable */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-warm to-transparent" />
        </div>

        {/* Wave at the bottom */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="#FDF6EE"
            />
          </svg>
        </div>

      </section>

            {/* ── HOW IT WORKS SECTION ── */}
<section className="bg-cream py-20 px-6">

{/* Section header */}
<div className="text-center mb-16">
  <div className="flex items-center justify-center gap-3 mb-3">
    <span className="w-8 h-[2px] bg-rust rounded-full" />
    <p className="text-rust text-[13px] font-medium uppercase tracking-widest">
      How It Works
    </p>
    <span className="w-8 h-[2px] bg-rust rounded-full" />
  </div>
  <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-bark-dark">
    Pet Adoption Process
  </h2>
</div>

{/* Steps grid */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

  {/* ── Step 1 ── */}
  <div className="flex flex-col items-center text-center group">
    {/* Blob image container */}
    <div className="relative w-[220px] h-[220px] mb-8">
      {/* Rust blob behind */}
      <div className="absolute inset-0 bg-rust rounded-[60%_40%_55%_45%/50%_60%_40%_50%] scale-110 transition-transform duration-500 group-hover:scale-115" />
      {/* Warm blob */}
      <div className="absolute inset-2 bg-warm rounded-[55%_45%_60%_40%/45%_55%_45%_55%] overflow-hidden">
        {/* Replace src with your step 1 image */}
        <img
          src="/step1.jpg"
          alt="Person uploading a stray animal photo"
          className="w-full h-full object-cover"
        />
        {/* Fallback if no image */}
        <div className="absolute inset-0 flex items-center justify-center bg-warm">
          <span className="text-6xl">📸</span>
        </div>
      </div>
      {/* Step number badge */}
      <div className="absolute -top-2 -right-2 w-12 h-12 bg-cream border-4 border-warm rounded-full flex items-center justify-center shadow-md z-10">
        <span className="font-display text-[1.3rem] font-bold text-rust">1</span>
      </div>
    </div>

    <h3 className="font-display text-[1.3rem] font-semibold text-bark-dark mb-3">
      Spot & Upload
    </h3>
    <p className="text-text-mid text-[14.5px] leading-relaxed max-w-[240px]">
      Found a stray nearby? Take a photo, add the location and a short
      description, and post it on StrayOpt in under a minute.
    </p>
  </div>

  {/* ── Step 2 ── */}
  <div className="flex flex-col items-center text-center group">
    <div className="relative w-[220px] h-[220px] mb-8">
      <div className="absolute inset-0 bg-bark rounded-[45%_55%_40%_60%/60%_40%_55%_45%] scale-110 transition-transform duration-500 group-hover:scale-115" />
      <div className="absolute inset-2 bg-warm rounded-[50%_50%_55%_45%/45%_55%_50%_50%] overflow-hidden">
        <img
          src="/step2.jpg"
          alt="User contacting the poster"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-warm">
          <span className="text-6xl">💬</span>
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-12 h-12 bg-cream border-4 border-warm rounded-full flex items-center justify-center shadow-md z-10">
        <span className="font-display text-[1.3rem] font-bold text-bark">2</span>
      </div>
    </div>

    <h3 className="font-display text-[1.3rem] font-semibold text-bark-dark mb-3">
      Connect & Ask
    </h3>
    <p className="text-text-mid text-[14.5px] leading-relaxed max-w-[240px]">
      See an animal you'd like to adopt? Message the person who posted it
      directly through StrayOpt and arrange a time to meet.
    </p>
  </div>

  {/* ── Step 3 ── */}
  <div className="flex flex-col items-center text-center group">
    <div className="relative w-[220px] h-[220px] mb-8">
      <div className="absolute inset-0 bg-rust rounded-[55%_45%_45%_55%/40%_60%_40%_60%] scale-110 transition-transform duration-500 group-hover:scale-115" />
      <div className="absolute inset-2 bg-warm rounded-[45%_55%_50%_50%/55%_45%_55%_45%] overflow-hidden">
        <img
          src="/step3.jpg"
          alt="Person taking a pet home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-warm">
          <span className="text-6xl">🏡</span>
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-12 h-12 bg-cream border-4 border-warm rounded-full flex items-center justify-center shadow-md z-10">
        <span className="font-display text-[1.3rem] font-bold text-rust">3</span>
      </div>
    </div>

    <h3 className="font-display text-[1.3rem] font-semibold text-bark-dark mb-3">
      Visit & Adopt
    </h3>
    <p className="text-text-mid text-[14.5px] leading-relaxed max-w-[240px]">
      Visit the locality, meet the animal, and if it feels right — take them
      home. Give a stray the forever family they deserve.
    </p>
  </div>

</div>

{/* Bottom CTA */}
<div className="text-center mt-16">
  <p className="text-text-light text-[14px] mb-4">Ready to make a difference?</p>
  <div className="flex items-center justify-center gap-4 flex-wrap">

<Link
  to="/pets"
  className="inline-flex items-center gap-2 bg-rust text-cream px-7 py-3.5 rounded-full text-[14px] font-medium shadow-[0_4px_16px_rgba(192,87,42,0.3)] hover:bg-rust-hover hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
>
  Browse Animals 🐾
</Link>

<Link
  to="/post"
  className="inline-flex items-center gap-2 bg-transparent text-bark border-2 border-bark px-7 py-3.5 rounded-full text-[14px] font-medium hover:bg-warm transition-all duration-200 active:scale-95"
>
  Post a Stray
</Link>

</div>
</div>
</section>
        
<PetGrid />      
<ReviewGrid />
    </main>
  );
}