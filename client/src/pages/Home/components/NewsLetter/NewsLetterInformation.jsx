import { notify } from "@/utils/toast";
import { useState } from "react";

function NewsLetterInformation() {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      notify.error("لطفاً یک ایمیل معتبر وارد کنید.");
      return;
    }

    notify.success("ایمیل با موفقیت ثبت شد.");
  };

  return (
    <div className="w-full tablet-landscape:w-1/2 text-center tablet-landscape:text-right">
      <h3 className="text-dark-primary text-xs">NEWSLETTER</h3>

      <h2 className="mt-4 text-3xl tablet-portrait:text-4xl tablet-landscape:text-[40px] leading-tight">
        از جدید ترین فرصت ها با خبر شوید
      </h2>

      <p className="text-dark-text-muted leading-8 tablet-landscape:leading-[2em] py-8 tablet-landscape:py-10">
        با عضویت در خبرنامه ملکینو، جدیدترین فایل‌های فروش فوری، فرصت‌های
        سرمایه‌گذاری و پروژه‌های در حال ساخت مناطق تهران را پیش از دیگران دریافت
        کنید.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mobile:flex-row items-stretch mobile:items-center gap-3 mobile:gap-0 border border-white/10 rounded-lg p-2 w-full max-w-md mx-auto tablet-landscape:mx-0 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_20px_rgba(242,202,80,0.08)]"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="آدرس ایمیل شما"
          className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 px-3 h-11"
        />

        <button
          type="submit"
          className="bg-dark-primary text-black px-5 h-11 rounded-lg text-sm transition-all duration-300 cursor-pointer"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
}

export default NewsLetterInformation;
