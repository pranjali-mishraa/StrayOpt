import React from "react";

export default function EditProfileTab({ editForm, onChange, onSubmit, saved }) {
  return (
    <div className="pb-12 max-w-lg">
      <form onSubmit={onSubmit} className="space-y-5">

        <div className="bg-white rounded-2xl border border-border-brand p-6 space-y-4">
          <h3 className="font-display text-[1rem] font-semibold text-bark-dark">
            Personal Info
          </h3>

          {/* Full name */}
          <div>
            <label className="block text-[13px] font-medium text-text-mid mb-1.5">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              value={editForm.name}
              onChange={onChange}
              className="w-full h-11 px-4 border border-border-brand rounded-xl text-[14px] text-text outline-none focus:border-bark focus:ring-2 focus:ring-bark/20 transition-all duration-200"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-[13px] font-medium text-text-mid mb-1.5">
              City
            </label>
            <input
              name="city"
              type="text"
              value={editForm.city}
              onChange={onChange}
              className="w-full h-11 px-4 border border-border-brand rounded-xl text-[14px] text-text outline-none focus:border-bark focus:ring-2 focus:ring-bark/20 transition-all duration-200"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-[13px] font-medium text-text-mid mb-1.5">
              Bio
            </label>
            <textarea
              name="bio"
              rows={3}
              value={editForm.bio}
              onChange={onChange}
              className="w-full px-4 py-3 border border-border-brand rounded-xl text-[14px] text-text outline-none resize-none focus:border-bark focus:ring-2 focus:ring-bark/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Save button */}
        <button
          type="submit"
          className={`w-full h-12 rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
            saved
              ? "bg-sage text-white"
              : "bg-bark-dark text-cream hover:bg-rust hover:shadow-lg"
          }`}
        >
          {saved ? "✓ Changes Saved!" : "Save Changes"}
        </button>

      </form>
    </div>
  );
}