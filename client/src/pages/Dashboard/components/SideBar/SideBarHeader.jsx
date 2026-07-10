import { Link } from "react-router";

function SideBarHeader() {
  return (
    <Link
      to="/"
      onClick={() => console.log("logo")}
      className="mb-8 tablet-landscape:mb-12 flex items-center justify-center text-3xl tracking-[0.3em] text-dark-primary"
    >
      <h1 className="text-3xl tracking-[0.3em] text-dark-primary">MELKINO</h1>
    </Link>
  );
}

export default SideBarHeader;
