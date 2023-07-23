import ProductItem from "@/components/ProductItem";
import data from "../../utils/data";

export default function Home() {
  return (
    <div className="grid gric-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-10 justify-center">
      {data.products.map((product) => (
        <ProductItem product={product} key={product.slug}></ProductItem>
      ))}
    </div>
  )
}
