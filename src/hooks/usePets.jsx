import { useState, useEffect } from "react";
import { USE_REAL_API, API_BASE_URL } from "../config/dataConfig";
import { samplePets } from "../components/DummyData/PetsData";

export function usePets() {
  const [pets, setPets]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    async function fetchPets() {
      setLoading(true);
      setError(null);

      // ── DUMMY MODE ──────────────────────────
      if (!USE_REAL_API) {
        // Simulate a small network delay so UI feels realistic
        await new Promise(res => setTimeout(res, 800));
        setPets(samplePets);
        setLoading(false);
        return;
      }

      // ── REAL API MODE ───────────────────────
      try {
        const res  = await fetch(`${API_BASE_URL}/pets`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setPets(data);
      } catch (err) {
        setError(err.message || "Failed to load pets");
      } finally {
        setLoading(false);
      }
    }

    fetchPets();
  }, []);

  return { pets, loading, error };
}