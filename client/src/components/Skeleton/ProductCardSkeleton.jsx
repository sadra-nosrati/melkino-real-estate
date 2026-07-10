import Skeleton from "./Skeleton";

function ProductCardSkeleton() {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-dark-card-hover mt-5 border-2 border-dark-border-strong w-full max-w-92.5">
      <Skeleton className="w-full h-57.5 rounded-none" />

      <div className="px-3 py-4">
        <Skeleton className="h-5 w-3/4" />

        <div className="flex items-center justify-between mt-5 mb-5">
          <Skeleton className="h-4 w-20" />

          <Skeleton className="h-5 w-28" />
        </div>

        <div className="flex items-center justify-between border-t border-dark-border-strong pt-5">
          <Skeleton className="h-4 w-16" />

          <Skeleton className="h-4 w-16" />

          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </article>
  );
}

export default ProductCardSkeleton;
