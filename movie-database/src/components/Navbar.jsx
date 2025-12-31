import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-lg font-bold">
          <img
            src="/images/logoo2.png"
            alt="MovieDB Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-300'
                  : 'hover:text-gray-300 transition'
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="TopRated"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-300'
                  : 'hover:text-gray-300 transition'
              }
            >
            Top Rated
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-300'
                  : 'hover:text-gray-300 transition'
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-300'
                  : 'hover:text-gray-300 transition'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
