import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  {
    code: "en",
    name: "English",
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 640 480">
        <g fillRule="evenodd">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="m75,0 244,181 244,-181h77v62L394,248l245,185v47h-77L318,292 73,480H0v-60L247,234 0,46V0h75z"
          />
          <path
            fill="#C8102E"
            d="m424,281 216,159v40L369,281h55zm-184,20 6,35L54,480H0l240,-179zM640,0v3L391,191l2,-44L590,0h50zM0,0l239,176h-60L0,42V0z"
          />
          <path fill="#FFF" d="M241,0v480h160V0H241zM0,160v160h640V160H0z" />
          <path fill="#C8102E" d="M0,193v96h640v-96H0zM273,0v480h96V0h-96z" />
        </g>
      </svg>
    ),
  },
  {
    code: "fr",
    name: "Français",
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 640 480">
        <g fillRule="evenodd">
          <path fill="#fff" d="M0 0h640v480H0z" />
          <path fill="#002654" d="M0 0h213.3v480H0z" />
          <path fill="#CE1126" d="M426.7 0H640v480H426.7z" />
        </g>
      </svg>
    ),
  },
  {
    code: "es",
    name: "Español",
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 640 480">
        <path fill="#c60b1e" d="M0 0h640v480H0z" />
        <path fill="#ffc400" d="M0 120h640v240H0z" />
      </svg>
    ),
  },
  {
    code: "ar",
    name: "العربية",
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 640 480">
        <path fill="#006c35" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M120 120h400v240H120z" />
      </svg>
    ),
  },
  {
    code: "zh",
    name: "中文",
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 640 480">
        <path fill="#de2910" d="M0 0h640v480H0z" />
        <path
          fill="#ffde00"
          d="M76.8 96l20.4 62.8H163l-53.1 38.6 20.3 62.8-53-38.6-53.1 38.6 20.3-62.8-53-38.6h65.8z"
        />
      </svg>
    ),
  },
];

const LanguageSelector = ({ onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const handleSelect = (language) => {
    setSelectedLang(language);
    setIsOpen(false);
    onLanguageChange?.(language.code);
  };

  return (
    <div className="relative w-28">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-[6px] text-left hover:border-black transition-all duration- bg-white border-2 rounded-full shadow-sm hover:bg-gray-50 flex items-center justify-between gap-2"
        style={{
          fontSize: "clamp(0.8rem, 0.7358rem + 0.2936vw, 1rem)",
        }}
      >
        <span className="flex items-center gap-2">
          <span className="flex-shrink-0">{selectedLang.flag}</span>
          <span className="font-semibold truncate">{selectedLang.name}</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-10">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => handleSelect(language)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between gap-2"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex-shrink-0">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                  </span>
                  {selectedLang.code === language.code && (
                    <Check className="w-4 h-4 text-blue-500" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
