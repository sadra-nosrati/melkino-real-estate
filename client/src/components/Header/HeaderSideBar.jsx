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
    "flex gap-2 items-center px-4 py-3 rounded-xl text-dark-text-muted hover:bg-dark-primary/10 hover:text-dark-primary transition-all duration-300";

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
          "fixed top-0 right-0 z-9999 h-screen w-75 bg-dark-background-secondary border-l border-dark-primary/10 shadow-2xl transition-all duration-300 ease-in-out",
          { "translate-x-0": isOpen, "translate-x-full": !isOpen },
        )}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-dark-primary/10">
          <Link
            to="/"
            onClick={closeSidebar}
            className="text-3xl tracking-[0.2em] mx-auto font-bold text-dark-primary"
          >
            Melkino
          </Link>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          <div className="block tablet-portrait:hidden">
            <Link to="/" onClick={closeSidebar} className={itemClass}>
              خانه
            </Link>

            <Link
              to="/dashboard/favorites"
              onClick={closeSidebar}
              className={itemClass}
            >
              املاک برتر
            </Link>

            <Link to="/" onClick={closeSidebar} className={itemClass}>
              تماس با ما
            </Link>
          </div>

          <div className="my-4 h-px bg-dark-primary/10 tablet-portrait:hidden" />

          {!user ? (
            <Link
              to="/auth/login"
              onClick={closeSidebar}
              className="mt-4 flex items-center justify-center rounded-xl bg-dark-primary py-3 font-medium text-dark-background-secondary hover:bg-dark-primary-hover active:scale-95 transition-all duration-300"
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
