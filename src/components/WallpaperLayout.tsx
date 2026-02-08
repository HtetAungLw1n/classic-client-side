import WallpaperComponent from './WallpaperComponent';
import wallpaper1 from '@/assets/dummy.jpg';
import wallpaper2 from '@/assets/dummy2.jpg';
import wallpaper3 from '@/assets/dummy3.jpg';
import Masonry from 'react-masonry-css';
// import WallpaperComponentSkeleton from "./WallpaperComponentSkeleton";

const WallpaperLayout = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <div>
        <WallpaperComponent img={wallpaper1} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper2} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper3} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper2} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper3} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper1} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper3} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper2} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper1} />
      </div>
      <div>
        <WallpaperComponent img={wallpaper3} />
      </div>

      {/* {Array.from({ length: 8 }).map((_, index) => (
        <div key={index}>
          <WallpaperComponentSkeleton />
        </div>
      ))} */}
    </Masonry>
  );
};

export default WallpaperLayout;
