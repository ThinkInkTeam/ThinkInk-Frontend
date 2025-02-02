import React from "react";
import "./SectionText.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SectionText = ({
  Niche,
  title,
  subText,
  firstBtnText,
  secondBtnText,
}) => {
  return (
    <div className="lg:w-1/2 w-full p-5 Section__text">
      <h5>{Niche}</h5>
      <h3 className="lg:w-[65%]">{title}</h3>
      <p className="xl:w-[80%]">{subText}</p>
      <div className="buttons__wrapper font-bold flex sm:gap-3 gap-2 mt-4">
        <Link
          to="/api"
          className="btnLink capitalize bg-black text-white py-3 px-5 sm:px-7 rounded-full transition-all hover:opacity-80 duration-300"
        >
          {firstBtnText}
        </Link>
        <Link
          to="/api"
          className="btnLink capitalize  py-3 px-5 sm:px-7 rounded-full transition-all"
        >
          {secondBtnText}
        </Link>
      </div>
    </div>
  );
};

SectionText.prototype = {
  Niche: PropTypes.string,
  title: PropTypes.string,
  subText: PropTypes.string,
  firstBtnText: PropTypes.string,
  secondBtnText: PropTypes.string,
};
export default SectionText;
