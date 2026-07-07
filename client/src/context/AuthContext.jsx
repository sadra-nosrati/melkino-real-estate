import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const BASE_URL = "http://localhost:5000";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      if (result.token) {
        localStorage.setItem("token", result.token);
        setToken(result.token);
        setUser({ email: data.email });
      }

      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || result.error || "Login failed");
      }

      if (result.token) {
        localStorage.setItem("token", result.token);
        setToken(result.token);
        setUser({ email: data.email });
      }

      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (token) {
        const res = await fetch(`${BASE_URL}/auth/logout`, {
          method: "POST",
          headers: {
            Authorization: token,
          },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
    }
  };

  const fetchUser = async (token, signal) => {
    try {
      setError(null);

      const res = await fetch(`${BASE_URL}/auth/me`, {
        headers: {
          Authorization: token,
        },
        signal,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      setUser(result);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }

    const controller = new AbortController();

    fetchUser(token, controller.signal);

    return () => controller.abort();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
