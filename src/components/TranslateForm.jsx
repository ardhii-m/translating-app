import { useState, useEffect } from "react";
import BottomButtons from "./BottomButtons";
import TranslateIcon from "../assets/Sort_alfa.svg";
import swapIcon from "../assets/Horizontal_top_left_main.svg";
import { getTranslation } from "../utils/network-data";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
import LangSelector from "./LangSelector";
import SwapButton from "./SwapButton";

const LANGUAGES = [
  { label: "English", code: "en" },
  { label: "French", code: "fr" },
  { label: "Spanish", code: "es" },
];

function TranslateForm() {
  const [inputText, setInputText] = useState("Hello, how are you?");
  const [outputText, setOutputText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("fr");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    translateHandler();
  }, []);

  async function translateHandler() {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      const result = await getTranslation(inputText, sourceLang, targetLang);
      setOutputText(result);
    } catch {
      setOutputText("Translation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function swapHandler() {
    if (sourceLang === "autodetect") return;
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2.5 m-18 w-full p-4">
      <div className="w-full bg-left-card text-(--text-color) border border-(--border-color) rounded-2xl p-4">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <LangSelector
              languages={LANGUAGES}
              selected={sourceLang}
              onSelect={setSourceLang}
              showAuto
            />
          </div>
          <div className="border-t border-(--border-color) mb-4" />

          <InputArea value={inputText} onChange={setInputText} />
          
          <div className="flex justify-between items-center mt-4">
            <BottomButtons
              onCopy={() => navigator.clipboard.writeText(inputText)}
            />
            <button
              onClick={translateHandler}
              disabled={loading}
              className="flex items-center gap-2 border rounded-xl font-semibold p-2 border-(--translate-border) bg-(--translate-color) cursor-pointer disabled:opacity-50"
            >
              <img src={TranslateIcon} />
              {loading ? "Translating..." : "Translate"}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--right-card) text-(--text-color) border border-(--border-color) rounded-2xl p-4">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <LangSelector
              languages={LANGUAGES}
              selected={targetLang}
              onSelect={setTargetLang}
            />
            <SwapButton
              onSwap={swapHandler}
              disabled={sourceLang === "autodetect"}
              icon={swapIcon}
            />
          </div>
          <div className="border-t border-(--border-color) mb-4" />
          
          <OutputArea value={outputText} />

          <div className="flex justify-between items-center mt-4">
            <BottomButtons
              onCopy={() => navigator.clipboard.writeText(outputText)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TranslateForm;
