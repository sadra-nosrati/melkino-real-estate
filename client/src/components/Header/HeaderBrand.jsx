import { Link } from "react-router";

function HeaderBrand() {
  return (
    <Link
      to="/"
      className="
        text-[#F2CA50] text-3xl tablet-portrait:text-4xl font-semibold tracking-wide select-none"
    >
      Melkino
    </Link>
  );
}

export default HeaderBrand;
