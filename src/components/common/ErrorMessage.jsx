import React from "react";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <p className="text-5xl mb-4">🐾</p>
      <h3 className="font-display text-[1.3rem] font-semibold text-bark-dark mb-2">
        Something went wrong
      </h3>
      <p className="text-text-light text-[13px] mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-rust text-cream px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-rust-hover transition-all duration-200 active:scale-95"
        >
          Try Again
        </button>
      )}
    </div>
  );
}