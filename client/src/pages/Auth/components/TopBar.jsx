function TopBar({ mode }) {
  const isLogin = mode === "login";

  return (
    <>
      <h1 className="text-center text-2xl tablet-landscape:text-3xl font-bold text-white">
        {isLogin ? "ورود" : "ثبت‌ نام"}
      </h1>

      <p className="mt-3 text-center text-sm text-zinc-400 leading-7">
        {isLogin
          ? "برای ورود اطلاعات خود را وارد کنید"
          : "برای ایجاد حساب اطلاعات خود را وارد کنید"}
      </p>
    </>
  );
}

export default TopBar;
