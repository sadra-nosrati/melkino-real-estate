import { Link, useLocation } from "react-router";

function Footer() {
  const isLogin = useLocation().pathname.includes("login");
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-zinc-400">
      {isLogin ? (
        <>
          <span>هنوز عضو نشدید؟</span>
          <Link
            to="/auth/register"
            className="text-[#F2CA50] font-medium hover:opacity-80 transition"
          >
            ساخت حساب
          </Link>
        </>
      ) : (
        <>
          <span>قبلاً عضو شدید؟</span>
          <Link
            to="/auth/login"
            className="text-[#F2CA50] font-medium hover:opacity-80 transition"
          >
            ورود
          </Link>
        </>
      )}
    </div>
  );
}

export default Footer;
