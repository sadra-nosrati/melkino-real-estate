import { LuChartColumnBig, LuSparkles, LuTrendingUp } from "react-icons/lu";

function DashboardStatCard() {
  return (
    <>
      <article className="group rounded-2xl tablet-landscape:rounded-3xl border border-[#F2CA50]/10 bg-white/[0.02] p-4 tablet-portrait:p-5 tablet-landscape:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2CA50]/30 hover:bg-white/[0.04]">
        <div className="mb-4 tablet-landscape:mb-6 flex items-center justify-between">
          <div className="rounded-xl tablet-landscape:rounded-2xl bg-[#F2CA50]/10 p-2.5 tablet-landscape:p-3 text-[#F2CA50]">
            <LuTrendingUp size={20} />
          </div>

          <p className="text-sm tablet-landscape:text-base font-medium text-[#F2CA50]">
            12.5%+
          </p>
        </div>

        <h2 className="mb-2 text-sm tablet-landscape:text-base text-[#D0C5AF]">
          میانگین قیمت زعفرانیه
        </h2>

        <p className="text-[20px] tablet-landscape:text-[24px] text-zinc-200">
          320,000,000{" "}
          <span className="text-[11px] tablet-landscape:text-xs text-[#E5E2E1]">
            تومان/ متر
          </span>
        </p>
      </article>

      <article className="group rounded-2xl tablet-landscape:rounded-3xl border border-[#F2CA50]/10 bg-white/[0.02] p-4 tablet-portrait:p-5 tablet-landscape:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2CA50]/30 hover:bg-white/[0.04]">
        <div className="mb-4 tablet-landscape:mb-6 flex items-center justify-between">
          <div className="rounded-xl tablet-landscape:rounded-2xl bg-[#F2CA50]/10 p-2.5 tablet-landscape:p-3 text-[#F2CA50]">
            <LuChartColumnBig size={20} />
          </div>

          <p className="text-sm tablet-landscape:text-base text-zinc-500">
            به‌ روز
          </p>
        </div>

        <h2 className="mb-2 text-sm tablet-landscape:text-base text-[#D0C5AF]">
          بازدیدهای این هفته
        </h2>

        <p className="text-[20px] tablet-landscape:text-[24px] text-zinc-200">
          48{" "}
          <span className="text-[11px] tablet-landscape:text-xs text-[#E5E2E1]">
            مورد جدید
          </span>
        </p>
      </article>

      <article className="group rounded-2xl tablet-landscape:rounded-3xl border border-[#F2CA50]/10 bg-white/[0.02] p-4 tablet-portrait:p-5 tablet-landscape:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2CA50]/30 hover:bg-white/[0.04]">
        <div className="mb-4 tablet-landscape:mb-6 flex items-center justify-between">
          <div className="rounded-xl tablet-landscape:rounded-2xl bg-[#F2CA50]/10 p-2.5 tablet-landscape:p-3 text-[#F2CA50]">
            <LuSparkles size={20} />
          </div>
        </div>

        <h2 className="mb-2 text-sm tablet-landscape:text-base text-[#D0C5AF]">
          پیشنهادات هوشمند
        </h2>

        <p className="text-[20px] tablet-landscape:text-[24px] text-zinc-200">
          12{" "}
          <span className="text-[11px] tablet-landscape:text-xs text-[#E5E2E1]">
            فرصت سرمایه‌ گذاری
          </span>
        </p>
      </article>
    </>
  );
}

export default DashboardStatCard;
