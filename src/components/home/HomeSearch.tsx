export default function HomeSearch() {
  return (
    <div className="mx-auto mt-10 flex max-w-4xl rounded-2xl bg-white p-3 shadow-2xl">

      <input
        type="text"
        placeholder="Search by Address, City, ZIP Code or MLS #"
        className="flex-1 rounded-xl border-none px-6 py-4 text-black outline-none"
      />

      <button className="rounded-xl bg-[#355E3B] px-8 text-white transition hover:bg-[#2a4a30]">
        Search
      </button>

    </div>
  );
}