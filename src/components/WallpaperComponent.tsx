import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const RATIOS = [
  "aspect-[9/16]",
  "aspect-[3/4]",
  "aspect-[2/3]",
  "aspect-[10/16]",
  "aspect-[4/5]",
];

const getRandomRatio = () => RATIOS[Math.floor(Math.random() * RATIOS.length)];

const WallpaperComponent = ({ img }: { img: string }) => {
  const [loaded, setLoaded] = useState(false);
  const ratioRef = useRef(getRandomRatio());

  return (
    <Link
      to="dummy"
      className="group block mb-4 p-1 rounded-xl border border-gray-300 relative"
    >
      {/* Skeleton with fake but stable ratio */}
      {!loaded && (
        <div className={ratioRef.current}>
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      )}

      <img
        src={img}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
          w-full block rounded-lg
          transition-all duration-500 ease-out
          ${loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-[1.02]"}
        `}
        alt="wallpaper"
      />

      <div className="opacity-0 group-hover:opacity-100 absolute bottom-3 right-3 px-3 py-1 text-xs rounded-full bg-black/30 text-white backdrop-blur-sm transition">
        dummy text
      </div>
    </Link>
  );
};

export default WallpaperComponent;
