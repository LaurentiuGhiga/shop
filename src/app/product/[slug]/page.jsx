// import data from '../../../../utils/data'

// export default function MyComponent() {
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

"use client"
import { useEffect, useState } from 'react';
import data from "../../../../utils/data";

async function fetchProductBySlug(slug) {
  const product = await data.products.slug;
}

export default function ProductPage({ slug }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const prod = await fetchProductBySlug(slug);
      setProduct(product);
    }
    getProduct();
  }, [slug]);

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
