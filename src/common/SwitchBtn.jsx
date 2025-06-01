import "../global/styles.css";

export default function SwitchBtn({ checked, onChecked }) {
  return (
    <label class="switchBtn">
      <input type="checkbox" value={checked} onChange={onChecked} />
      <span class="slider"></span>
    </label>
  );
}
