const chips = [
  "Buy",
  "Sell",
  "Luxury",
  "New Construction",
  "Open Houses",
];

export default function SearchChips() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {chips.map((chip) => (
        <button
          key={chip}
          className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur transition hover:bg-white hover:text-black"
        >
          {chip}
        </button>
      ))}
    </div>
  );
}