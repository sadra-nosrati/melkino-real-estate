import { useParams } from "react-router";
import { useProperties } from "@/context/PropertiesContext";

export function usePropertyById() {
  const { id } = useParams();
  const { properties, loading, error } = useProperties();

  const property = properties.find((item) => item.id === Number(id));

  return {
    property,
    loading,
    error,
  };
}
