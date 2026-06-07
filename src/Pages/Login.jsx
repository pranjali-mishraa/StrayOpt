import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin]       = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm]   = useState(false);
  const [loading, setLoading]           = useState(false);
  const [otpSent, setOtpSent]           = useState(false);
  const [errors, setErrors]             = useState({});

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    otp: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};
    if (!isLogin) {
      if (!form.firstName.trim()) newErrors.firstName = "First name is required";
      if (!form.lastName.trim())  newErrors.lastName  = "Last name is required";
      if (form.password !== form.confirm) newErrors.confirm = "Passwords do not match";
      if (form.password.length < 6) newErrors.password = "Minimum 6 characters";
    }
    if (!form.email.trim())    newErrors.email    = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // ── This will call your Node.js API in future ──
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // TODO: replace with real API call
    // const res = await fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: form.email, password: form.password })
    // });

    await new Promise(r => setTimeout(r, 1500)); // dummy delay
    setLoading(false);

    if (!isLogin) {
      // TODO: after register → trigger OTP send
      setOtpSent(true);
    }
  }

  // ── Will call /api/auth/verify-otp in future ──
  async function handleOtpVerify(e) {
    e.preventDefault();
    if (!form.otp.trim()) return setErrors({ otp: "Please enter the OTP" });
    setLoading(true);

    // TODO: replace with real API call
    // const res = await fetch("/api/auth/verify-otp", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: form.email, otp: form.otp })
    // });

    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    alert("OTP Verified! (wire to real API later)");
  }

  return (
    <div className="min-h-screen bg-cream flex">

      {/* ── Left decorative panel ── */}
      <div className="hidden lg:flex flex-col justify-between w-[42%] bg-bark-dark relative overflow-hidden px-12 py-14">

        {/* Animated blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[320px] h-[320px] bg-rust/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[260px] h-[260px] bg-bark/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-rust/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 relative z-10">
          <div className="w-[36px] h-[36px] bg-rust rounded-[10px] flex items-center justify-center text-[18px]">
            🐾
          </div>
          <span className="font-display text-[22px] font-semibold text-cream tracking-tight">
            Stray<em className="italic text-rust">Opt</em>
          </span>
        </Link>

        {/* Center content */}
        <div className="relative z-10">
          {/* Floating paw */}
          <div className="text-[72px] mb-6 animate-float inline-block">🐾</div>

          <h2 className="font-display text-[2.2rem] font-light text-cream leading-tight mb-4">
            Give a stray<br />
            <em className="italic text-rust">a reason to wag</em>
          </h2>

          <p className="text-cream/60 text-[14px] leading-relaxed mb-10 max-w-[300px]">
            Join thousands of caring people across India helping stray animals
            find their forever homes.
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { num: "1,240", label: "Animals Posted" },
              { num: "890",   label: "Adopted" },
              { num: "3.4k",  label: "Members" },
            ].map(s => (
              <div key={s.label}>
                <p className="font-display text-[1.6rem] font-semibold text-cream">{s.num}</p>
                <p className="text-[11px] text-cream/40 uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative z-10 border-l-2 border-rust pl-4">
          <p className="font-display italic text-[13px] text-cream/60 leading-relaxed">
            "Until one has loved an animal, a part of one's soul remains unawakened."
          </p>
          <p className="text-[11px] text-cream/30 mt-1">— Anatole France</p>
        </div>

      </div>

      {/* ── Right form side ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative overflow-hidden">

        {/* Subtle background paw watermark */}
        <div className="absolute bottom-[-40px] right-[-40px] text-[200px] opacity-[0.03] select-none pointer-events-none rotate-12">
          🐾
        </div>

        <div className="w-full max-w-[420px] relative z-10">

          {/* ── Toggle: Login / Register ── */}
          <div className="flex bg-warm rounded-2xl p-1 mb-8 border border-border-brand">
            {["Sign In", "Register"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => { setIsLogin(i === 0); setErrors({}); setOtpSent(false); }}
                className={`flex-1 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-300 ${
                  isLogin === (i === 0)
                    ? "bg-bark-dark text-cream shadow-md"
                    : "text-text-mid hover:text-bark"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── Heading ── */}
          <div className="mb-8">
            <h1 className="font-display text-[2rem] font-semibold text-bark-dark leading-tight">
              {otpSent
                ? "Verify your email"
                : isLogin
                ? "Welcome back 👋"
                : "Create account"}
            </h1>
            <p className="text-text-light text-[14px] mt-1">
              {otpSent
                ? `We sent a 6-digit OTP to ${form.email}`
                : isLogin
                ? "Sign in to continue helping strays find homes"
                : "Join StrayOpt and start making a difference"}
            </p>
          </div>

          {/* ── OTP Screen ── */}
          {otpSent ? (
            <form onSubmit={handleOtpVerify} noValidate>

              {/* OTP input */}
              <div className="mb-5">
                <label className="block text-[13px] font-medium text-text-mid mb-1.5">
                  Enter OTP
                </label>
                <input
                  name="otp"
                  type="text"
                  maxLength={6}
                  placeholder="• • • • • •"
                  value={form.otp}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 text-center text-[1.4rem] tracking-[0.5em] border rounded-xl outline-none transition-all duration-200 placeholder:text-text-light/40 placeholder:tracking-normal
                    ${errors.otp ? "border-red-400 ring-2 ring-red-100" : "border-border-brand focus:border-bark focus:ring-2 focus:ring-bark/20"}`}
                />
                {errors.otp && <p className="text-red-500 text-[12px] mt-1">{errors.otp}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-bark-dark text-cream rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 hover:bg-rust transition-all duration-200 hover:shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? <Spinner /> : "Verify OTP"}
              </button>

              <button
                type="button"
                onClick={() => setOtpSent(false)}
                className="w-full mt-3 text-[13px] text-text-light hover:text-bark transition-colors duration-200"
              >
                ← Go back
              </button>

            </form>

          ) : (

            // ── Main form ──
            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              {/* First + Last name — register only */}
              {!isLogin && (
                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Riya"
                    value={form.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    autoComplete="given-name"
                  />
                  <Field
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Sharma"
                    value={form.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    autoComplete="family-name"
                  />
                </div>
              )}

              {/* Email */}
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                autoComplete="email"
                icon={<EnvelopeIcon />}
              />

              {/* Password */}
              <div>
                <label className="block text-[13px] font-medium text-text-mid mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-light">
                    <LockIcon />
                  </span>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 6 characters"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    className={`w-full h-11 pl-10 pr-10 border rounded-xl text-[14px] text-text outline-none transition-all duration-200 placeholder:text-text-light
                      ${errors.password ? "border-red-400 ring-2 ring-red-100" : "border-border-brand focus:border-bark focus:ring-2 focus:ring-bark/20"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(s => !s)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-light hover:text-bark transition-colors"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-[12px] mt-1">{errors.password}</p>}
              </div>

              {/* Confirm password — register only */}
              {!isLogin && (
                <div>
                  <label className="block text-[13px] font-medium text-text-mid mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-light">
                      <LockIcon />
                    </span>
                    <input
                      name="confirm"
                      type={showConfirm ? "text" : "password"}
                      placeholder="Repeat password"
                      value={form.confirm}
                      onChange={handleChange}
                      autoComplete="new-password"
                      className={`w-full h-11 pl-10 pr-10 border rounded-xl text-[14px] text-text outline-none transition-all duration-200 placeholder:text-text-light
                        ${errors.confirm ? "border-red-400 ring-2 ring-red-100" : "border-border-brand focus:border-bark focus:ring-2 focus:ring-bark/20"}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(s => !s)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-light hover:text-bark transition-colors"
                    >
                      {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {errors.confirm && <p className="text-red-500 text-[12px] mt-1">{errors.confirm}</p>}
                </div>
              )}

              {/* Forgot password — login only */}
              {isLogin && (
                <div className="text-right -mt-1">
                  <button type="button" className="text-[13px] text-rust hover:opacity-75 transition-opacity">
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-bark-dark text-cream rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 hover:bg-rust transition-all duration-200 hover:shadow-[0_4px_20px_rgba(192,87,42,0.3)] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading
                  ? <Spinner />
                  : isLogin
                  ? "Sign In"
                  : "Create Account & Get OTP 🐾"
                }
              </button>

              {/* OTP note for register */}
              {!isLogin && (
                <p className="text-[12px] text-text-light text-center">
                  After registering, a 6-digit OTP will be sent to your email to verify your account.
                </p>
              )}

            </form>
          )}

        </div>
      </div>
    </div>
  );
}

// ── Reusable field component ─────────────────────
function Field({ label, name, type, placeholder, value, onChange, error, autoComplete, icon }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-text-mid mb-1.5">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-light">
            {icon}
          </span>
        )}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className={`w-full h-11 border rounded-xl text-[14px] text-text outline-none transition-all duration-200 placeholder:text-text-light
            ${icon ? "pl-10 pr-4" : "px-4"}
            ${error
              ? "border-red-400 ring-2 ring-red-100"
              : "border-border-brand focus:border-bark focus:ring-2 focus:ring-bark/20"
            }`}
        />
      </div>
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </div>
  );
}

// ── Icons ────────────────────────────────────────
function EnvelopeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        strokeOpacity="0.3" />
      <path d="M12 2v4" />
    </svg>
  );
}