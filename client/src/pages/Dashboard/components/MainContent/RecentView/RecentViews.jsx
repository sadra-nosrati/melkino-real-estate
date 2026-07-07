import RecentViewCart from "./RecentViewCart";

function RecentViews() {
  return (
    <div className="w-full laptop:w-[35%]">
      <header>
        <h2 className="text-xl tablet-portrait:text-2xl text-zinc-200">
          آخرین بازدیدها
        </h2>
      </header>

      <div className="mt-3 space-y-4">
        <RecentViewCart />
      </div>
    </div>
  );
}

export default RecentViews;
