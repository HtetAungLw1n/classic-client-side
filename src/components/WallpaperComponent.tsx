import dummyWallpaper from "@/assets/dummy.jpg";
import { Link } from "react-router-dom";

const WallpaperComponent = () => {
  return (
    <Link
      to={""}
      className="group aspect-video p-1 hover:p-0 transition-all duration-200 ease-in-out rounded-xl border border-gray-300 bg-[linear-gradient(155deg,rgba(255,255,255,0.2)_0%,rgba(219,219,219,0.5)_60%,rgba(200,200,200,0.4)_100%)] relative"
    >
      <img
        src={dummyWallpaper}
        alt="name"
        className="rounded-lg group-hover:rounded-xl transition-all duration-200 ease-in-out w-full h-full object-cover"
      />

      <div className="opacity-0 group-hover:opacity-100 absolute bottom-2 right-2 shadow rounded-full px-3 text-xs bg-gray-50/20 border border-white/30 text-white/80 transition-all duration-200 ease-in-out">
        dummyfsdafs afsdfas fas
      </div>
    </Link>
  );
};

export default WallpaperComponent;
