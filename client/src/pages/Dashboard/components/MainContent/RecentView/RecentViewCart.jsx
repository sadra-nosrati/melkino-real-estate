import RecentViewCartSkeleton from "@/components/Skeleton/RecentViewCartSkeleton";
import { useProperties } from "@/context/PropertiesContext";

function RecentViewCart() {
  const { properties, loading } = useProperties();

  return (
    <>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <RecentViewCartSkeleton key={index} />
          ))
        : properties.map((item) => {
            const Random = Math.floor(Math.random() * 100);

            return (
              <article
                key={item.id}
                className="w-full h-24 tablet-portrait:h-28 bg-dark-muted/60 flex items-center rounded-xl border border-dark-primary/15 px-3 tablet-portrait:px-4 transition-all duration-300 hover:-translate-y-1 hover:border-dark-primary/30 hover:bg-dark-muted/80 hover:shadow-[0_10px_30px_rgba(242,202,80,0.06)]"
              >
                <div className="flex items-center gap-3 tablet-portrait:gap-5 w-full">
                  <img
                    className="h-14 w-14 tablet-portrait:h-20 tablet-portrait:w-20 rounded-md object-cover flex-shrink-0"
                    src={item.img}
                    alt={item.title}
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 line-clamp-1 text-sm tablet-portrait:text-base">
                      {item.title}
                    </h3>

                    <p className="text-dark-text-muted text-xs tablet-portrait:text-sm mb-1">
                      {item.details.area} متر بنا
                    </p>

                    <p className="text-[10px] tablet-portrait:text-xs text-dark-primary">
                      {Random} ساعت پیش
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
    </>
  );
}

export default RecentViewCart;
