import "../global/styles.css";

export default function SwitchBtn({ checked, onChecked, ariaLabel }) {
  return (
    <label className="switchBtn" aria-label={ariaLabel}>
      <input
        type="checkbox"
        value={checked}
        onChange={onChecked}
        id="Toggle-annual-billing"
      />
      <span className="slider"></span>
    </label>
  );
}
