import Header from "../components/header/Header";
import SwitchBtn from "../common/SwitchBtn.jsx";
import { useState } from "react";
import PricingCard from "../components/pricingCard/PricingCard.jsx";
import pricingPlans from "../components/pricingCard/PricingCardData.js";
import GreenTag from "../common/GreenTag.jsx";
import TopNav from "../common/TopNav.jsx";

const Pricing = () => {
  const [checked, setChecked] = useState(false);
  const handleSwitchChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-5 px-4">
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
              className="gap-1 justify-center text-[0.8rem] font-bold flex capitalize tracking-[0.5px] lg:items-center"
              style={{ alignSelf: "start" }}
            >
              <SwitchBtn
                checked={checked}
                onChecked={handleSwitchChange}
                ariaLabel="Toggle annual billing"
              />
              <span className="uppercase mb-[6px] font-bold text-[13px]">
                Annual billing
              </span>
              <GreenTag duration={2} />
            </div>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center items-center gap-4">
          {pricingPlans.map((plan, index) => {
            return (
              <PricingCard
                key={`${plan.name}-${plan.price}`}
                plan={plan}
                index={index}
                annualBilling={checked}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Pricing;
