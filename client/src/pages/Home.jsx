import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import FeaturedProperties from "../components/home/FeaturedProperties";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesPreview from "../components/home/ServicesPreview";
import HowItWorks from "../components/home/HowItWorks";
import StatsSection from "../components/home/StatsSection";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />

      <SearchBar />

      <FeaturedProperties />

      <WhyChooseUs />

      <ServicesPreview />

      <HowItWorks />

      <StatsSection />

      <Testimonials />

      <CTASection />
    </>
  );
}

export default Home;