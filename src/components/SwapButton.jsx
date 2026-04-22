function SwapButton({ onSwap, disabled, icon }) {
  return (
    <button
      onClick={onSwap}
      disabled={disabled}
      className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-xl border border-(--border-color) disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <img src={icon} alt="Switch Language" />
    </button>
  );
}

export default SwapButton;
