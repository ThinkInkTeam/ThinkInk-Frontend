import { CloudUpload, Play } from "lucide-react";
import LanguageSelector from "../LanguageSelector.jsx";
import './fileupload.css';

const FileUpload = () => {
  return (
    <section className="container mx-auto text-center mt-5 mb-10">
      {/* Header buttons */}
      <div className="header__btns flex gap-3 sm:gap-5 items-center justify-center mb-3 sm:mb-5">
        <button
          className="whitespace-nowrap border border-slate-400 py-2 px-4 rounded-full font-semibold shadow-sm hover:border-black capitalize transition-colors duration-300"
          style={{ fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)" }}
        >
          Brain Signal to Text
        </button>
        <button
          className="whitespace-nowrap border border-slate-400 py-2 px-4 rounded-full font-semibold shadow-sm hover:border-black capitalize transition-colors duration-300"
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
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full">
            <label
              htmlFor="eegFile"
              className="w-full border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="border-2 border-slate-300 rounded-[12px] shadow-lg p-3">
                <CloudUpload size={50} color="gray" />
              </div>
              <p className="mt-3 font-semibold text-lg text-gray-700">
                Upload EEG File (JSON or ASCII)
              </p>
              <p className="text-sm text-gray-500">
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
            />
          </div>
          <div className="options__btns flex items-center justify-start w-full gap-5 border-b-2 border-gray-300 pb-5 mt-5 overflow-x-scroll overflow-y-visible sm:overflow-visible">
            <LanguageSelector />
            <div className="flex items-center gap-3 justify-center">
              <button
                className="whitespace-nowrap font-semibold border shadow-md border-slate-200 hover:border-black duration-300 transition-colors rounded-full py-[6px] px-4"
                style={{
                  fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)",
                }}
              >
                Text to speech
              </button>
              <button
                className="whitespace-nowrap font-semibold border shadow-md border-slate-200 hover:border-black duration-300 transition-colors rounded-full py-[6px] px-4"
                style={{
                  fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)",
                }}
              >
                Sentiment analysis
              </button>
              <button
                className="whitespace-nowrap font-semibold border shadow-md border-slate-200 hover:border-black duration-300 transition-colors rounded-full py-[6px] px-4"
                style={{
                  fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)",
                }}
              >
                Language Generation
              </button>
            </div>
          </div>
          <button className="capitalize bg-black font-semibold duration-300 transition-all cursor-pointer py-[6px] px-4 rounded-full text-[1.1rem] ml-auto">
            <Play size={20} color="white" aria-label="generate button"/>
          </button>
        </form>
      </div>
    </section>
  );
};

export default FileUpload;
