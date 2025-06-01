import Header from "../components/header/Header";
import SwitchBtn from "../common/SwitchBtn.jsx";
import { useState } from "react";

const Pricing = () => {
  const [checked, setChecked] = useState(false);
  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <div className="text_wrapper mt-[4rem] mb-10">
          <h3
            className="font-bold"
            style={{ fontSize: "clamp(2rem, 1.7573rem + 1.0356vw, 3rem)" }}
          >
            Pricing
          </h3>
          <div className="flex lg:items-center justify-between w-full flex-col lg:flex-row gap-3 lg:gap-0">
            <p
              style={{
                fontSize: "clamp(1rem, 0.9697rem + 0.1294vw, 1.125rem)",
              }}
            >
              Plans built for creators and business of all sizes
            </p>
            <div
              className="gap-1 justify-center text-[0.8rem] font-bold flex items-center capitalize tracking-[0.5px]"
              style={{ alignItems: "self-end" }}
            >
              <SwitchBtn checked={checked} onChecked={handleSwitchChange} />
              <span className="uppercase mb-[6px] font-bold text-[13px]">
                Annual billing
              </span>
              <span className="tag bg-[var(--green-200)] text-[var(--green-800)] rounded-full px-2 whitespace-nowrap mb-[6px] uppercase h-5">
                2 months free
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
