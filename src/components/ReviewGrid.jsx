import React from "react";
import ReviewCard from "./ReviewCard";
import { useReviews } from "../hooks/useReviews";
import LoadingGrid from "../components/common/LoadingGrid";
import ErrorMessage from "../components/common/ErrorMessage";

export default function ReviewGrid() {
  const { reviews, loading, error } = useReviews();

  return (
    <section className="bg-warm py-20 px-6">

      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-rust rounded-full" />
          <p className="text-rust text-[13px] font-medium uppercase tracking-widest">
            Happy Families
          </p>
          <span className="w-8 h-[2px] bg-rust rounded-full" />
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold text-bark-dark mb-2">
          What New Pet Parents Say
        </h2>
        <p className="text-text-light text-[14px] max-w-md mx-auto">
          Real stories from people who found their best friends through StrayOpt
        </p>
      </div>

      {/* States */}
      {loading && <LoadingGrid count={6} />}
      {error   && <ErrorMessage message={error} />}
      {!loading && !error && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}

    </section>
  );
}