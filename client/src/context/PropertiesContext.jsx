import { createContext, useContext, useEffect, useState } from "react";

const PropertiesContext = createContext(null);

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProperties() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/properties", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`خطا در دریافت اطلاعات: ${res.status}`);
        }

        const data = await res.json();

        setProperties(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProperties();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        loading,
        error,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

export function useProperties() {
  const context = useContext(PropertiesContext);

  if (!context) {
    throw new Error("useProperties must be used within PropertiesProvider");
  }

  return context;
}
