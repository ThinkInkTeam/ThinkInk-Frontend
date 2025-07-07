import { Bluetooth } from "lucide-react";
import Header from "../components/header/Header";

const BluetoothConnectCard = () => {
  const handleConnect = () => {
    alert("Attempting to connect to EEG sensor...");
  };

  return (
    <>
      <Header />
      <section
        className="flex items-center justify-between gap-4 bg-white shadow-md rounded-xl p-6 max-w-md w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        role="region"
        aria-label="Bluetooth EEG Connection"
      >
        <div className="flex items-center gap-4">
          <Bluetooth className="w-12 h-12 text-blue-700" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-gray-800">
              Connect EGG Sensor
            </p>
            <p className="text-sm text-gray-600">with Bluetooth</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-blue-900 font-bold text-xl">01</span>
          <button
            onClick={handleConnect}
            className="px-4 py-1 bg-white border border-gray-300 text-blue-900 font-medium rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            aria-label="Connect to EEG Sensor via Bluetooth"
          >
            Connect
          </button>
        </div>
      </section>
    </>
  );
};

export default BluetoothConnectCard;
