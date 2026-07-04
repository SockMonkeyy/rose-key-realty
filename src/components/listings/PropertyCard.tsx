import { Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
}

export default function PropertyCard({
  image,
  price,
  address,
  beds,
  baths,
  sqft,
}: PropertyCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <img
        src={image}
        alt={address}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-3xl font-bold">{price}</h3>

        <p className="mt-2 text-neutral-600">
          {address}
        </p>

        <div className="mt-6 flex gap-6 text-sm text-neutral-600">

          <div className="flex items-center gap-2">
            <Bed size={18} />
            {beds}
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />
            {baths}
          </div>

          <div className="flex items-center gap-2">
            <Square size={18} />
            {sqft.toLocaleString()} sqft
          </div>

        </div>

      </div>

    </div>
  );
}