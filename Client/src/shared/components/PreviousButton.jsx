function PreviousButton({ onPrev }) {
  return (
    <button
      type="button"
      onClick={onPrev}
      className="border rounded-lg px-5 py-2"
    >
      Previous
    </button>
  );
}

export default PreviousButton;
