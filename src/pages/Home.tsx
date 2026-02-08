import Tag from '@/components/Tag';
import { Input } from '@/components/ui/input';
import WallpaperLayout from '@/components/WallpaperLayout';

const Home = () => {
  return (
    <>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <div className="space-y-4 text-center">
          <div className="font-times text-4xl font-medium md:text-5xl lg:text-6xl">
            Stay Freshy, Stay Classy
          </div>
          <div className="mx-auto max-w-prose text-gray-500">
            We both know you've had that same photo for two years. Level up with
            our daily-refreshed vault of premium avatars
          </div>
        </div>

        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <Input
            placeholder="Search...."
            className="mt-8 w-full rounded-full border border-gray-300 bg-[linear-gradient(178deg,rgba(255,255,255,0.2)_0%,rgba(219,219,219,0.3)_60%,rgba(200,200,200,0.1)_100%)] p-5 text-black shadow-[inset_0.5px_0.5px_1px_1.5px_rgba(255,255,255,0.75)] transition-all duration-200 ease-in-out active:scale-[98%] sm:mt-10 md:p-6"
          />
        </div>

        <div className="mt-6 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 px-2 sm:gap-3 md:gap-4">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>

      <WallpaperLayout />
    </>
  );
};

export default Home;
