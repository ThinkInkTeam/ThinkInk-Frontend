import { motion, AnimatePresence } from "framer-motion";
import "./fqa.css";
import fqaData from "./fqadata";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const Fqa = () => {
  const [listOpen, setListOpen] = useState({});

  const toggleList = (index) => {
    setListOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="fqa container mx-auto text-center p-3 flex flex-col items-center justify-center gap-5 my-5">
      <div className="heading">
        <h3 className="leading-[4rem] text-[4rem] font-bold">FAQs</h3>
        <p className="leading-[2rem] text-[1.3rem] font-normal capitalize">
          Got questions? We've got answers.
        </p>
      </div>
      <div className="questions flex flex-col items-center justify-center gap-5 sm:w-[80%] md:w-[60%] lg:w-[50%] w-full">
        {fqaData.map((questions, index) => (
          <div
            key={index}
            className="fqa__wrapper rounded-lg w-full p-5 border border-gray-200 shadow-md hover:border-black transition-all duration-300 ease-in-out"
          >
            <div
              className="fqa__question flex items-center justify-between cursor-pointer"
              onClick={() => toggleList(index)}
            >
              <h3 className="font-bold text-left">{questions.question}</h3>
              {listOpen[index] ? (
                <button aria-label="collapse Question">
                  <Minus />
                </button>
              ) : (
                <button aria-label="expand Question">
                  <Plus />
                </button>
              )}
            </div>

            <AnimatePresence>
              {listOpen[index] && (
                <motion.div
                  key={index}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-left pt-5">{questions.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fqa;
