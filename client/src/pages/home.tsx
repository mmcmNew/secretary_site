import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsGallery from "@/components/ScreenshotsGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DescriptionSection />
      <FeaturesSection />
      <ScreenshotsGallery />
      <CTASection />
      <Footer />
    </div>
  );
}
