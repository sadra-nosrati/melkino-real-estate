import Skeleton from "./Skeleton";

function ProductMediaSkeleton() {
  return (
    <section className="mt-8">
      <figure className="grid h-auto tablet-landscape:h-180 grid-cols-1 tablet-landscape:grid-cols-[2.2fr_1fr] gap-3">
        <Skeleton
          className="
            h-65 mobile-landscape:h-85 tablet-portrait:h-112.5 tablet-landscape:h-full w-full rounded-xl mobile-landscape:rounded-2xl tablet-landscape:rounded-3xl"
        />

        <div className="grid grid-cols-3 tablet-landscape:grid-cols-1 grid-rows-1 tablet-landscape:grid-rows-3 gap-3 h-25 mobile-landscape:h-32.5 tablet-portrait:h-42.5 tablet-landscape:h-auto">
          <Skeleton className="h-full w-full rounded-xl mobile-landscape:rounded-2xl tablet-landscape:rounded-3xl" />

          <Skeleton className="h-full w-full rounded-xl mobile-landscape:rounded-2xl tablet-landscape:rounded-3xl" />

          <Skeleton className="h-full w-full rounded-xl mobile-landscape:rounded-2xl tablet-landscape:rounded-3xl" />
        </div>
      </figure>
    </section>
  );
}

export default ProductMediaSkeleton;
