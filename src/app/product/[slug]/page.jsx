// import data from '../../../../utils/data'

// export default function ProductPage() {
//   return (
//     <div>
//       {data.products.map((product) => (
//         <div key={product.slug}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           {/* Render other product details */}
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import data from "../../../../utils/data";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { slug } = useParams(); // Call useParams as a function to get the parameter value

  // Recherchez le produit correspondant au slug dans les données
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center justify-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={product.image}
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="The image of produit"
          style={{ maxWidth: "100%", height: "100%", }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
              {product.name}
          </h2>
          <p className="text_lg mb-3"><span className="font-semibold mr-1">Overview:</span>{product.description}</p>
          <p className="mb-3 "><span className="font-semibold mr-1">Price:</span>{product.price}</p>
          <p className="mb-3 "><span className="font-semibold mr-1">Rating:</span>{product.rating}</p>
        </div>

      </div>
      {/* <h2>{product.name}</h2>
      <p>{product.description}</p>
      Render other product details */}
    </div>
  );
}

// src/app/product/[slug]/page.jsx
// async function getProduct(productId){
//     const res = await fetch('../../../../utils/data');
//     return await res.json();
// }

// export default async function ProductPage({ product }) {
//     const productSlug = product.slug;
//     const prod = await getProduct(productSlug);
//     return (
//         <div>
//             <h1>
//                 {prod.name}
//             </h1>
//         </div>
//     )
// }
