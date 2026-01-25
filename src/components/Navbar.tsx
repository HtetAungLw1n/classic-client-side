import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="max-w-3xl mx-auto flex items-center justify-between py-6 z-20">
      <Link to={"/"} className="text-2xl font-medium font-times">
        Classic
      </Link>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Navbar;
