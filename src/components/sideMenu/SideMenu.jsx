import { Copyright, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { User } from "lucide-react";

const navItems = [
  { id: uuidv4(), name: "api", link: "/api" },
  { id: uuidv4(), name: "pricing", link: "/pricing" },
  { id: uuidv4(), name: "about", link: "/about" },
  { id: uuidv4(), name: "contact", link: "/contact" },
];

const SideMenu = ({ isOpen, setIsOpen, hasChildren }) => {
  const linkClasses = "mt-5 block text-2xl capitalize font-medium";
  const isLogin = !!localStorage.getItem("authToken");

  return (
    <aside
      className={`fixed top-0 h-screen w-full bg-light text-dark z-50 p-5 transition-all duration-300 ease-in-out
        ${isOpen ? "right-0" : "right-[-100%]"} sm:hidden`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[1.3rem] tracking-[0.5px]">ThinkInk</h3>
        <X
          onClick={() => {
            setIsOpen(false);
          }}
          size={30}
          className="cursor-pointer"
        />
      </div>
      <nav className="flex mt-8">
        <ul className="flex flex-col items-baseline w-full">
          {navItems.map((item) => (
            <li key={item.id} className="w-full">
              <div className="flex items-center justify-between w-full hover:opacity-60 duration-300 transition-all">
                <Link to={item.link} className={linkClasses}>
                  {item.name}
                </Link>
                {hasChildren && <ChevronRight />}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {isLogin && (
        <Link
          to="/Profile"
          className="sm:hidden flex p-2 border rounded-full hover:bg-gray-100 transition-colors duration-300 w-fit mt-5"
        >
          <User />
        </Link>
      )}
      <div className="flex items-center justify-center absolute bottom-5 right-1/2 transform translate-x-1/2 gap-1">
        <Copyright size={15} />
        <span>{new Date().getFullYear()} thinkInk</span>
      </div>
    </aside>
  );
};

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  hasChildren: PropTypes.bool,
};
export default SideMenu;
