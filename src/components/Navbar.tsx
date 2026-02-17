import { Link } from 'react-router-dom';

// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="z-20 mx-auto flex max-w-3xl items-center justify-between py-6">
      <Link to={'/'} className="font-times text-2xl font-medium">
        Classic
      </Link>

      {/* <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}

      <Link
        to={'/login'}
        className="rounded border border-gray-300 bg-transparent bg-[linear-gradient(155deg,rgba(240,240,240,0.2)_0%,rgba(219,219,219,0.3)_60%,rgba(200,200,200,0.2)_100%)] px-4 py-1 text-black shadow-[inset_0.5px_0.5px_1px_1.5px_rgba(255,255,255,0.75)] transition-all duration-200 ease-in-out active:scale-95"
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
