// Home.jsx
import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import FeaturedProperties from "../components/home/FeaturedProperties";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PropertyExperience from "../components/home/PropertyExperience";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <WhyChooseUs />
      <PropertyExperience />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default Home;
