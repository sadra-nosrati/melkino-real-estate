import { Link } from "react-router";

function TopBar() {
  return (
    <div className="flex items-center justify-between mx-auto w-full max-w-[1280px] px-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl text-dark-primary">بهترین ملک ها</h2>
        <p
          style={{ fontFamily: "YekanBakh-Light" }}
          className="text-xs text-dark-text-muted"
        >
          مجلل ترین ویلاها و آپارتمان های تهران را انتخواب کنید
        </p>
      </div>
      <Link
        to="/dashboard/favorites"
        className="text-dark-primary hover:text-dark-accent transition cursor-pointer"
      >
        مشاهده همه
      </Link>
    </div>
  );
}

export default TopBar;
