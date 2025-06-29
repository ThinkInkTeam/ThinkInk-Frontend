import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SideMenu from "../sideMenu/SideMenu.jsx";
import TopNav from "../../common/TopNav.jsx";

const navItems = [
  { id: uuidv4(), name: "api", link: "/api" },
  { id: uuidv4(), name: "pricing", link: "/pricing" },
  { id: uuidv4(), name: "about", link: "/about" },
  { id: uuidv4(), name: "contact", link: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClasses =
    "hover:opacity-70 duration-300 transition-opacity font-medium";

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <TopNav />
      <header className="shadow-xl py-3 px-9 sticky top-0 bg-[var(--white)] z-50">
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
            strokeWidth={2.5}
            size={30}
          />
          <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} hasChildren={true} />
        </div>
      </header>
    </div>
  );
};

export default Header;
