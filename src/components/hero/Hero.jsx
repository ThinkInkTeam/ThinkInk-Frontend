import "./hero.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Hero = ({ isLogin }) => {
  return (
    <div className="hero__section container mx-auto mt-8 md:mt-16 p-5">
      <h1 className="leading-[110%] font-bold capitalize w-[104%] md:w-[80%]">
        Revolutionizing communication with advanced brain-to-text technology
      </h1>
      <p className="font-medium leading-[140%] tracking-[0.01rem] mt-[10px]">
        Turn Thoughts into Words with Our AI-Powered Neurotech Innovation.
      </p>
      <Link
        to={isLogin ? "/pricing" : "/login"}
        className="capitalize bg-black text-white font-bold py-2 px-7 rounded-full transition-all hover:opacity-60 duration-300 mt-4 inline-block"
      >
        {isLogin ? "start your free trial" : "Get Started Free"}
      </Link>
    </div>
  );
};

Hero.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
export default Hero;
