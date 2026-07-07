import { NavLink } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";

import LogOut from "./LogOut/LogOut";
import clsx from "clsx";

function SideBarBody({ onNavigate }) {
  const linkClass = ({ isActive }) =>
    clsx(
      "group flex items-center outline-none focus:outline-none focus-visible:outline-none select-none border-transparent justify-between rounded-xl px-4 py-3 transition-all duration-300",
      {
        "border border-[#F2CA50]/20 bg-[#F2CA50]/10 text-[#F2CA50]": isActive,
        "text-zinc-400 hover:bg-white/5 hover:text-[#F2CA50]": !isActive,
      },
    );

  return (
    <nav className="flex-1">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/dashboard"
            end
            onClick={onNavigate}
            className={linkClass}
          >
            <span>داشبورد</span>
            <RxDashboard />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/favorites"
            onClick={onNavigate}
            className={linkClass}
          >
            <span>علاقه‌ مندی‌ ها</span>
            <FaRegHeart />
          </NavLink>
        </li>

        <li>
          <LogOut onNavigate={onNavigate} />
        </li>
      </ul>
    </nav>
  );
}

export default SideBarBody;
