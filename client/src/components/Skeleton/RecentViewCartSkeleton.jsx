import Skeleton from "./Skeleton";

function RecentViewCartSkeleton() {
  return (
    <article className="w-full h-24 tablet-portrait:h-28 bg-dark-muted/60 flex items-center rounded-xl border border-dark-primary/15 px-3 tablet-portrait:px-4">
      <div className="flex items-center gap-3 tablet-portrait:gap-5 w-full">
        <Skeleton className="h-14 w-14 tablet-portrait:h-20 tablet-portrait:w-20 rounded-md flex-shrink-0" />

        <div className="flex-1">
          <Skeleton className="h-4 w-3/4 mb-2" />

          <Skeleton className="h-3 w-1/2 mb-2" />

          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </article>
  );
}

export default RecentViewCartSkeleton;
