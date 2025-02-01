import React from "react";
import "./CodeSample.css";
import SectionText from "../sectionText/SectionText";

const CodeSample = () => {
  return (
    <div className="w-full code__sample mb-10">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <SectionText
          Niche="Developers"
          title="Fast and easy-to-use APIs and SDKs"
          subText="We obsess over building the fastest and simplest APIs and SDKs so you can focus on building incredible applications."
          firstBtnText="Developer guides"
          secondBtnText="API reference"
        />
        <div className="lg:w-1/2 w-full codeSandBox bg-[var(--neutral-50)] flex justify-center items-center rounded-md">
          <div className="code__sample__container rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default CodeSample;
