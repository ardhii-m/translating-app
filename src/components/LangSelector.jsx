import PropTypes from "prop-types";

function LangSelector({ languages, selected, onSelect, showAuto }) {
  return (
    <div className="flex gap-3 font-semibold h-10 items-center">
      {showAuto && (
        <button
          onClick={() => onSelect("autodetect")}
          className={selected === "autodetect" ? "bg-(--border-color) px-3 py-1 rounded-xl" : ""}
        >
          Detect Language
        </button>
      )}

      {languages.map(({ label, code }) => (
        <button
          key={code}
          onClick={() => onSelect(code)}
          className={selected === code ? "bg-(--border-color) px-3 py-1 rounded-xl" : ""}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

LangSelector.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, code: PropTypes.string })
  ).isRequired,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
  showAuto: PropTypes.bool,
};

export default LangSelector;