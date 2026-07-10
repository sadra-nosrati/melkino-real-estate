import { FaChartLine } from "react-icons/fa6";
import { MdOutlineSecurity, MdOutlineSupportAgent } from "react-icons/md";

const items = [
  {
    icon: MdOutlineSecurity,
    title: "آگهی‌ های تأیید شده",
    desc: "تمامی آگهی‌ ها توسط تیم کارشناسان ما تایید هویت و اصالت میشوند تا با خیالی آسوده معامله کنید.",
  },
  {
    icon: FaChartLine,
    title: "تحلیل داده‌های بازار",
    desc: "دسترسی به نمودارهای قیمت و روندهای بازار برای تصمیم‌ گیری هوشمندانه در سرمایه‌ گذاری ملکی.",
  },
  {
    icon: MdOutlineSupportAgent,
    title: "پشتیبانی ۲۴ ساعته",
    desc: "کارشناسان ما در تمام مراحل جستجو تا عقد قرارداد در کنار شما هستند تا تجربه‌ای بینقص داشته باشید.",
  },
];

function WhyChooseUs() {
  return (
    <div className="mx-auto max-w-7xl px-4 mobile:px-6">
      <div className="mx-auto mb-10 tablet-portrait:mb-16 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl tablet-portrait:text-4xl font-extrabold text-white">
          چرا ملکینو؟
        </h2>

        <p className="text-sm tablet-portrait:text-base leading-7 tablet-portrait:leading-8 text-zinc-400">
          ما مسیر خرید و فروش ملک را برای شما ساده، امن و سریع کرده‌ایم.
        </p>
      </div>

      <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 tablet-landscape:grid-cols-3 gap-5 tablet-portrait:gap-6">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <article
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1A1A1A] p-6 tablet-portrait:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-dark-primary-active/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-dark-primary-active to-transparent" />

              <div className="mb-5 tablet-portrait:mb-6 flex h-14 w-14 tablet-portrait:h-16 tablet-portrait:w-16 items-center justify-center rounded-full border border-dark-primary-active/20 bg-dark-primary-active/10 text-2xl tablet-portrait:text-3xl text-dark-primary-active transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon />
              </div>

              <h3 className="mb-3 tablet-portrait:mb-4 text-lg tablet-portrait:text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-sm tablet-portrait:text-base leading-7 tablet-portrait:leading-8 text-zinc-400">
                {item.desc}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChooseUs;
