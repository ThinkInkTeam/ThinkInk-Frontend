import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";

const ExperiencePopup = ({ description }) => {
  const [score, setscore] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleClickOutside = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsOpen(false);
    }
  };

  const handleFeedbackSubmit = () => {
    if (!score) {
      alert("Please submit your feedback.");
    } else {
      setIsOpen(false);
      toast.success("Thanks for your feedback! 🎉");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    isOpen && (
      <div
        id="popup-overlay"
        onClick={handleClickOutside}
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 transition-opacity duration-300"
      >
        <div className="relative bg-white text-black text-center p-8 rounded-xl shadow-lg w-[90%] max-w-md transform transition-all duration-300 scale-100">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-4 text-black text-lg font-bold"
          >
            <X strokeWidth={"3px"} />
          </button>

          <span className="inline-block text-black px-4 py-1 rounded-full text-lg font-semibold capitalize">
            {description}
          </span>

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-4">
              How was your experience with us?
            </h2>
            <div className="my-4">
              <span className="text-3xl">
                {score < 3 ? "😞" : score < 7 ? "🙂" : "😃"}
              </span>
            </div>
            <div className="w-full">
              <input
                type="range"
                value={score}
                onChange={(e) => setscore(Number(e.target.value))}
                min="0"
                max="10"
                className="w-full accent-black"
              />
            </div>
          </div>

          <button
            className="bg-black text-white py-1 px-3 font-semibold cursor-pointer outline-none border-none rounded-md"
            onClick={handleFeedbackSubmit}
          >
            Send
          </button>
        </div>
      </div>
    )
  );
};

export default ExperiencePopup;
