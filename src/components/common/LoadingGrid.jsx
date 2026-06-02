import React from "react";

export default function LoadingGrid({ count = 6 }) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden border border-border-brand animate-pulse">
          {/* Image skeleton */}
          <div className="h-52 bg-warm" />
          {/* Body skeleton */}
          <div className="p-4 space-y-3">
            <div className="flex justify-between">
              <div className="h-4 bg-warm rounded-full w-24" />
              <div className="h-4 bg-warm rounded-full w-14" />
            </div>
            <div className="h-3 bg-warm rounded-full w-32" />
            <div className="h-3 bg-warm rounded-full w-full" />
            <div className="h-3 bg-warm rounded-full w-3/4" />
            <div className="flex justify-between pt-2 border-t border-border-brand">
              <div className="h-3 bg-warm rounded-full w-20" />
              <div className="h-7 bg-warm rounded-full w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}