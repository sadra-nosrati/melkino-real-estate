import ProductCart from "@/components/ProductCard/ProductCart";
import { useFavoriteDashboard } from "@/hooks/useFavoriteDashboard";
import Header from "./Header";
import Empty from "@/components/Empty";
import DashboardFooter from "../../DashboardFooter";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import ProductCardSkeleton from "@/components/Skeleton/ProductCardSkeleton";

function DashboardFavorites() {
  useDocumentTitle("علاقه‌ مندی‌ ها");

  const text = "هنوز هیچ ملکی به علاقه ‌مندی‌ ها اضافه نشده";
  const { favoriteProperties, loading } = useFavoriteDashboard();

  return (
    <div className="min-h-screen flex flex-col bg-dark-background-secondary">
      <div className="flex-1 px-4 mobile:px-6 tablet-portrait:px-10 laptop:px-16 py-10">
        <Header />

        {loading ? (
          <div className="mx-auto w-full max-w-7xl mt-3 grid grid-cols-1 mobile-landscape:grid-cols-2 gap-4 tablet-portrait:gap-5 mobile-small:flex mobile-small:justify-center mobile-small:flex-wrap">
            {Array.from({ length: 2 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : favoriteProperties.length ? (
          <div className="mx-auto w-full max-w-7xl mt-3 grid grid-cols-1 mobile-landscape:grid-cols-2 gap-4 tablet-portrait:gap-5 mobile-small:flex mobile-small:justify-center mobile-small:flex-wrap">
            {favoriteProperties.slice(0, 2).map((property) => (
              <ProductCart key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <Empty text={text} />
        )}
      </div>

      <DashboardFooter />
    </div>
  );
}

export default DashboardFavorites;
