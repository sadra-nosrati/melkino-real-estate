import { LuChartColumnBig, LuSparkles, LuTrendingUp } from "react-icons/lu";

function DashboardStatCard() {
  return (
    <>
      <article className="group rounded-2xl tablet-landscape:rounded-3xl border border-dark-primary/10 bg-white/[0.02] p-4 tablet-portrait:p-5 tablet-landscape:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-dark-primary/30 hover:bg-white/[0.04]">
        <div className="mb-4 tablet-landscape:mb-6 flex items-center justify-between">
          <div className="rounded-xl tablet-landscape:rounded-2xl bg-dark-primary/10 p-2.5 tablet-landscape:p-3 text-dark-primary">
            <LuTrendingUp size={20} />
          </div>

          <p className="text-sm tablet-landscape:text-base font-medium text-dark-primary">
            12.5%+
          </p>
        </div>

        <h2 className="mb-2 text-sm tablet-landscape:text-base text-dark-text-muted">
          میانگین قیمت زعفرانیه
        </h2>

        <p className="text-[20px] tablet-landscape:text-[24px] text-zinc-200">
          320,000,000{" "}
          <span className="text-[11px] tablet-landscape:text-xs text-dark-text-secondary">
            تومان/ متر
          </span>
        </p>
      </article>

      <article className="group rounded-2xl tablet-landscape:rounded-3xl border border-dark-primary/10 bg-white/[0.02] p-4 tablet-portrait:p-5 tablet-landscape:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-dark-primary/30 hover:bg-white/[0.04]">
        <div className="mb-4 tablet-landscape:mb-6 flex items-center justify-between">
          <div className="rounded-xl tablet-landscape:rounded-2xl bg-dark-primary/10 p-2.5 tablet-landscape:p-3 text-dark-primary">
            <LuChartColumnBig size={20} />
          </div>

          <p className="text-sm tablet-landscape:text-base text-zinc-500">
            به‌ روز
          </p>
        </div>

        <h2 className="mb-2 text-sm tablet-landscape:text-base text-dark-text-muted">
          بازدیدهای این هفته
        </h2>

        <p className="text-[20px] tablet-landscape:text-[24px] text-zinc-200">
          48{" "}
          <span className="text-[11px] tablet-landscape:text-xs text-dark-text-secondary">
            مورد جدید
          </span>
        </p>
      </article>

      <article className="group rounded-2xl tablet-landscape:rounded-3xl border border-dark-primary/10 bg-white/[0.02] p-4 tablet-portrait:p-5 tablet-landscape:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-dark-primary/30 hover:bg-white/[0.04]">
        <div className="mb-4 tablet-landscape:mb-6 flex items-center justify-between">
          <div className="rounded-xl tablet-landscape:rounded-2xl bg-dark-primary/10 p-2.5 tablet-landscape:p-3 text-dark-primary">
            <LuSparkles size={20} />
          </div>
        </div>

        <h2 className="mb-2 text-sm tablet-landscape:text-base text-dark-text-muted">
          پیشنهادات هوشمند
        </h2>

        <p className="text-[20px] tablet-landscape:text-[24px] text-zinc-200">
          12{" "}
          <span className="text-[11px] tablet-landscape:text-xs text-dark-text-secondary">
            فرصت سرمایه‌ گذاری
          </span>
        </p>
      </article>
    </>
  );
}

export default DashboardStatCard;
