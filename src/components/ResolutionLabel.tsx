import type { ResolutionLabelProps } from '@/type/props';
import { Link } from 'react-router-dom';

const ResolutionLabel = ({
  previewLink,
  resolution,
  label,
}: ResolutionLabelProps) => {
  return (
    <div className="flex items-center gap-4">
      <Link
        to={previewLink}
        target="_blank"
        className="w-fit rounded-full border border-gray-300 bg-transparent bg-[linear-gradient(155deg,rgba(240,240,240,0.2)_0%,rgba(219,219,219,0.3)_60%,rgba(200,200,200,0.2)_100%)] px-4 py-1 text-sm text-gray-600 shadow-[inset_0.5px_0.5px_1px_1.5px_rgba(255,255,255,0.75)] transition-all duration-200 ease-in-out hover:text-black"
      >
        {resolution}
      </Link>
      <div>{label}</div>
    </div>
  );
};

export default ResolutionLabel;
