import footerData from "./footerData.js";
import { Link } from "react-router-dom";
import { Copyright, ChevronUp, ChevronDown } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "./footer.css";

const Footer = () => {
  const [ismobile, setIsMobile] = useState(window.innerWidth < 900);
  const [listOpen, setListOpen] = useState({});

  // Check if the window is size is less than 900px to render another footer start layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleList = (index) => {
    setListOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <footer>
      <div className="container mx-auto flex flex-col sm:gap-20 gap-8 justify-between p-4 wrapper">
        <div className="footer__start ">
          {ismobile
            ? footerData.map((data, index) => (
                <div
                  key={uuidv4()}
                  className="flex items-start flex-col gap-2 mb-5"
                >
                  <button
                    className="flex justify-between items-center w-full"
                    onClick={() => toggleList(index)}
                    aria-expanded={listOpen[data.heading]}
                  >
                    <span className="font-semibold">{data.heading}</span>
                    <span>
                      {listOpen[index] ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </button>
                  {listOpen[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <ul>
                        {data.children.map((child) => (
                          <li key={uuidv4()} className="!font-medium">
                            <Link to="/">{child}</Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))
            : footerData.map((data) => (
                <div key={uuidv4()} className="flex items-start flex-col gap-2">
                  <h3>{data.heading}</h3>
                  <ul>
                    {data.children.map((child) => (
                      <li key={uuidv4()}>
                        <Link to="/">{child}</Link>
                      </li>
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
              {["Soc II", "GDPR", "C2PA"].map((tag) => (
                <button key={uuidv4()}>{tag}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
