export default function GreenTag({ duration = "2", className }) {
  return (
    <span
      className={`text-[0.8rem] py-[2px] bg-[var(--green-200)] text-[var(--green-800)] rounded-full px-2 whitespace-nowrap mb-[6px] uppercase h-5 ${className}`}
    >
      {duration} months free
    </span>
  );
}
