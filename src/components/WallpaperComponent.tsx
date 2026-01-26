import { Link } from "react-router-dom";

const WallpaperComponent = ({ img }: { img: string }) => {
  return (
    <Link
      to={""}
      className="group block mb-4 p-1 transition-all duration-200 ease-in-out rounded-xl border border-gray-300 bg-[linear-gradient(155deg,rgba(255,255,255,0.2)_0%,rgba(219,219,219,0.5)_60%,rgba(200,200,200,0.4)_100%)] relative active:scale-[98%]"
    >
      <img
        src={img}
        alt="wallpaper"
        className="w-full block rounded-lg transition-all duration-200 ease-in-out"
        loading="lazy"
      />

      <div className="opacity-0 group-hover:opacity-100 absolute bottom-3 right-3 shadow rounded-full px-3 py-1 text-xs bg-gray-50/20 border border-white/30 text-white/80 transition-all duration-200 ease-in-out backdrop-blur-sm">
        dummy text
      </div>
    </Link>
  );
};

export default WallpaperComponent;
