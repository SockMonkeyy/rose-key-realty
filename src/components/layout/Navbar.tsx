import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Search Homes", href: "/search" },
  { name: "Buy", href: "/buyers" },
  { name: "Sell", href: "/sellers" },
  { name: "Communities", href: "/communities" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link href="/" className="text-3xl font-bold tracking-tight">
          Rose Key Realty
        </Link>

        <nav className="hidden gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 transition hover:text-[#B76E79]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="rounded-xl bg-[#355E3B] px-6 py-3 text-white transition hover:bg-[#29492F]">
          Schedule Consultation
        </button>

      </div>
    </header>
  );
}