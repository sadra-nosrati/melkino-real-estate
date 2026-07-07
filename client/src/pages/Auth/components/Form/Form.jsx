import { useState } from "react";

import { useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import FullName from "../RegisterOnly/FullName";
import RepeatPassword from "../RegisterOnly/RepeatPassword";
import useAuthForm from "@/hooks/useAuthForm";
import RememberMe from "./RememberMe";
import { notify } from "@/utils/toast";

function Form({ mode = "login" }) {
  const [rememberMe, setRememberMe] = useState(false);

  const isLogin = mode === "login";

  const { form, handleChange, handleSubmit } = useAuthForm(mode);

  const navigate = useNavigate();

  const handleFinalSubmit = async (e) => {
    const result = await handleSubmit(e);

    if (result?.token) {
      notify.success("ورود موفقیت‌آمیز بود");
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleFinalSubmit} className="mt-8 space-y-5">
      <EmailInput name="email" value={form.email} onChange={handleChange} />

      <PasswordInput
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      {!isLogin && (
        <>
          <FullName
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          <RepeatPassword
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleChange}
          />
        </>
      )}

      {isLogin && <RememberMe onChange={setRememberMe} />}

      <button
        type="submit"
        className="group flex h-12 tablet-landscape:h-14 w-full items-center justify-center gap-2 tablet-landscape:gap-3 rounded-xl tablet-landscape:rounded-2xl bg-[#F2CA50] text-sm tablet-landscape:text-base font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(242,202,80,0.25)] active:scale-[0.98] cursor-pointer"
      >
        {isLogin ? "ورود به پنل" : "ساخت حساب کاربری"}

        <FaArrowLeftLong className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

export default Form;
