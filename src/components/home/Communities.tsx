import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import CommunityCard from "./CommunityCard";
import { communities } from "@/data/communities";

export default function Communities() {
  return (
    <section className="py-28 bg-white">

      <Container>

        <SectionHeading
          eyebrow="Explore Alabama"
          title="Communities We Serve"
          description="Find the perfect neighborhood that matches your lifestyle."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {communities.map((community) => (
            <CommunityCard
              key={community.slug}
              {...community}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}