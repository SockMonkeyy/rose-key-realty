import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedListings from "@/components/home/FeaturedListings";
import Footer from "@/components/layout/Footer";
import Communities from "@/components/home/Communities";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedListings />
      <Communities />
  <Footer />
    </>
  );
}