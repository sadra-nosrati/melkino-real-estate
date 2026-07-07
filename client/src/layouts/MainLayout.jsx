import { Outlet, ScrollRestoration } from "react-router";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <ScrollRestoration />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
