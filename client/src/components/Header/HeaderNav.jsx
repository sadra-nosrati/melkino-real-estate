import { Link } from "react-router";

function HeaderNav() {
  const hoverClass =
    "text-dark-text-muted hover:text-dark-primary active:text-dark-primary transition-colors duration-300";

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
