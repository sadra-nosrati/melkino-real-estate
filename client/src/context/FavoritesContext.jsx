import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const FavoritesContext = createContext();

const BASE_URL = "/api";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      setFavorites([]);
      return;
    }

    const controller = new AbortController();

    const fetchFavorites = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${BASE_URL}/favorites`, {
          headers: {
            Authorization: token,
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(result.message);
        }

        const data = await res.json();
        setFavorites(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchFavorites();

    return () => controller.abort();
  }, [token]);

  const toggleFavorite = async (propertyId) => {
    if (!token) return;

    setFavorites((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId],
    );

    try {
      const res = await fetch(`${BASE_URL}/favorites/${propertyId}`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) {
        throw new Error(result.message);
      }

      const data = await res.json();
      setFavorites(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        loading,
        error,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
