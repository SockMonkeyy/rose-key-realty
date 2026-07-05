const stats = [
  {
    number: "1,000+",
    label: "Homes Available",
  },
  {
    number: "20+",
    label: "Communities",
  },
  {
    number: "24/7",
    label: "Buyer Support",
  },
];

export default function MarketStats() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center text-white"
        >
          <p className="text-5xl font-bold">
            {stat.number}
          </p>

          <p className="mt-2 text-white/80">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}