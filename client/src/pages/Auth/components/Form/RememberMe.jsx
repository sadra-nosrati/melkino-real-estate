import { useState } from "react";

function RememberMe() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const value = e.target.checked;
    setChecked(value);
    onChange?.(value);
  };

  return (
    <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
      <input
        type="checkbox"
        className="size-4 accent-[#F2CA50]"
        checked={checked}
        onChange={handleChange}
      />
      مرا به خاطر بسپار
    </label>
  );
}

export default RememberMe;
