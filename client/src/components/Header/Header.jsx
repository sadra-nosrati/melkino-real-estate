import { useState } from "react";

import HeaderContainer from "./HeaderContainer";
import HeaderWrapper from "./HeaderWrapper";
import HeaderAction from "./HeaderAction";
import HeaderNav from "./HeaderNav";
import HeaderBrand from "./HeaderBrand";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import HeaderSideBar from "./HeaderSideBar";

export default function Header() {
  const isScrolled = useHeaderScroll();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <HeaderWrapper isScrolled={isScrolled}>
        <HeaderContainer isScrolled={isScrolled}>
          <HeaderAction isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <HeaderNav />
          <HeaderBrand />
        </HeaderContainer>
      </HeaderWrapper>

      <HeaderSideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}
