import { CloudUpload, Play } from "lucide-react";
import LanguageSelector from "../LanguageSelector.jsx";
import "./fileupload.css";
import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [activeHeaderBtn, setActiveHeaderBtn] = useState("brain-signal");
  const [activeOptions, setActiveOptions] = useState(new Set());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please select a file to upload.");

    const formData = new FormData();
    formData.append("file", file);

    setIsLoading(true);

    // Add 3-second delay
    setTimeout(async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        console.log("Upload success:", res.data);
      } catch (err) {
        console.error("Upload error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 3000); // 3 seconds delay
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const toggleOptionButton = (option) => {
    const newActiveOptions = new Set(activeOptions);
    if (newActiveOptions.has(option)) {
      newActiveOptions.delete(option);
    } else {
      newActiveOptions.add(option);
    }
    setActiveOptions(newActiveOptions);
  };

  // Loader component
  const Loader = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mb-4"></div>
        <p className="text-lg font-semibold">Processing EEG file...</p>
        <p className="text-sm text-gray-600">This may take a few moments</p>
      </div>
    </div>
  );

  return (
    <>
      {isLoading && <Loader />}
      <section className="container mx-auto text-center mt-5 mb-10">
        {/* Header buttons */}
        <div className="header__btns flex gap-3 sm:gap-5 items-center justify-center mb-3 sm:mb-5">
          <button
            onClick={() => setActiveHeaderBtn("brain-signal")}
            className={`whitespace-nowrap border py-2 px-4 rounded-full font-semibold shadow-sm capitalize transition-all duration-300 transform active:scale-95 ${
              activeHeaderBtn === "brain-signal"
                ? "border-black bg-black text-white shadow-lg"
                : "border-slate-400 hover:border-black hover:shadow-md"
            }`}
            style={{ fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)" }}
          >
            Brain Signal to Text
          </button>
          <button
            onClick={() => setActiveHeaderBtn("recording")}
            className={`whitespace-nowrap border py-2 px-4 rounded-full font-semibold shadow-sm capitalize transition-all duration-300 transform active:scale-95 ${
              activeHeaderBtn === "recording"
                ? "border-black bg-black text-white shadow-lg"
                : "border-slate-400 hover:border-black hover:shadow-md"
            }`}
            style={{ fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)" }}
          >
            Recording Brain Waves
          </button>
        </div>
        <div className="w-full lg:w-[60%] mx-auto rounded-lg border border-gray-400 p-5 shadow-md">
          <form
            action=""
            method="post"
            encType="multipart/form-data"
            className="flex flex-col items-center justify-center gap-3"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full">
              <label
                htmlFor="eegFile"
                className="w-full border-2 border-dashed border-[#6b7280] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition"
              >
                <div className="border-2 border-slate-300 rounded-[12px] shadow-lg p-3">
                  <CloudUpload size={50} color="gray" />
                </div>
                <p className="mt-3 font-semibold text-lg text-gray-700">
                  Upload EEG File (JSON or ASCII)
                </p>
                <p className="text-sm text-[#6b7280]">
                  or, click to browse (Max 4MB)
                </p>
              </label>
              <input
                type="file"
                id="eegFile"
                name="eegFile"
                accept=".json, .txt, .asc"
                className="hidden"
                aria-label="Upload EEG file"
                onChange={handleFileChange}
              />
            </div>
            <div className="options__btns flex items-center justify-start w-full gap-5 border-b-2 border-gray-300 pb-5 mt-5 overflow-x-scroll overflow-y-visible sm:overflow-visible">
              <LanguageSelector />
              <div className="flex items-center gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => toggleOptionButton("text-to-speech")}
                  className={`whitespace-nowrap font-semibold border shadow-md rounded-full py-[6px] px-4 transition-all duration-300 transform active:scale-95 ${
                    activeOptions.has("text-to-speech")
                      ? "border-black bg-black text-white shadow-lg"
                      : "border-slate-200 hover:border-black hover:shadow-lg"
                  }`}
                  style={{
                    fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)",
                  }}
                >
                  Text to speech
                </button>
                <button
                  type="button"
                  onClick={() => toggleOptionButton("sentiment-analysis")}
                  className={`whitespace-nowrap font-semibold border shadow-md rounded-full py-[6px] px-4 transition-all duration-300 transform active:scale-95 ${
                    activeOptions.has("sentiment-analysis")
                      ? "border-black bg-black text-white shadow-lg"
                      : "border-slate-200 hover:border-black hover:shadow-lg"
                  }`}
                  style={{
                    fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)",
                  }}
                >
                  Sentiment analysis
                </button>
                <button
                  type="button"
                  onClick={() => toggleOptionButton("language-generation")}
                  className={`whitespace-nowrap font-semibold border shadow-md rounded-full py-[6px] px-4 transition-all duration-300 transform active:scale-95 ${
                    activeOptions.has("language-generation")
                      ? "border-black bg-black text-white shadow-lg"
                      : "border-slate-200 hover:border-black hover:shadow-lg"
                  }`}
                  style={{
                    fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)",
                  }}
                >
                  Language Generation
                </button>
              </div>
            </div>
            <button
              type="submit"
              aria-label="Process EEG file"
              className="capitalize bg-black font-semibold duration-300 transition-all cursor-pointer py-[6px] px-4 rounded-full text-[1.1rem] ml-auto disabled:opacity-50 transform active:scale-95 hover:bg-gray-800"
              disabled={isLoading || !file}
            >
              {isLoading ? "Processing..." : <Play size={20} color="white" />}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default FileUpload;
