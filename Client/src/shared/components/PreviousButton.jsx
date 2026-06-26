function PreviousButton({ onPrev }) {
  return (
    <button
      type="button"
      onClick={onPrev}
      className="border rounded-lg px-5 py-2.5 font-medium cursor-pointer mx-6 hover:bg-slate-100 "
    >
      Previous
    </button>
  );
}

export default PreviousButton;
