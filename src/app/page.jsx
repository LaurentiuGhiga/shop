
import ProductItem from "@/components/ProductItem";
import data from "../../utils/data";
import Results from "@/components/Results";

export default async function Home() {
  const results = data.products;
 
  if (!results){
    throw new Error("Failed to fetch data");
  }
  
  
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-10 justify-center">
      <Results results={results}/>
    </div>
  )
}
