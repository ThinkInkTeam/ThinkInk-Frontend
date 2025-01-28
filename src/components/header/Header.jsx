import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const navItems = [
  { id: uuidv4(), name: "api", link: "/api" },
  { id: uuidv4(), name: "pricing", link: "/pricing" },
  { id: uuidv4(), name: "about", link: "/about" },
  { id: uuidv4(), name: "contact", link: "/contact" },
];

const Header = () => {
  const linkClasses =
    "hover:underline hover:text-gray-400 duration-300 transition-all font-medium";
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-xl py-3 px-9">
      <div className="header__content container mx-auto text-[var(--black)] text-center flex items-center justify-between capitalize">
        <Link to="/" className="text-2xl font-semibold">
          ThinkInk
        </Link>
        <nav className="header__nav hidden sm:block">
          <ul className="flex justify-center space-x-9 text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className={linkClasses}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Menu
          className="block sm:hidden cursor-pointer"
          onClick={toggleSideMenu}
        />
      </div>
    </header>
  );
};

export default Header;
