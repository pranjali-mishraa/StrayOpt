import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const MAX_IMAGES = 5;

export default function PostStray() {
  const [images, setImages]         = useState([]); // { file, preview }
  const [dragOver, setDragOver]     = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [loading, setLoading]       = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [errors, setErrors]         = useState({});

  const fileInputRef   = useRef(null);
  const videoRef       = useRef(null);
  const canvasRef      = useRef(null);
  const streamRef      = useRef(null);

  const [form, setForm] = useState({
    petName:     "",
    species:     "",
    breed:       "",
    age:         "",
    gender:      "",
    color:       "",
    locality:    "",
    city:        "",
    health:      "",
    description: "",
    urgent:      false,
    vaccinated:  false,
    neutered:    false,
  });

  // ── Form change ──────────────────────────────
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  }

  // ── Add images from file picker / drag ───────
  function addImages(files) {
    const remaining = MAX_IMAGES - images.length;
    if (remaining <= 0) return;

    const toAdd = Array.from(files).slice(0, remaining).map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages(prev => [...prev, ...toAdd]);
  }

  function handleFileInput(e) {
    addImages(e.target.files);
    e.target.value = "";
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    addImages(e.dataTransfer.files);
  }

  function removeImage(index) {
    setImages(prev => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  }

  // ── Camera ───────────────────────────────────
  async function openCamera() {
    if (images.length >= MAX_IMAGES) return;
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current     = stream;
      videoRef.current.srcObject = stream;
    } catch {
      alert("Camera permission denied or not available.");
      setCameraOpen(false);
    }
  }

  function capturePhoto() {
    const video  = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width  = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    canvas.toBlob(blob => {
      const file    = new File([blob], `capture-${Date.now()}.jpg`, { type: "image/jpeg" });
      const preview = URL.createObjectURL(blob);
      setImages(prev => [...prev, { file, preview, name: file.name }]);
      closeCamera();
    }, "image/jpeg", 0.92);
  }

  function closeCamera() {
    streamRef.current?.getTracks().forEach(t => t.stop());
    streamRef.current = null;
    setCameraOpen(false);
  }

  // ── Validation ───────────────────────────────
  function validate() {
    const e = {};
    if (!form.petName.trim())  e.petName  = "Name is required";
    if (!form.species)         e.species  = "Select a species";
    if (!form.locality.trim()) e.locality = "Locality is required";
    if (!form.city.trim())     e.city     = "City is required";
    if (!form.description.trim()) e.description = "Description is required";
    if (images.length === 0)   e.images   = "Upload at least one photo";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Submit — will call Multer/Node backend ───
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // TODO: replace with real API call using FormData (required for Multer)
    // const formData = new FormData();
    // images.forEach(img => formData.append("photos", img.file));
    // Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    // const res = await fetch("/api/pets", {
    //   method: "POST",
    //   headers: { Authorization: `Bearer ${token}` },
    //   body: formData   ← DO NOT set Content-Type, browser sets it with boundary
    // });

    await new Promise(r => setTimeout(r, 2000)); // dummy delay
    setLoading(false);
    setSubmitted(true);
  }

  // ── Success screen ───────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="text-[72px] animate-float inline-block mb-4">🐾</div>
          <h2 className="font-display text-[2rem] font-semibold text-bark-dark mb-3">
            Posted successfully!
          </h2>
          <p className="text-text-mid text-[14px] leading-relaxed mb-8">
            Your post is live. Caring people in your community can now see this
            animal and reach out to you about adoption.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/pets"
              className="inline-flex items-center gap-2 bg-bark-dark text-cream px-6 py-3 rounded-full text-[14px] font-medium hover:bg-rust transition-all duration-200"
            >
              View All Pets
            </Link>
            <button
              onClick={() => { setSubmitted(false); setImages([]); setForm({ petName:"",species:"",breed:"",age:"",gender:"",color:"",locality:"",city:"",health:"",description:"",urgent:false,vaccinated:false,neutered:false }); }}
              className="inline-flex items-center gap-2 border-2 border-bark text-bark px-6 py-3 rounded-full text-[14px] font-medium hover:bg-warm transition-all duration-200"
            >
              Post Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Page header ── */}
      <div className="bg-warm border-b border-border-brand px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-text-light hover:text-bark transition-colors duration-200 mb-4"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-display text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-bark-dark">
            Post a Stray Animal
          </h1>
          <p className="text-text-light text-[14px] mt-1">
            Help connect a stray with a loving adopter in your community
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">

          {/* ── SECTION 1: Photos ── */}
          <Section title="Photos" icon="📸" subtitle={`Upload up to ${MAX_IMAGES} photos · ${images.length}/${MAX_IMAGES} added`}>

            {/* Upload buttons */}
            {images.length < MAX_IMAGES && (
              <div className="flex gap-3 flex-wrap mb-4">

                {/* Choose from gallery */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="inline-flex items-center gap-2 bg-bark-dark text-cream px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-rust transition-all duration-200 active:scale-95"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  Choose from Gallery
                </button>

                {/* Click picture */}
                <button
                  type="button"
                  onClick={openCamera}
                  className="inline-flex items-center gap-2 bg-white text-bark border border-border-brand px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-warm hover:border-bark transition-all duration-200 active:scale-95"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  Click Picture
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileInput}
                />
              </div>
            )}

            {/* Drag & drop zone */}
            {images.length < MAX_IMAGES && (
              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
                className={`border-2 border-dashed rounded-2xl py-10 text-center cursor-pointer transition-all duration-200 ${
                  dragOver
                    ? "border-rust bg-rust/5 scale-[1.01]"
                    : "border-border-brand bg-warm/40 hover:border-bark hover:bg-warm/80"
                }`}
              >
                <div className="text-4xl mb-3">🐾</div>
                <p className="text-[14px] text-text-mid font-medium">
                  Drag & drop photos here
                </p>
                <p className="text-[12px] text-text-light mt-1">
                  or click to browse · JPG, PNG up to 10MB each
                </p>
              </div>
            )}

            {/* Image error */}
            {errors.images && (
              <p className="text-red-500 text-[12px] mt-2">{errors.images}</p>
            )}

            {/* Image previews */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
                {images.map((img, i) => (
                  <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-border-brand">
                    <img
                      src={img.preview}
                      alt={`Preview ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-1.5 right-1.5 w-6 h-6 bg-red-500 text-white rounded-full text-[11px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                      aria-label="Remove photo"
                    >
                      ✕
                    </button>
                    {/* Index badge */}
                    <div className="absolute bottom-1.5 left-1.5 w-5 h-5 bg-black/50 text-white text-[10px] rounded-full flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                ))}

                {/* Empty slot indicators */}
                {Array.from({ length: MAX_IMAGES - images.length }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    onClick={() => fileInputRef.current.click()}
                    className="aspect-square rounded-xl border-2 border-dashed border-border-brand flex items-center justify-center cursor-pointer hover:border-bark hover:bg-warm transition-all duration-200"
                  >
                    <span className="text-text-light text-[20px]">+</span>
                  </div>
                ))}
              </div>
            )}

          </Section>

          {/* ── SECTION 2: Animal Details ── */}
          <Section title="Animal Details" icon="🐾" subtitle="Tell us about this animal">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Pet Name / Nickname"
                name="petName"
                placeholder="Bruno, Mittens…"
                value={form.petName}
                onChange={handleChange}
                error={errors.petName}
              />
              <SelectField
                label="Species"
                name="species"
                value={form.species}
                onChange={handleChange}
                error={errors.species}
                options={["Dog", "Cat", "Rabbit", "Bird", "Other"]}
                placeholder="Select species"
              />
              <Field
                label="Breed (if known)"
                name="breed"
                placeholder="Indie Mix, Tabby…"
                value={form.breed}
                onChange={handleChange}
              />
              <SelectField
                label="Estimated Age"
                name="age"
                value={form.age}
                onChange={handleChange}
                options={["Under 3 months", "3–6 months", "6–12 months", "1–3 years", "3–7 years", "7+ years"]}
                placeholder="Select age"
              />
              <SelectField
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                options={["Male", "Female", "Unknown"]}
                placeholder="Select gender"
              />
              <Field
                label="Color / Markings"
                name="color"
                placeholder="Brown with white patches…"
                value={form.color}
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div className="mt-4">
              <label className="block text-[13px] font-medium text-text-mid mb-1.5">
                Description <span className="text-rust">*</span>
              </label>
              <textarea
                name="description"
                rows={4}
                placeholder="Describe the animal's personality, how you found them, behaviour around people, any health concerns…"
                value={form.description}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl text-[14px] text-text outline-none resize-none transition-all duration-200 placeholder:text-text-light
                  ${errors.description
                    ? "border-red-400 ring-2 ring-red-100"
                    : "border-border-brand focus:border-bark focus:ring-2 focus:ring-bark/20"
                  }`}
              />
              {errors.description && (
                <p className="text-red-500 text-[12px] mt-1">{errors.description}</p>
              )}
            </div>

          </Section>

          {/* ── SECTION 3: Location ── */}
          <Section title="Location" icon="📍" subtitle="Where is this animal currently located?">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Locality / Area"
                name="locality"
                placeholder="Hauz Khas, Lajpat Nagar…"
                value={form.locality}
                onChange={handleChange}
                error={errors.locality}
              />
              <Field
                label="City"
                name="city"
                placeholder="Delhi"
                value={form.city}
                onChange={handleChange}
                error={errors.city}
              />
            </div>
          </Section>

          {/* ── SECTION 4: Health & Urgency ── */}
          <Section title="Health & Urgency" icon="🏥" subtitle="Help adopters understand the animal's condition">

            <SelectField
              label="Health Status"
              name="health"
              value={form.health}
              onChange={handleChange}
              options={["Appears Healthy", "Needs Vet Care", "Currently in Foster Care", "Recently Treated"]}
              placeholder="Select health status"
            />

            <div className="flex flex-col gap-3 mt-4">
              {[
                { name: "vaccinated", label: "Vaccinated",                     emoji: "💉" },
                { name: "neutered",   label: "Spayed / Neutered",               emoji: "✂️" },
                { name: "urgent",     label: "Mark as Urgent — needs home ASAP", emoji: "⚡" },
              ].map(opt => (
                <label
                  key={opt.name}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                    form[opt.name]
                      ? "border-bark bg-warm"
                      : "border-border-brand bg-white hover:bg-warm/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    name={opt.name}
                    checked={form[opt.name]}
                    onChange={handleChange}
                    className="w-4 h-4 accent-bark-dark"
                  />
                  <span className="text-[14px]">{opt.emoji}</span>
                  <span className="text-[13.5px] text-text-mid font-medium">{opt.label}</span>
                </label>
              ))}
            </div>

          </Section>

          {/* ── Submit ── */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-13 py-4 bg-bark-dark text-cream rounded-2xl font-medium text-[16px] flex items-center justify-center gap-2 hover:bg-rust transition-all duration-200 hover:shadow-[0_4px_20px_rgba(192,87,42,0.3)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"
                    strokeOpacity="0.3" />
                  <path d="M12 2v4" />
                </svg>
                Posting…
              </>
            ) : (
              "Post Animal 🐾"
            )}
          </button>

        </div>
      </form>

      {/* ── Camera Modal ── */}
      {cameraOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-4">

          <div className="bg-black rounded-2xl overflow-hidden w-full max-w-md">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full aspect-video object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />
          </div>

          <div className="flex gap-4 mt-6">
            {/* Capture */}
            <button
              type="button"
              onClick={capturePhoto}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
              aria-label="Capture photo"
            >
              <div className="w-12 h-12 bg-rust rounded-full" />
            </button>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={closeCamera}
            className="mt-4 text-white/60 text-[13px] hover:text-white transition-colors"
          >
            Cancel
          </button>

          <p className="text-white/40 text-[12px] mt-2">
            {MAX_IMAGES - images.length} photo{MAX_IMAGES - images.length !== 1 ? "s" : ""} remaining
          </p>

        </div>
      )}

    </div>
  );
}

// ── Reusable section wrapper ─────────────────────────
function Section({ title, icon, subtitle, children }) {
  return (
    <div className="bg-white rounded-2xl border border-border-brand p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[18px]">{icon}</span>
        <h2 className="font-display text-[1.1rem] font-semibold text-bark-dark">{title}</h2>
      </div>
      {subtitle && <p className="text-[12px] text-text-light mb-5">{subtitle}</p>}
      {children}
    </div>
  );
}

// ── Reusable text input ──────────────────────────────
function Field({ label, name, placeholder, value, onChange, error, required }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-text-mid mb-1.5">
        {label} {required && <span className="text-rust">*</span>}
      </label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-11 px-4 border rounded-xl text-[14px] text-text outline-none transition-all duration-200 placeholder:text-text-light
          ${error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-border-brand focus:border-bark focus:ring-2 focus:ring-bark/20"
          }`}
      />
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </div>
  );
}

// ── Reusable select ──────────────────────────────────
function SelectField({ label, name, value, onChange, options, placeholder, error }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-text-mid mb-1.5">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full h-11 px-4 border rounded-xl text-[14px] text-text outline-none transition-all duration-200 bg-white cursor-pointer
          ${error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-border-brand focus:border-bark focus:ring-2 focus:ring-bark/20"
          }
          ${!value ? "text-text-light" : "text-text"}`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </div>
  );
}