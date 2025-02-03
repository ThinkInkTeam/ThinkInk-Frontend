import "./footer.css";
import footerData from "./footerData.js";
import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-col gap-20 justify-between p-4 wrapper">
        <div className="footer__start ">
          {footerData.map((data) => (
            <div className="flex items-start flex-col gap-2">
              <h3>{data.heading}</h3>
              <ul>
                {data.children.map((child) => (
                  <a href="/">
                    <li>{child}</li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__end">
          <div className="font-bold first w-full flex justify-between text-[1.3rem] tracking-[0.5px] border-b-2 border-gray-300 pb-6">
            <Link to="/">ThinkInk</Link>
            <p className="hidden sm:block">Revolutionizing communication</p>
          </div>
          <div className="end flex justify-between pt-6 pb-8">
            <div className="flex items-center justify-center gap-1">
              <Copyright size={13} />
              <span className="text-[0.8rem]">
                {new Date().getFullYear()} ThinkInk
              </span>
            </div>
            <div className="tags flex gap-2">
              <button className="">Soc II</button>
              <button>GDPR</button>
              <button>C2PA</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
