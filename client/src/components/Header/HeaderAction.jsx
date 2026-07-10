import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { FaBars, FaXmark, FaRegUser } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-router";

function HeaderAction({ isOpen, setIsOpen }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="hidden laptop:flex items-center gap-3">
        <FiMoon className="w-6 h-6 text-dark-text-muted cursor-pointer hover:text-dark-primary transition-colors duration-300" />

        {!user ? (
          <Link
            to="/auth/login"
            className="bg-dark-primary px-5 py-1.5 rounded text-background-secondary hover:bg-dark-accent transition-colors duration-300"
          >
            ورود
          </Link>
        ) : (
          <Link to="/dashboard">
            <FaRegUser className="w-5.5 h-5.5 text-dark-text-muted hover:text-dark-primary transition-colors duration-300" />
          </Link>
        )}
      </div>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex laptop:hidden items-center justify-center w-11 h-11 rounded-xl text-dark-text-muted hover:text-dark-primary active:scale-95 transition-all duration-300"
      >
        {isOpen ? (
          <FaXmark className="w-6 h-6" />
        ) : (
          <FaBars className="w-5 h-5" />
        )}
      </button>
    </>
  );
}

export default HeaderAction;
