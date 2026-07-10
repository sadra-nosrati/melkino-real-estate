import { Link } from "react-router";

function FooterNav() {
  const liStyle = "transition-colors duration-300 hover:text-dark-primary";

  return (
    <nav>
      <ul className="flex flex-wrap justify-center tablet-landscape:flex-nowrap gap-4 tablet-landscape:gap-6 text-zinc-400">
        <li>
          <Link to="/" className={liStyle}>
            خانه
          </Link>
        </li>

        <li>
          <Link to="/dashboard/favorites" className={liStyle}>
            املاک
          </Link>
        </li>

        <li>
          <Link to="/dashboard" className={liStyle}>
            حساب کاربری
          </Link>
        </li>

        <li>
          <Link to="/auth/login" className={liStyle}>
            ورود / عضویت
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
