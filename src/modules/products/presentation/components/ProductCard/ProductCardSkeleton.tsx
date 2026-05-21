export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
      <div className="aspect-square animate-pulse bg-gray-200" />

      <div className="space-y-3 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}
