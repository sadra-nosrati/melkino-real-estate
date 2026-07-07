import { Link } from "react-router";
import { FaRegUser } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";
import clsx from "clsx";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

function HeaderSideBar({ isOpen, setIsOpen }) {
  const { user } = useContext(AuthContext);

  const closeSidebar = () => {
    return setIsOpen(false);
  };

  const itemClass =
    "flex gap-2 items-center px-4 py-3 rounded-xl text-[#D0C5AF] hover:bg-[#F2CA50]/10 hover:text-[#F2CA50] transition-all duration-300";

  return (
    <>
      <div
        onClick={closeSidebar}
        className={clsx(
          "fixed inset-0 z-9998 bg-black/60 backdrop-blur-sm transition-all duration-300",
          {
            "opacity-100 visible": isOpen,
            "opacity-0 invisible": !isOpen,
          },
        )}
      />

      <aside
        className={clsx(
          "fixed top-0 right-0 z-9999 h-screen w-75 bg-[#131313] border-l border-[#F2CA50]/10 shadow-2xl transition-all duration-300 ease-in-out",
          { "translate-x-0": isOpen, "translate-x-full": !isOpen },
        )}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-[#F2CA50]/10">
          <Link
            to="/"
            onClick={closeSidebar}
            className="text-3xl tracking-[0.2em] mx-auto font-bold text-[#F2CA50]"
          >
            Melkino
          </Link>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          <div className="block tablet-portrait:hidden">
            <Link to="/" onClick={closeSidebar} className={itemClass}>
              خانه
            </Link>

            <Link to="/properties" onClick={closeSidebar} className={itemClass}>
              املاک برتر
            </Link>

            <Link to="/contact" onClick={closeSidebar} className={itemClass}>
              تماس با ما
            </Link>
          </div>

          <div className="my-4 h-px bg-[#F2CA50]/10 tablet-portrait:hidden" />

          {!user ? (
            <Link
              to="/auth/login"
              onClick={closeSidebar}
              className="mt-4 flex items-center justify-center rounded-xl bg-[#F2CA50] py-3 font-medium text-[#131313] hover:bg-[#e5bd45] active:scale-95 transition-all duration-300"
            >
              ورود به حساب
            </Link>
          ) : (
            <Link to="/dashboard" onClick={closeSidebar} className={itemClass}>
              <FaRegUser className="w-5 h-5" />
              <span>پنل کاربری</span>
            </Link>
          )}

          <button className={itemClass}>
            <FiMoon className="w-5 h-5" />
            <span>تغییر تم</span>
          </button>
        </nav>
      </aside>
    </>
  );
}

export default HeaderSideBar;
