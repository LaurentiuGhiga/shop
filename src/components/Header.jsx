import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle} from "react-icons/ai";


export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="">
        <Link href="/">
            <h2 className="text-2xl"><span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">Digital</span><span className="text-xl hidden sm:inline">License</span></h2>
        </Link>
      </div>
     
    </div>
  );
}
