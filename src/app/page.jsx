
import ProductItem from "@/components/ProductItem";
import data from "../../utils/data";
import Results from "@/components/Results";
const results = data.products;

export default async function Home() {
  
  return (
    <div className="grid gric-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-10 justify-center">
      <Results results={results}/>
    </div>
  )
}
