function ChartHeader({ active, setActive }) {
  const ButtonStyle =
    "bg-dark-border-light px-3 py-1 rounded-2xl cursor-pointer hover:bg-dark-primary hover:text-dark-background-secondary transition-colors";

  const ActiveStyle =
    "bg-dark-primary text-dark-background-secondary px-3 py-1 rounded-2xl cursor-pointer";

  return (
    <div className="flex flex-col gap-4 tablet-portrait:flex-row tablet-portrait:items-center tablet-portrait:justify-between">
      <div className="flex flex-col">
        <h1 className="text-dark-text-secondary text-lg tablet-portrait:text-2xl">
          روند تغییرات ملک در تهران
        </h1>

        <p className="text-dark-text-muted text-xs tablet-portrait:text-sm mt-2 tablet-portrait:mt-3">
          مقایسه {active} ماه اخیر نسبت به شاخص تورم
        </p>
      </div>

      <div className="flex flex-wrap gap-2 tablet-portrait:gap-5 items-center">
        <button
          onClick={() => setActive("1")}
          className={active === "1" ? ActiveStyle : ButtonStyle}
        >
          1 ماهه
        </button>

        <button
          onClick={() => setActive("6")}
          className={active === "6" ? ActiveStyle : ButtonStyle}
        >
          6 ماهه
        </button>

        <button
          onClick={() => setActive("12")}
          className={active === "12" ? ActiveStyle : ButtonStyle}
        >
          1 ساله
        </button>
      </div>
    </div>
  );
}

export default ChartHeader;
