import { Link, useNavigate } from "react-router";
import { FaHouse } from "react-icons/fa6";

import useDocumentTitle from "@/hooks/useDocumentTitle";

function NotFound() {
  useDocumentTitle("404 | صفحه پیدا نشد");

  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-background px-6">
      <div className="absolute h-105 w-105 rounded-full bg-dark-primary/10 blur-3xl animate-pulse" />

      <section className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <div className="mb-8 flex h-24 w-24 animate-[float_4s_ease-in-out_infinite] items-center justify-center rounded-full border border-dark-primary/30 bg-dark-card-hover">
          <FaHouse className="text-4xl text-dark-primary" />
        </div>

        <h1 className="text-8xl font-black tracking-wider text-dark-primary md:text-9xl">
          404
        </h1>

        <p className="mt-4 max-w-lg leading-8 text-dark-text-muted">
          صفحه‌ای که به دنبال آن هستید وجود ندارد، حذف شده است یا آدرس را اشتباه
          وارد کرده‌اید.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-dark-primary px-6 py-3 font-medium text-dark-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(242,202,80,.25)]"
          >
            بازگشت به صفحه اصلی
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer rounded-xl border border-dark-border-strong px-6 py-3 text-zinc-200 transition-all duration-300 hover:border-dark-primary hover:text-dark-primary"
          >
            صفحه قبل
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
