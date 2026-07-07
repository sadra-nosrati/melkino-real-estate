import { useContext } from "react";

import { Navigate } from "react-router";

import { AuthContext } from "@/context/AuthContext";

function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
