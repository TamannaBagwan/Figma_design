import Brands from "./components/Brands";
import BreathingSection from "./components/BreathingSection";
import CapnoTrainerFeatures from "./components/CapnoTrainerFeatures";
import CapnoTrainerHowItWorks from "./components/CapnoTrainerHowItWorks";
import CapnoTrainerSection from "./components/CapnoTrainerSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import KeyFeatures from "./components/KeyFeatures";
import PromotionalBanner from "./components/PromotionalBanner";
import ServiceSection from "./components/ServiceSection";
import SuccessStories from "./components/SuccessStories";
import TwoColumnSection from "./components/TwoColumnSection";

function App() {
  return (
    <div>
      <HeaderSection />
      <Brands />
      <BreathingSection />
      <CapnoTrainerSection />
      <CapnoTrainerFeatures />
      <CapnoTrainerHowItWorks />
      <TwoColumnSection />
      <ImageGallery />
      <SuccessStories />
      <KeyFeatures />
      <ServiceSection />
      <HeroSection />
      <FAQ />
      <PromotionalBanner />
      <Footer />
    </div>
  );
}

export default App;
