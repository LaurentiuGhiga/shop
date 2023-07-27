import Image from "next/image";
import Link from "next/link";
import {FiThumbsUp} from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/product/${result.slug}`}>
        <Image
          src={result.image}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div className="p-2">
            <p className="text:md">{result.name}</p>
            <h2 className="text-lg font-bold">{result.price } €</h2>
            <p className="flex items-center">
                {result.brand}
                <FiThumbsUp className="h-5 mr-1 ml-3"/> {result.rating}
            </p>
        </div>
      </Link>
    </div>
  );
}
