import { useState, useContext } from "react";
import { notify } from "@/utils/toast";
import { AuthContext } from "@/context/AuthContext";
import { getErrorMessage } from "@/utils/errorMessages";

export default function useAuthForm(mode = "login") {
  const { login, register } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!form.email || !form.password) {
      return "ایمیل و رمز عبور الزامی است";
    }

    if (!emailRegex.test(form.email)) {
      return "فرمت ایمیل درست نیست";
    }

    if (!passwordRegex.test(form.password)) {
      return "رمز باید حداقل ۶ کاراکتر، شامل عدد و حروف بزرگ و کوچک باشد";
    }

    if (mode === "register") {
      if (!form.fullName.trim()) {
        return "نام و نام خانوادگی الزامی است";
      }

      if (form.password !== form.repeatPassword) {
        return "رمز عبور و تکرار آن یکسان نیستند";
      }
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();

    if (validationError) {
      notify.error(validationError);
      return null;
    }

    try {
      let result;

      if (mode === "login") {
        result = await login({
          email: form.email,
          password: form.password,
        });
      } else {
        result = await register({
          email: form.email,
          password: form.password,
          fullName: form.fullName,
        });
      }

      return result;
    } catch (err) {
      notify.error(getErrorMessage(err));
      return null;
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
}
