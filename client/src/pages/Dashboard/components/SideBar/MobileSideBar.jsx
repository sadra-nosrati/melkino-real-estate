import { useEffect } from "react";

import SideBarBody from "./SideBarBody";

function MobileSidebar({ open, setOpen }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-2000 transition-all duration-300 ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        className={`relative right-0 top-0 z-10 flex h-full w-72 flex-col border-l border-[#F2CA50]/10 bg-[#0E0E0E] p-6 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideBarBody onNavigate={() => setOpen(false)} />
      </aside>
    </div>
  );
}

export default MobileSidebar;
