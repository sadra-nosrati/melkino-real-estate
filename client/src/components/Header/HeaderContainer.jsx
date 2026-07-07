import clsx from "clsx";

function HeaderContainer({ isScrolled, children }) {
  return (
    <div
      className={clsx(
        "mx-auto flex items-center justify-between transition-all duration-500 ease-out outline-none focus:outline-none focus-visible:outline-none select-none border border-transparent",
        {
          "border-[#F2CA50]/20 max-w-[calc(100%-24px)] mobile:max-w-[calc(100%-32px)] tablet-portrait:max-w-[calc(100%-48px)] laptop:max-w-275 py-3 mobile:py-3.5 laptop:py-4 px-4 mobile:px-5 tablet-portrait:px-6 laptop:px-8 rounded-2xl bg-[#131313]/60 backdrop-blur-xl shadow-lg shadow-black/30":
            isScrolled,
          "border-transparent max-w-7xl py-3 mobile:py-3.5 laptop:py-4 px-4 mobile:px-5 tablet-portrait:px-6 laptop:px-8":
            !isScrolled,
        },
      )}
    >
      {children}
    </div>
  );
}

export default HeaderContainer;
