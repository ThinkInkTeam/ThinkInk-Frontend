import PropTypes from "prop-types";
import GreenTag from "../../common/GreenTag.jsx";

export default function PricingCard({ plan, index }) {
  return (
    <li className="w-[340px] p-5 rounded-2xl shadow-lg border border-gray-200 font-bold text-[1.125rem]">
      <p className="text-[1.125rem] font-bold">{plan.name}</p>
      <p className="text-[var(--neutral-600)] mt-2 font-normal text-[0.875rem]">
        {plan.description}
      </p>
      <p className="mt-3 font-bold text-[0.875rem]">{plan.tokensPerMonth}</p>
      {index !== 0 ? (
        <GreenTag
          duration={index + 1}
          className={"ml-2 mt-4 pt-[1px] inline-block"}
        />
      ) : (
        <div className="inline-block h-8"></div>
      )}
    </li>
  );
}

PricingCard.propTypes = {
  plan: PropTypes.object,
  index: PropTypes.number,
};
