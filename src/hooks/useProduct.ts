import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import type { Product } from "../types/product";

interface UseProductResult { product: Product | null; loading: boolean; error: string | null; notFound: boolean; retry: () => void; }

export function useProduct(id: number | null): UseProductResult {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(id !== null);
  const [error, setError] = useState<string | null>(null);
  const [missing, setMissing] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (id === null) { setLoading(false); setMissing(true); return; }
    let active = true;
    setLoading(true); setError(null); setMissing(false);
    getProductById(id).then((data) => { if (!active) return; setProduct(data); setLoading(false); }).catch((err: unknown) => {
      if (!active) return;
      if (err instanceof Error && "status" in err && (err as Error & {status:number}).status === 404) setMissing(true); else setError("Unable to load product.");
      setLoading(false);
    });
    return () => { active = false; };
  }, [id, reloadKey]);

  const retry = () => { setLoading(true); setError(null); setReloadKey((key) => key + 1); };
  return { product, loading, error, notFound: id === null || missing, retry };
}
