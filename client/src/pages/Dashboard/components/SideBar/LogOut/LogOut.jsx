import { useContext } from "react";
import { useNavigate } from "react-router";
import { MdOutlineLogout } from "react-icons/md";

import { AuthContext } from "@/context/AuthContext";
import { showLogoutModal } from "./showLogoutModal";
import { notify } from "@/utils/toast";

function LogOut({ onNavigate }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      navigate("/");

      await logout();

      notify.success("با موفقیت خارج شدید");
    } catch (err) {
      notify.error("خطا در خروج از حساب");
    }
  };

  const handleClick = () => {
    onNavigate?.();
    showLogoutModal(handleLogout);
  };

  return (
    <button
      onClick={handleClick}
      className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-[#F2CA50] transition-all cursor-pointer"
    >
      <span>خروج</span>
      <MdOutlineLogout className="text-lg transition-transform duration-300 group-hover:scale-110" />
    </button>
  );
}

export default LogOut;
