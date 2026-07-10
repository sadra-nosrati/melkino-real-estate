import { MdOutlineSupportAgent } from "react-icons/md";

function Support() {
  return (
    <article className="group rounded-3xl border border-white/5 bg-white/2 p-4 tablet-portrait:p-6 transition-all duration-300 hover:border-dark-primary/20 mt-10 laptop:mt-30">
      <div className="flex flex-col mobile-landscape:flex-row items-start mobile-landscape:items-center gap-3 mobile-landscape:gap-5">
        <div className="flex h-12 w-12 tablet-portrait:h-14 tablet-portrait:w-14 items-center justify-center rounded-2xl border border-dark-primary/15 bg-dark-primary/5 text-2xl tablet-portrait:text-3xl text-dark-primary transition-transform duration-300 group-hover:scale-105">
          <MdOutlineSupportAgent />
        </div>

        <h3 className="text-base tablet-portrait:text-lg font-semibold text-white">
          مشاوره اختصاصی
        </h3>
      </div>

      <p className="mt-3 text-xs tablet-portrait:text-sm leading-6 tablet-portrait:leading-7 text-zinc-500">
        مشاور ویژه شما هم‌اکنون آنلاین است. برای راهنمایی در مورد املاک منتخب
        پیام دهید.
      </p>
    </article>
  );
}

export default Support;
