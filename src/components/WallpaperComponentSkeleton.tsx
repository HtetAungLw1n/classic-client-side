import { Skeleton } from "@/components/ui/skeleton";

const WallpaperComponentSkeleton = () => {
  return (
    <div className="mb-4 p-1 rounded-xl border border-gray-300 bg-[linear-gradient(155deg,rgba(255,255,255,0.2)_0%,rgba(219,219,219,0.5)_60%,rgba(200,200,200,0.4)_100%)] relative">
      {/* Image placeholder */}
      <Skeleton className="w-full aspect-square rounded-lg" />

      {/* Hover badge placeholder */}
      <div className="absolute bottom-3 right-3">
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>
    </div>
  );
};

export default WallpaperComponentSkeleton;
