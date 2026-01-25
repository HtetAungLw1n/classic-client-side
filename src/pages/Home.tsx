import Tag from "@/components/Tag";
import { Input } from "@/components/ui/input";
import WallpaperLayout from "@/components/WallpaperLayout";

const Home = () => {
  return (
    <>
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
        <div className="space-y-4 text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-times font-medium">
            Worlds Within Walls
          </div>
          <div className="text-gray-500 max-w-prose mx-auto">
            Every wallpaper holds meaning. Some catch your eye, some catch your
            mind.
          </div>
        </div>

        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <Input
            placeholder="Search...."
            className="mt-8 sm:mt-10 w-full p-5 md:p-6 rounded-full text-black border border-gray-300 bg-[linear-gradient(178deg,rgba(255,255,255,0.2)_0%,rgba(219,219,219,0.3)_60%,rgba(200,200,200,0.1)_100%)] shadow-[inset_0.5px_0.5px_1px_1.5px_rgba(255,255,255,0.75)] active:scale-[99%] transition-all duration-200 ease-in-out"
          />
        </div>

        <div className="mt-6 w-full max-w-3xl flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2">
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
