import { Link } from "react-router-dom";
import { Pause } from "lucide-react";
import Slider from "../components/side-slider/Slider";
import TopNav from "../common/TopNav";

const ComingSoon = () => {
  return (
    <div className="h-screen overflow-hidden">
      <TopNav />
      <div className="flex p-6 justify-center">
        <div className="relative w-full lg:w-1/2 h-[calc(100vh-3rem)] items-center">
          <Link to="/" className="text-2xl font-bold">
            ThinkInk
          </Link>
          <div className="absolute w-full flex items-center flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-3xl uppercase mb-4 flex gap-[6px] items-center">
              <Pause size={30} />
              coming soon!!!
              <Pause size={30} />
            </p>
            <Link
              style={{ fontSize: "clamp(0.75rem, 0.6620rem + 0.3756vw, 1rem)" }}
              to="/"
              className="bg-dark text-light px-8 py-3 rounded-lg hover:opacity-80 duration-300 transition-opacity"
            >
              Back To HomePage
            </Link>
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default ComingSoon;
