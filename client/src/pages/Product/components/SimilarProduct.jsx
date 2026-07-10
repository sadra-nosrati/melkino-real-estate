import ProductCart from "@/components/ProductCard/ProductCart";
import { useProperties } from "@/context/PropertiesContext";
import { Link } from "react-router";

function SimilarProduct() {
  const { properties, loading, error } = useProperties();

  return (
    <section className="w-full mt-20">
      <header className="mb-8 flex flex-col mobile-landscape:flex-row items-start mobile-landscape:items-center justify-between gap-3 mobile-landscape:gap-0">
        <h2 className="text-xl tablet-portrait:text-2xl font-semibold text-white">
          املاک مشابه در این منطقه
        </h2>

        <Link
          to="/dashboard/favorites"
          className="text-dark-primary hover:text-dark-accent transition cursor-pointer"
        >
          مشاهده همه
        </Link>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 mt-3 flex flex-wrap gap-5 tablet-landscape:justify-center mobile-landscape:justify-center tablet-portrait:justify-center mobile:justify-center mobile-small:justify-center">
        {properties.slice(-3).map((property) => (
          <ProductCart key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default SimilarProduct;
