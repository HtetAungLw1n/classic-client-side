import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const Tag = ({ className }: { className?: string }) => {
  return (
    <Link
      to={""}
      className={cn(
        "rounded-full shadow hover:shadow-md transition-all duration-200 ease-in-out",
        className,
      )}
    >
      <Badge className="py-3 px-4 active:scale-95 text-black border border-gray-300 shadow-[inset_0.5px_0.5px_1px_1.5px_rgba(255,255,255,0.75)] transition-all duration-200 ease-in-out bg-transparent bg-[linear-gradient(155deg,rgba(255,255,255,0.2)_0%,rgba(219,219,219,0.5)_60%,rgba(200,200,200,0.4)_100%)]">
        dummy
      </Badge>
    </Link>
  );
};

export default Tag;
