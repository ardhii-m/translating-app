function InputArea({ value, onChange }) {
  return (
    <>
      <textarea
        className="resize-none h-40 w-full text-(--text-color) rounded-md bg-transparent font-semibold invalid:outline-none"
        placeholder="Enter text..."
        spellCheck={false}
        maxLength={500}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="pt-4 text-right text-sm text-(--text-color)">
        {value.length}/500
      </div>
    </>
  );
}

export default InputArea;
