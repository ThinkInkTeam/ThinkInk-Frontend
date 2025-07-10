import Header from "../components/header/Header";
import ResponsePopup from "../components/response-popup/ResponsePopup.jsx";
import { useContext } from "react";
import { UploadContext } from "../context/UploadContext.jsx"; // Import context

export default function Profile() {
  const { uploadHistory } = useContext(UploadContext); // Access context

  // Array of 12-15 words
  const descriptions = [
    "Amazing",
    "Fantastic",
    "Incredible",
    "Wonderful",
    "Outstanding",
    "Exceptional",
    "Marvelous",
    "Spectacular",
    "Impressive",
    "Remarkable",
    "Extraordinary",
    "Brilliant",
    "Fabulous",
    "Phenomenal",
    "Stunning",
  ];

  // Select a random word from the array
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  return (
    <div>
      <Header />
      {/* Pass the random description as a prop */}
      <ResponsePopup description={randomDescription} />

      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-5">Upload History</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Report Id</th>
              <th className="border border-gray-300 px-4 py-2">Upload Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {uploadHistory.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {item.report_id || "Unknown"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.uploadDate || new Date().toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.status || "Success"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
