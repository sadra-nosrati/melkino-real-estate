import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { TbLockPassword } from "react-icons/tb";

function PasswordInput({ name = "password", value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-300">رمز عبور</label>

      <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all duration-300 focus-within:border-dark-primary/50 focus-within:shadow-[0_0_30px_rgba(242,202,80,0.08)]">
        <TbLockPassword className="text-zinc-500 text-2xl" />

        <input
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="رمز عبور"
          className="w-full h-full bg-transparent text-white outline-none placeholder:text-zinc-500"
        />

        {showPassword ? (
          <FaEye
            onClick={() => setShowPassword(false)}
            className="cursor-pointer text-dark-primary text-2xl"
          />
        ) : (
          <FaEyeSlash
            onClick={() => setShowPassword(true)}
            className="cursor-pointer text-zinc-500 hover:text-dark-primary transition-colors text-2xl"
          />
        )}
      </div>
    </div>
  );
}

export default PasswordInput;
