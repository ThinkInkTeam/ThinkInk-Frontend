export default function TopNav() {
  const styles = {
    "backgroundRepeat": "repeat",
    "backgroundSize": "auto, 24px 24px",
    "backgroundBlendMode": "overlay",
    "backgroundImage":
      "linear-gradient(135deg, #131313 67%, #00A6D4 74%, #890976 85%, #FF5500 95%), url('/noise.png')",
  };

  return (
    <div
      className="h-[40px] text-white w-full flex items-center justify-center"
      style={styles}
    >
      <p className="font-bold text-[18px] text-center">
        Introducing ThinkInk v1
        <span className="opacity-60 text-[18px]">(beta)</span>🔥
      </p>
    </div>
  );
}
