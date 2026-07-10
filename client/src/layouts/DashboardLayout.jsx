import { useState } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineMenu } from "react-icons/hi";

import SideBar from "@/pages/Dashboard/components/SideBar/SideBar";
import MobileSidebar from "@/pages/Dashboard/components/SideBar/MobileSideBar";

function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollRestoration />

      <div className="flex w-full min-h-screen bg-dark-background-secondary">
        <div className="hidden laptop:flex">
          <SideBar />
        </div>

        <header className="laptop:hidden fixed inset-x-0 top-0 z-1000 flex h-14 items-center border-b border-white/5 bg-dark-background/90 px-4 backdrop-blur-xl">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-dark-primary transition-all duration-300 hover:bg-white/5"
          >
            {open ? (
              <HiOutlineXMark className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>

          <Link to="/" className="mx-auto  text-dark-primary tracking-[0.3em]">
            MELKINO
          </Link>
        </header>

        <main className="flex-1 w-full pt-14 laptop:pt-0">
          <Outlet />
        </main>

        <MobileSidebar open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default DashboardLayout;
