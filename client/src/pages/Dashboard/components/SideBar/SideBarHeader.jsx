import { Link } from "react-router";

function SideBarHeader() {
  return (
    <Link
      to="/"
      onClick={() => console.log("logo")}
      className="mb-8 tablet-landscape:mb-12 flex items-center justify-center text-3xl tracking-[0.3em] text-[#F2CA50]"
    >
      <h1 className="text-3xl tracking-[0.3em] text-[#F2CA50]">MELKINO</h1>
    </Link>
  );
}

export default SideBarHeader;
