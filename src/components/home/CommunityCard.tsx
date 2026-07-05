import Link from "next/link";

interface Props {
  name: string;
  image: string;
  description: string;
  slug: string;
}

export default function CommunityCard({
  name,
  image,
  description,
  slug,
}: Props) {
  return (
    <Link
      href={`/communities/${slug}`}
      className="group overflow-hidden rounded-3xl bg-white shadow transition hover:-translate-y-2 hover:shadow-2xl"
    >
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="mt-3 text-neutral-600">
          {description}
        </p>

      </div>
    </Link>
  );
}