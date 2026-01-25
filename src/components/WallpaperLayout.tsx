import WallpaperComponent from "./WallpaperComponent";

const WallpaperLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-red-400 w-full">
      <WallpaperComponent />
      <WallpaperComponent />
      <WallpaperComponent />
      <WallpaperComponent />
      <WallpaperComponent />
    </div>
  );
};

export default WallpaperLayout;
