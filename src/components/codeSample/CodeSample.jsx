import { useState } from "react";
import "./CodeSample.css";
import SectionText from "../sectionText/SectionText";
import { Copy, CheckCheck } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const code = `from elevenlabs import ElevenLabs

client = ElevenLabs(
    api_key="YOUR_API_KEY",
)

client.text_to_speech.convert(
    voice_id="21m00Tcm4TlvDq8ikWAM",
    model_id="eleven_multilingual_v2",
    text="Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요!"
)`;

const tabs = ["PYTHON", "JAVASCRIPT", "CURL"];

const CodeSample = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("PYTHON");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full code__sample mb-10">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <SectionText
          Niche="Developers"
          title="Fast and easy-to-use APIs and SDKs"
          subText="We obsess over building the fastest and simplest APIs and SDKs so you can focus on building incredible applications."
          firstBtnText="Developer guides"
          secondBtnText="API reference"
        />
        <div className="lg:w-1/2 w-full codeSandBox lg:bg-[var(--neutral-50)] flex justify-center items-center rounded-md px-3 lg:py-36 py-5">
          <div className="code__sample__container rounded-lg bg-black w-full sm:w-[80%]">
            <div className="header p-4 flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="cotroll__buttons flex items-center gap-2">
                  <div className="button bg-red-500"></div>
                  <div className="button bg-yellow-400"></div>
                  <div className="button bg-green-500"></div>
                </div>
                <div className="langBtn flex items-center gap-4">
                  {tabs.map((tab) => (
                    <button
                      key={uuidv4()}
                      className={`langBtn__item ${
                        activeTab === tab &&
                        "border-[1px] border-gray-500 py-1 px-2 rounded-xl hover:bg-white hover:!text-black hover:border-transparent duration-500 transition-all"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              {copied ? (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] opacity-80 text-white">
                    Copied!
                  </span>
                  <CheckCheck
                    size={20}
                    className="text-white hover:opacity-80 duration-300 transition-opacity cursor-pointer"
                  />
                </div>
              ) : (
                <Copy
                  size={20}
                  className="text-white hover:opacity-80 duration-300 transition-opacity cursor-pointer"
                  onClick={handleCopy}
                />
              )}
            </div>
            <div className="body">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <div className="flex gap-2">
                  <span className="text-[#9CDCFE]">from</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white">thinkink</span>
                    <span className="text-[#9CDCFE]">import</span>
                    <span className="text-white">ThinkInk</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-white">client</span>
                  <span className="text-gray-400"> = </span>
                  <span className="text-white">ThinkInk(</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#9CDCFE]">api_key</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-[#CE9178]">"YOUR_API_KEY"</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="text-white">)</div>
                <div className="mt-4">
                  <span className="text-white">
                    client.text_to_speech.convert(
                  </span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-[#9CDCFE]">voice_id</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-[#CE9178]">
                      "21m00Tcm4TlvDq8ikWAM"
                    </span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-[#9CDCFE]">model_id</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-[#CE9178]">
                      "eleven_multilingual_v2"
                    </span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-[#9CDCFE]">text</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-[#CE9178]">
                      "Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا!
                      안녕하세요!"
                    </span>
                  </div>
                </div>
                <div className="text-white">)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSample;
