import { Link } from "react-router";

function HeaderNav() {
  const hoverClass =
    "text-[#D0C5AF] hover:text-[#F2CA50] active:text-[#F2CA50] transition-colors duration-300";

  return (
    <nav className="hidden tablet-portrait:block">
      <ul className="flex items-center gap-8">
        <li>
          <Link to="/" className={hoverClass}>
            خانه
          </Link>
        </li>

        <li>
          <Link to="/" className={hoverClass}>
            املاک برتر
          </Link>
        </li>

        <li>
          <Link to="/" className={hoverClass}>
            تماس با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
