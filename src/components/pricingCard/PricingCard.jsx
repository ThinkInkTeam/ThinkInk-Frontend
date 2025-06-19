import PropTypes from "prop-types";
import GreenTag from "../../common/GreenTag.jsx";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
export default function PricingCard({ plan, index, annualBilling }) {
  const features = plan.features;
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
        <div className="min-h-[48px]"></div>
      )}
      {plan.oldPrice ? (
        <p className="ml-2 text-[var(--neutral-400)] mt-[.75rem] font-bold text-[1.125rem]">
          <del> ${`${plan.oldPrice}`}</del>
        </p>
      ) : (
        <div className="min-h-[35px]"></div>
      )}
      <p className="ml-2 flex items-baseline gap-1">
        <strong
          className="font-bold"
          style={{ fontSize: "clamp(2rem, 1.7573rem + 1.0356vw, 3rem)" }}
        >
          ${annualBilling ? (plan.price * 12).toFixed(2) : plan.price}
        </strong>
        {annualBilling ? null : (
          <span className="font-normal text-[0.875rem] text-[var(--neutral-600)]">
            per month
          </span>
        )}
      </p>
      {annualBilling ? (
        <p className="ml-2 font-normal text-[0.875rem]">Billed yearly</p>
      ) : (
        <div className="min-h-[21px]"></div>
      )}
      <Link
        to="/register"
        className="mt-4 text-[0.875rem] font-bold w-[98%] flex items-center justify-center mx-auto rounded-full whitespace-nowrap bg-[var(--neutral-100)] h-[2.5rem] transition-all duration-500 ease-in-out hover:bg-[var(--neutral-200)]"
      >
        {plan.buttonLabel}
      </Link>
      <div className="mt-5 min-h-[202px]">
        {features.map((feature, index) => (
          <p
            key={feature}
            className={`flex items-center mt-2 gap-2 text-[0.875rem] font-bold ml-2 ${
              index === 0 ? "ml-0 font-normal" : ""
            }`}
          >
            {index !== 0 && (
              <Check size={15} className="text-[var(--primary-500)]" />
            )}
            {feature}
          </p>
        ))}
      </div>
    </li>
  );
}

PricingCard.propTypes = {
  plan: PropTypes.object,
  index: PropTypes.number,
  annualBilling: PropTypes.bool,
};
