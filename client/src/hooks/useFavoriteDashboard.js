import { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesContext";

export function useFavoriteDashboard() {
  const { favorites } = useContext(FavoritesContext);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/properties");

        const data = await res.json();

        setProperties(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  const favoriteProperties = properties
    .filter((item) => favorites.includes(String(item.id)))
    .slice(-4);

  return {
    favoriteProperties,
    loading,
  };
}
