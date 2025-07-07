import { Link } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SideMenu from "../sideMenu/SideMenu.jsx";
import TopNav from "../../common/TopNav.jsx";
import { LogOut, Settings, User, Menu } from "lucide-react";
import { logout } from "../../api/logout.jsx";

const navItems = [
  { id: uuidv4(), name: "api", link: "/api" },
  { id: uuidv4(), name: "pricing", link: "/pricing" },
  { id: uuidv4(), name: "about", link: "/about" },
  { id: uuidv4(), name: "contact", link: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTinyMenuOpen, setIsTinyMenuOpen] = useState(false);

  const isLogin = !!localStorage.getItem("authToken");

  const linkClasses =
    "hover:opacity-70 duration-300 transition-opacity font-medium";

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTinyMenu = () => {
    setIsTinyMenuOpen(!isTinyMenuOpen);
  };

  const logOut = async () => {
    try {
      const res = await logout();
      console.log(res.data.message);
    } catch (error) {
      console.error(
        "Logout error:",
        error?.response?.data?.error || error.message
      );
    } finally {
      localStorage.removeItem("authToken");
      setIsTinyMenuOpen(false);
      window.location.reload();
    }
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
          {isLogin && (
            <div
              onClick={toggleTinyMenu}
              className="profile_icon relative hidden sm:block p-2 border rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <Settings />
              {isTinyMenuOpen && (
                <div className="tiny_menu w-28 absolute p-2 border rounded-md bottom-[-45px] left-0 transform -translate-x-1/2 translate-y-1/2">
                  <div className="flex flex-row-reverse items-center justify-between">
                    <button
                      className="text-[0.9rem] font-medium !leading-none"
                      onClick={() => logOut()}
                    >
                      Log out
                    </button>
                    <LogOut size={20} />
                  </div>
                  <Link
                    className="mt-3 flex flex-row-reverse items-center justify-between"
                    to="/profile"
                  >
                    <span className="text-[0.9rem] font-medium !leading-none">
                      profile
                    </span>
                    <User size={20} />
                  </Link>
                </div>
              )}
            </div>
          )}
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
