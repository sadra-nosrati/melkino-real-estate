import { useProperties } from "@/context/PropertiesContext";

import HeroSection from "./components/HeroSection/HeroSection";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import TopBar from "./components/TopBar";
import WhyChooseUs from "./components/WhyChooseUs";
import ProductCart from "@/components/ProductCard/ProductCart";

function Home() {
  const { properties, loading, error } = useProperties();
  return (
    <>
      <HeroSection />

      <div className="border-b-2 border-dark-border-strong min-h-fit py-12 tablet-landscape:h-187.5 tablet-landscape:py-0 flex flex-col items-center justify-center">
        <TopBar />
        <section className="mx-auto w-full max-w-7xl px-4 mt-3 flex flex-wrap gap-5 tablet-landscape:justify-center mobile-landscape:justify-center tablet-portrait:justify-center mobile:justify-center mobile-small:justify-center">
          {properties.slice(-3).map((property) => (
            <ProductCart key={property.id} property={property} />
          ))}
        </section>
      </div>

      <div className="bg-dark-background border-b-2 border-dark-border-strong flex items-center justify-center py-14 tablet-portrait:py-16 tablet-landscape:h-187.5 tablet-landscape:py-0">
        <WhyChooseUs />
      </div>

      <div className="flex items-center justify-center border-b-2 border-dark-border-strong py-14 tablet-portrait:py-16 tablet-landscape:h-187.5 tablet-landscape:py-0">
        <NewsLetter />
      </div>
    </>
  );
}

export default Home;
