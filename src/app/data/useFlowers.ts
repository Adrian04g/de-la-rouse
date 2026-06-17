import { useEffect, useState } from "react";

import { getFlowers, type FlowerCardData } from "./flowers";

export function useFlowers() {
  const [flowers, setFlowers] = useState<FlowerCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadFlowers() {
      try {
        setLoading(true);
        setError(null);

        const items = await getFlowers();
        if (active) {
          setFlowers(items);
        }
      } catch (thrownError) {
        if (active) {
          setError(
            thrownError instanceof Error
              ? thrownError.message
              : "No se pudieron cargar las flores desde Supabase."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadFlowers();

    return () => {
      active = false;
    };
  }, []);

  return { flowers, loading, error };
}