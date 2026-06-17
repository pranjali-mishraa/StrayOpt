import React from "react";
import { Link } from "react-router-dom";

export default function EmptyState({ emoji, title, sub, action }) {
  return (
    <div className="text-center py-16">
      <span className="text-[56px]">{emoji}</span>
      <h3 className="font-display text-[1.2rem] font-semibold text-bark-dark mt-3 mb-1">
        {title}
      </h3>
      <p className="text-text-light text-[13px] mb-6">{sub}</p>
      {action && (
        <Link
          to={action.to}
          className="inline-flex items-center gap-2 bg-bark-dark text-cream px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-rust transition-all duration-200"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}