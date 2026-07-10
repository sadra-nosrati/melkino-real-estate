import ScrollIndicator from "./ScrollIndicator";
import style from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className="relative h-155 mobile-landscape:h-200 tablet-portrait:h-200 tablet-landscape:h-200 mobile:h-200 mobile-small:h-200">
      <img
        src="/images/home-page-main.webp"
        alt="Luxury Property"
        className={`${style["inner-curve"]} h-full w-full object-cover`}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <p className="text-[11px] mobile:text-xs text-dark-primary tracking-[0.2em]">
          PRESTIGE & ELEGANCE
        </p>

        <h1 className="mt-4 text-3xl mobile:text-4xl tablet-portrait:text-[42px] tablet-landscape:text-5xl text-white leading-tight">
          خانه رویایی خود را پیدا کن
        </h1>

        <p
          style={{ fontFamily: "YekanBakh-Light" }}
          className="mt-4 text-sm mobile:text-base tablet-landscape:text-lg text-white/60 font-light"
        >
          خرید، فروش و اجاره املاک در سراسر کشور
        </p>

        <div className="mt-7 flex flex-col mobile:flex-row items-center gap-3 w-full mobile:w-auto">
          <button className="w-full mobile:w-auto px-5 py-2 border border-dark-primary text-dark-primary cursor-pointer hover:bg-dark-primary/10 transition rounded">
            مشاوره تخصصی
          </button>

          <button className="w-full mobile:w-auto px-5 py-2 bg-dark-primary text-dark-accent-dark cursor-pointer hover:bg-dark-accent transition rounded">
            جستجوی املاک
          </button>
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
}

export default HeroSection;
