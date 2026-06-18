import React from "react";

const TABS = ["My Posts", "Saved Pets", "Edit Profile"];

export default function ProfileTabs({ activeTab, setActiveTab, postCount }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex gap-0 border-b border-border-brand mt-2 mb-8">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3.5 text-[14px] font-medium border-b-2 transition-all duration-200 ${
              activeTab === tab
                ? "border-bark-dark text-bark-dark"
                : "border-transparent text-text-light hover:text-text-mid"
            }`}
          >
            {tab}
            {tab === "My Posts" && (
              <span className={`ml-2 text-[11px] px-2 py-0.5 rounded-full ${
                activeTab === tab
                  ? "bg-bark-dark text-cream"
                  : "bg-warm text-text-light"
              }`}>
                {postCount}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}