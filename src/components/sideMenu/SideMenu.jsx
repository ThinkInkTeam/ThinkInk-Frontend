import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const navItems = [
  { id: uuidv4(), name: "api", link: "/api" },
  { id: uuidv4(), name: "pricing", link: "/pricing" },
  { id: uuidv4(), name: "about", link: "/about" },
  { id: uuidv4(), name: "contact", link: "/contact" },
];

const SideMenu = ({ isOpen, setIsOpen }) => {
  const linkClasses =
    "mt-5 block text-2xl capitalize hover:ml-3 hover:text-gray-400 duration-300 transition-all font-medium";
  return (
    <aside
      className={`fixed top-0 h-screen w-52 bg-gray-800 text-white z-50 p-5 transition-all duration-300 ease-in-out
        ${isOpen ? "right-0" : "right-[-100%]"} sm:hidden`}
    >
      <X
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        size={30}
        className="absolute right-[5%] top-[3%] cursor-pointer hover:opacity-80 transition-all duration-300"
      />
      <nav className="flex flex-col justify-center space-y-5 mt-20 ">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className={linkClasses}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
