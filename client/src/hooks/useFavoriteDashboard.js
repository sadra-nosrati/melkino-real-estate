import { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesContext";

export function useFavoriteDashboard() {
  const { favorites } = useContext(FavoritesContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("http://localhost:5000/properties");
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProperties();
  }, []);

  const favoriteProperties = properties
    .filter((item) => favorites.includes(String(item.id)))
    .slice(-4);

  return favoriteProperties;
}
