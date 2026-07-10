import { LuUser } from "react-icons/lu";

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

function Footer() {
  const { user } = useContext(AuthContext);

  return (
    <div className="border-t border-dark-border-strong/20 pt-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-primary/30 bg-dark-primary/10">
          <LuUser className="text-dark-primary" />
        </div>

        <div>
          <p className="text-sm text-zinc-500">Account</p>
          <p className="text-white">{user?.fullName}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
