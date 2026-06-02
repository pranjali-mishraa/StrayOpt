import { useState, useEffect } from "react";
import { USE_REAL_API, API_BASE_URL } from "../config/dataConfig";
import { sampleReviews } from "../components/DummyData/ReviewData";

export function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      setError(null);

      // ── DUMMY MODE ──────────────────────────
      if (!USE_REAL_API) {
        await new Promise(res => setTimeout(res, 600));
        setReviews(sampleReviews);
        setLoading(false);
        return;
      }

      // ── REAL API MODE ───────────────────────
      try {
        const res  = await fetch(`${API_BASE_URL}/reviews`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        setError(err.message || "Failed to load reviews");
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return { reviews, loading, error };
}