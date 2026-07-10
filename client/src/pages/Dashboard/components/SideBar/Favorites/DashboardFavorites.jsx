import ProductCart from "@/components/ProductCard/ProductCart";
import { useFavoriteDashboard } from "@/hooks/useFavoriteDashboard";
import Header from "./Header";
import Empty from "@/components/Empty";
import DashboardFooter from "../../DashboardFooter";
import useDocumentTitle from "@/hooks/useDocumentTitle";

function DashboardFavorites() {
  useDocumentTitle("علاقه‌ مندی‌ ها");

  const text = "هنوز هیچ ملکی به علاقه ‌مندی‌ ها اضافه نشده";
  const favoriteProperties = useFavoriteDashboard();

  return (
    <div className="min-h-screen flex flex-col bg-dark-background-secondary">
      <div className="flex-1 px-4 mobile:px-6 tablet-portrait:px-10 laptop:px-16 py-10">
        <Header />

        {favoriteProperties?.length ? (
          <div className="mx-auto w-full max-w-7xl mt-3 grid grid-cols-1 mobile-landscape:grid-cols-2 gap-4 tablet-portrait:gap-5  mobile-small:flex mobile-small:justify-center mobile-small:flex-wrap">
            {favoriteProperties.map((property) => (
              <div key={property.id}>
                <ProductCart property={property} />
              </div>
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
