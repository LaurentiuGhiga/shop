
import ProductItem from "@/components/ProductItem";
import data from "../../utils/data";
import Results from "@/components/Results";

export default async function Home() {
  const results = data.products;
 
  if (!results){
    throw new Error("Failed to fetch data");
  }
  
  
  return (
    <div className="">
      <Results results={results}/>
    </div>
  )
}
