import { RouterProvider } from "react-router";
import { router } from "./routes";

import { PropertiesProvider } from "@/context/PropertiesContext";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <PropertiesProvider>
          <SidebarProvider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              newestOnTop
              autoClose={3500}
              closeButton={false}
              hideProgressBar={false}
              draggable
              draggablePercent={35}
              pauseOnHover
              theme="dark"
              limit={3}
            />
          </SidebarProvider>
        </PropertiesProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
