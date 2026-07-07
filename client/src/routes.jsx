import { createBrowserRouter, ScrollRestoration } from "react-router";

import Home from "@/pages/Home/Home";
import Product from "@/pages/Product/Product";
import AuthPage from "@/pages/Auth/AuthPage";

import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "./pages/Dashboard/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardFavorites from "./pages/Dashboard/components/SideBar/Favorites/DashboardFavorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <Product /> },
    ],
  },

  {
    path: "/auth/:mode",
    element: <AuthLayout />,
    children: [{ index: true, element: <AuthPage /> }],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "favorites", element: <DashboardFavorites /> },
    ],
  },
]);
