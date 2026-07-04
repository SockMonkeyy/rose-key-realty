import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import PropertyCard from "@/components/listings/PropertyCard";

const properties = [
  {
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900",
    price: "$425,000",
    address: "123 Oak Ridge Dr, Birmingham, AL",
    beds: 4,
    baths: 3,
    sqft: 2750,
  },
  {
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900",
    price: "$319,900",
    address: "88 Magnolia Way, Trussville, AL",
    beds: 3,
    baths: 2,
    sqft: 1980,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900",
    price: "$569,000",
    address: "41 Highland Park, Hoover, AL",
    beds: 5,
    baths: 4,
    sqft: 3600,
  },
];

export default function FeaturedListings() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Listings"
          title="Homes You'll Love"
          description="Explore a selection of beautiful homes across Central Alabama."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.address}
              {...property}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}