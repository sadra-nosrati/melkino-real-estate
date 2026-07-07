import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        openSidebar: () => setIsOpen(true),
        closeSidebar: () => setIsOpen(false),
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
