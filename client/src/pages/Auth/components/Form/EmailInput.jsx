import React from "react";
import { FaUser } from "react-icons/fa6";

function EmailInput({ name = "email", value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-300">ایمیل</label>

      <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all duration-300 focus-within:border-dark-primary/50 focus-within:shadow-[0_0_30px_rgba(242,202,80,0.08)]">
        <FaUser className="text-zinc-500" />

        <input
          name={name}
          type="email"
          value={value}
          onChange={onChange}
          placeholder="example@gmail.com"
          className="w-full h-full bg-transparent text-white outline-none placeholder:text-zinc-500"
        />
      </div>
    </div>
  );
}

export default EmailInput;
