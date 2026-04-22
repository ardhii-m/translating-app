function OutputArea({ value }) {
  return (
    <div className="resize-none h-40 w-full text-(--text-color) rounded-md bg-transparent font-semibold invalid:outline-none">
      {value}
    </div>
  );
}

export default OutputArea;
