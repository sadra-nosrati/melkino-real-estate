import clsx from "clsx";

function HeaderWrapper({ isScrolled, children }) {
  return (
    <header
      className={clsx(
        "fixed w-full z-50 transition-[top,background-color] duration-500 ease-out border-0",
        {
          "top-3 tablet-portrait:top-4 laptop:top-6 border-b-0": isScrolled,
          "top-0 border-b-2 bg-dark-background-secondary border-dark-primary-active/20":
            !isScrolled,
        },
      )}
    >
      <div
        className={clsx("w-full transition-all duration-500 ease-out", {
          "bg-transparent": isScrolled,
          "bg-background-secondary": !isScrolled,
        })}
      >
        {children}
      </div>
    </header>
  );
}

export default HeaderWrapper;
