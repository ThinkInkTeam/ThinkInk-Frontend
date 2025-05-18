import "../global/styles.css";

export default function CheckBox({ value, onChange, checked }) {
  return (
    <div className="checkmarkContainer">
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={checked ? true : false}
      />
      <div className="checkmark"></div>
    </div>
  );
}