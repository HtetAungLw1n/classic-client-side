import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const RATIOS = [
  'aspect-[9/16]',
  'aspect-[3/4]',
  'aspect-[2/3]',
  'aspect-[10/16]',
  'aspect-[4/5]',
];

const getRandomRatio = () => RATIOS[Math.floor(Math.random() * RATIOS.length)];

const WallpaperComponent = ({
  img,
  className,
}: {
  img: string;
  className?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  const ratioRef = useRef(getRandomRatio());

  return (
    <Link
      to="dummy"
      className={cn(
        'group relative mb-4 block rounded-xl border border-gray-300 p-1',
        className,
      )}
    >
      {/* Skeleton with fake but stable ratio */}
      {!loaded && (
        <div className={ratioRef.current}>
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      )}

      <img
        src={img}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`block w-full rounded-lg transition-all duration-300 ease-out ${loaded ? 'blur-0 scale-100 opacity-100' : 'scale-[1.02] opacity-0 blur-sm'} `}
        alt="wallpaper"
      />

      <div className="absolute right-3 bottom-3 rounded-full bg-black/30 px-3 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
        dummy text
      </div>
    </Link>
  );
};

export default WallpaperComponent;
