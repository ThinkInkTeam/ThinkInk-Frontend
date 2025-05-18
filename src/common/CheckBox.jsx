import "../global/styles.css";

export default function CheckBox({ value, onChange }) {
  return (
    <div className="checkmarkContainer">
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={value ? true : false}
      />
      <div className="checkmark"></div>
    </div>
  );
}