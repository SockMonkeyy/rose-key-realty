export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-3xl font-bold">
          Rose Key Realty
        </h2>

        <p className="mt-4 max-w-xl text-neutral-400">
          Helping buyers and sellers throughout Central Alabama find the perfect place to call home.
        </p>

        <div className="mt-10 border-t border-neutral-700 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Rose Key Realty. All rights reserved.
        </div>

      </div>
    </footer>
  );
}