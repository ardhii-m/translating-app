import { useState, useEffect } from "react";
import BottomButtons from "./BottomButtons";
import TranslateIcon from "../assets/Sort_alfa.svg";
import swapIcon from "../assets/Horizontal_top_left_main.svg";
import { getTranslation } from "../utils/network-data";

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

  useEffect(() => { translateHandler(); }, []);

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
          <div className="flex gap-3 font-semibold h-10 items-center mb-4">
            <button onClick={() => setSourceLang("autodetect")}
              className={sourceLang === "autodetect" ? "bg-(--border-color) px-3 py-1 rounded-xl" : ""}>Detect Language</button>
            {LANGUAGES.map(({ label, code }) => (
              <button key={code} onClick={() => setSourceLang(code)}
                className={sourceLang === code ? "bg-(--border-color) px-3 py-1 rounded-xl" : ""}>
                {label}
              </button>
            ))}
          </div>
          <div className="border-t border-(--border-color) mb-4" />
          <textarea
            className="resize-none h-40 w-full text-(--text-color) rounded-md bg-transparent font-semibold invalid:outline-none"
            placeholder="Enter text..."
            spellCheck={false}
            maxLength={500}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="pt-4 text-right text-sm text-(--text-color)">{inputText.length}/500</div>
          <div className="flex justify-between items-center mt-4">
            <BottomButtons />
            <button
              onClick={translateHandler}
              disabled={loading}
              className="flex items-center gap-2 border rounded-xl font-semibold py-3 px-6 border-(--translate-border) bg-(--translate-color) cursor-pointer disabled:opacity-50">
              <img src={TranslateIcon} />{loading ? "Translating..." : "Translate"}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--right-card) text-(--text-color) border border-(--border-color) rounded-2xl p-4">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3 font-semibold h-10 items-center">
              {LANGUAGES.map(({ label, code }) => (
                <button key={code} onClick={() => setTargetLang(code)}
                  className={targetLang === code ? "bg-(--border-color) px-3 py-1 rounded-xl" : ""}>
                  {label}
                </button>
              ))}
            </div>
            <button onClick={swapHandler} disabled={sourceLang === "autodetect"} className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-xl border border-(--border-color) disabled:opacity-30 disabled:cursor-not-allowed">
              <img src={swapIcon} alt="Switch Language" />
            </button>
          </div>
          <div className="border-t border-(--border-color) mb-4" />
          <div className="h-40 w-full font-bold">{outputText}</div>
          <div className="flex justify-between items-center mt-4">
            <BottomButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TranslateForm;
