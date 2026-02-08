import WallpaperComponent from '@/components/WallpaperComponent';
import wallpaper1 from '@/assets/dummy.jpg';
import ResolutionLabel from '@/components/ResolutionLabel';

const PhotoDetail = () => {
  return (
    <div className="mt-10 flex flex-col items-start md:flex-row md:gap-10 lg:mt-20">
      <WallpaperComponent img={wallpaper1} className="md:w-1/2" />
      <div className="md:w-1/2">
        <div className="text-2xl font-medium md:text-3xl">
          Jujutsu Kaisen Itadori Wallpaper 4k
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <ResolutionLabel
            previewLink="#"
            resolution="1232x3212"
            label="4k resolution - recommed for desktop wallpaper"
          />
          <ResolutionLabel
            previewLink="#"
            resolution="122x3312"
            label="1080p resolution - recommed for desktop wallpaper"
          />
          <ResolutionLabel
            previewLink="#"
            resolution="132x3212"
            label="20k resolution - recommed for desktop wallpaper"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
