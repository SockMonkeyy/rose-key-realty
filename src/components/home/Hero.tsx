import HomeSearch from "./HomeSearch";
export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-neutral-900">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

        <p className="mb-4 text-lg uppercase tracking-[0.3em] text-emerald-300">
          Rose Key Realty
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Find Your Dream Home
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg text-neutral-200">
          Helping buyers and sellers throughout Birmingham and Central Alabama
          discover exceptional homes with confidence.
        </p>

        <HomeSearch />

      </div>

    </section>
  );
}