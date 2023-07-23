"use client"
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavbarItem({ title, param }) {
    const searchParam = useSearchParams();
    const collection = searchParam.get("collection");
  return (
    <div>
      <Link className={`m-4 hover:text-amber-600 font-semibold p-2 ${collection && collection === param && "underline underline-offset-8 decoration-4 decoration-amber-500 decoration-rounded-lg"}`} href={`/?collection=${param}`}>{title}</Link>
    </div>
  );
}
