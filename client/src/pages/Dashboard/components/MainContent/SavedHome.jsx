import { useContext } from "react";
import { Link } from "react-router";

import ProductCart from "@/components/ProductCard/ProductCart";
import { useFavoriteDashboard } from "@/hooks/useFavoriteDashboard";
import { AuthContext } from "@/context/AuthContext";
import Empty from "@/components/Empty";
import ProductCardSkeleton from "@/components/Skeleton/ProductCardSkeleton";

function SavedHome() {
  const text = "هنوز خانه‌ ای به علاقه‌ مندی‌ های خود اضافه نکرده‌ اید";

  const { favoriteProperties, loading } = useFavoriteDashboard();
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full laptop:w-[65%]">
      <header className="flex items-center justify-between">
        <h2 className="text-xl tablet-portrait:text-2xl text-zinc-200">
          املاک ذخیره شده
        </h2>

        <Link
          to="/dashboard/favorites"
          className="text-sm tablet-portrait:text-base text-zinc-200 hover:text-dark-primary transition-colors"
        >
          مشاهده همه
        </Link>
      </header>

      {loading ? (
        <div className="mx-auto w-full max-w-7xl mt-3 grid grid-cols-1 mobile-landscape:grid-cols-2 gap-4 tablet-portrait:gap-5 mobile-small:flex mobile-small:justify-center mobile-small:flex-wrap">
          {Array.from({ length: 2 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : user?.favorites?.length ? (
        <div className="mx-auto w-full max-w-7xl mt-3 grid grid-cols-1 mobile-landscape:grid-cols-2 gap-4 tablet-portrait:gap-5 mobile-small:flex mobile-small:justify-center mobile-small:flex-wrap">
          {favoriteProperties.slice(0, 2).map((property) => (
            <ProductCart key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <Empty text={text} />
      )}
    </div>
  );
}

export default SavedHome;
