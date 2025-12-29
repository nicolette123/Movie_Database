const Navbar = () => {
  return (
 <nav className="bg-blue-900 text-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-lg font-bold">
          Logo
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-300 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            Top Rated
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
