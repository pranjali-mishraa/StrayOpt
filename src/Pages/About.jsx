import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { num: "1,240", label: "Animals Posted" },
  { num: "890",   label: "Successfully Adopted" },
  { num: "3.4k",  label: "Community Members" },
  { num: "12",    label: "NGO Partners" },
];

const howItHelps = [
  {
    emoji: "🏠",
    title: "Finding Forever Homes",
    desc:  "StrayOpt connects stray animals with caring adopters in the same city. Anyone who spots a stray can post a photo and location — and within hours, interested adopters can reach out directly.",
  },
  {
    emoji: "🤝",
    title: "Supporting Local NGOs",
    desc:  "We partner with registered animal welfare NGOs across India. Every animal posted through an NGO partner is verified, vaccinated, and medically cleared before listing — giving adopters full confidence.",
  },
  {
    emoji: "💰",
    title: "Transparent Donations",
    desc:  "100% of donations collected through StrayOpt go directly to partner pet shelters. Funds cover food, veterinary care, vaccinations, and shelter maintenance — never admin fees.",
  },
  {
    emoji: "📍",
    title: "Community-Driven Rescue",
    desc:  "Our platform empowers everyday citizens. You don't need to be an NGO to help — spot a stray, post it, and let the community take it from there. Together we create a safety net for every street animal.",
  },
];

const donationFlow = [
  { step: "01", title: "You Donate",         desc: "Make a one-time or monthly contribution through our secure payment page." },
  { step: "02", title: "Funds Are Verified",  desc: "Every rupee is tracked and allocated to verified partner shelters only." },
  { step: "03", title: "Shelters Receive",    desc: "Partner NGOs receive funds directly for food, vet care, and daily operations." },
  { step: "04", title: "You See the Impact",  desc: "Monthly reports show exactly how your donation was spent and which animals were helped." },
];

const ngos = [
  { name: "Friendicoes SECA",    city: "Delhi",     animals: 200 },
  { name: "CARE India",          city: "Mumbai",    animals: 340 },
  { name: "Karuna Society",      city: "Pune",      animals: 180 },
  { name: "Blue Cross of India", city: "Chennai",   animals: 290 },
  { name: "People for Animals",  city: "Bangalore", animals: 220 },
  { name: "Animal Aid India",    city: "Jaipur",    animals: 150 },
];

export default function About() {
  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ── */}
      <section className="bg-bark-dark px-6 py-20 text-center relative overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-rust/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-40px] right-[-40px] w-60 h-60 bg-bark/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-rust text-[13px] font-medium uppercase tracking-widest mb-3">
            About StrayOpt
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold text-cream leading-tight mb-4">
            Every stray deserves a<br />
            <em className="italic text-rust">safe place to call home</em>
          </h1>
          <p className="text-cream/60 text-[15px] leading-relaxed max-w-lg mx-auto">
            StrayOpt is a free, community-powered platform that connects stray
            animals with loving adopters — while supporting NGOs and pet shelters
            across India through transparent donations.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-warm border-b border-border-brand px-6 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-display text-[2rem] font-semibold text-bark-dark leading-none">
                {s.num}
              </p>
              <p className="text-[12px] text-text-light mt-1 uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-14">

        {/* ── Our Purpose ── */}
        <div className="bg-white rounded-2xl border border-border-brand p-8">
          <SectionLabel text="Our Purpose" />
          <h2 className="font-display text-[1.7rem] font-semibold text-bark-dark mb-4">
            Why StrayOpt exists
          </h2>
          <p className="text-text-mid text-[14.5px] leading-relaxed mb-4">
            India has over <strong className="text-bark-dark">35 million stray animals</strong> living
            on its streets. Most of them are healthy, friendly, and capable of becoming
            wonderful companions — they just need someone to notice them.
          </p>
          <p className="text-text-mid text-[14.5px] leading-relaxed">
            StrayOpt was built to bridge the gap between the person who spots a stray
            and the person who wants to adopt one. By making it as simple as posting a
            photo, we remove every barrier that stands between a stray animal and a
            forever home.
          </p>
        </div>

        {/* ── How it helps ── */}
        <div className="bg-white rounded-2xl border border-border-brand p-8">
          <SectionLabel text="What We Do" />
          <h2 className="font-display text-[1.7rem] font-semibold text-bark-dark mb-8">
            How StrayOpt helps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {howItHelps.map(item => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl border border-border-brand bg-cream hover:bg-warm transition-colors duration-200"
              >
                <span className="text-[2rem] flex-shrink-0 mt-0.5">{item.emoji}</span>
                <div>
                  <h3 className="font-display text-[1rem] font-semibold text-bark-dark mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-text-mid text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Donation flow ── */}
        <div className="bg-white rounded-2xl border border-border-brand p-8">
          <SectionLabel text="Donations" />
          <h2 className="font-display text-[1.7rem] font-semibold text-bark-dark mb-2">
            Where your money goes
          </h2>
          <p className="text-text-light text-[14px] mb-8">
            We believe in full transparency. Here is exactly how every donation flows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {donationFlow.map((item, i) => (
              <div key={item.step} className="relative">

                {/* Connector line */}
                {i < donationFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(100%-8px)] w-full h-[2px] bg-border-brand z-0" />
                )}

                <div className="relative z-10 text-center p-5 rounded-xl border border-border-brand bg-cream h-full">
                  <div className="w-10 h-10 rounded-full bg-bark-dark text-cream font-display text-[14px] font-semibold flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-display text-[0.95rem] font-semibold text-bark-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-light text-[12px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Donation CTA */}
          <div className="mt-8 p-5 rounded-xl bg-warm border border-border-brand flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display text-[1rem] font-semibold text-bark-dark">
                Ready to make a difference?
              </p>
              <p className="text-text-light text-[13px] mt-0.5">
                Even ₹100 a month can feed a shelter animal for a week.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 bg-rust text-cream px-6 py-3 rounded-full text-[14px] font-medium hover:bg-rust-hover transition-all duration-200 active:scale-95 whitespace-nowrap shadow-[0_4px_14px_rgba(192,87,42,0.25)]">
              Donate Now 🐾
            </button>
          </div>
        </div>

        {/* ── NGO Partners ── */}
        <div className="bg-white rounded-2xl border border-border-brand p-8">
          <SectionLabel text="Our Partners" />
          <h2 className="font-display text-[1.7rem] font-semibold text-bark-dark mb-2">
            NGOs we work with
          </h2>
          <p className="text-text-light text-[14px] mb-8">
            All partner NGOs are registered, verified, and regularly audited.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ngos.map(ngo => (
              <div
                key={ngo.name}
                className="flex items-center gap-4 p-4 rounded-xl border border-border-brand bg-cream hover:bg-warm hover:border-bark transition-all duration-200"
              >
                {/* Logo placeholder */}
                <div className="w-11 h-11 rounded-xl bg-warm border border-border-brand flex items-center justify-center text-[20px] flex-shrink-0">
                  🐾
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-bark-dark">{ngo.name}</p>
                  <p className="text-[12px] text-text-light mt-0.5">{ngo.city}</p>
                  <p className="text-[11px] text-sage mt-0.5">
                    {ngo.animals}+ animals sheltered
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="bg-bark-dark rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute top-[-40px] right-[-40px] text-[120px] opacity-[0.04] select-none pointer-events-none rotate-12">🐾</div>
          <div className="relative z-10">
            <p className="font-display italic text-rust text-[13px] mb-3">
              "Until one has loved an animal, a part of one's soul remains unawakened."
            </p>
            <h3 className="font-display text-[1.6rem] font-semibold text-cream mb-2">
              Join the StrayOpt community
            </h3>
            <p className="text-cream/50 text-[14px] mb-7 max-w-sm mx-auto">
              Whether you adopt, post, or donate — every action saves a life.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                to="/pets"
                className="inline-flex items-center gap-2 bg-rust text-cream px-6 py-3 rounded-full text-[14px] font-medium hover:bg-rust-hover transition-all duration-200 active:scale-95"
              >
                Browse Pets 🐾
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-white/10 text-cream border border-white/20 px-6 py-3 rounded-full text-[14px] font-medium hover:bg-white/20 transition-all duration-200 active:scale-95"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Reusable section label ────────────────────
function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-6 h-[2px] bg-rust rounded-full" />
      <p className="text-rust text-[12px] font-medium uppercase tracking-widest">
        {text}
      </p>
    </div>
  );
}