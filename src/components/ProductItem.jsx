// import Image from "next/image";
// import Link from "next/link";

// export default function ProductItem({ product }) {
//   return (
//     <div className="card">
//       <Link href={`/product/${product.slug}`} passHref>
       
//           <Image
//             src={product.image}
//             alt={product.name}
//             className="rounded shadow"
//             width={500} // Set the desired width of the image
//           height={300} // Set the desired height of the image
//           />
       
//       </Link>
//       <div className="flex, flex-col items-center justify-center p-5">
//         <Link href={`/product/${product.slug}`}>
          
//             <h2 className="text-lg">{product.name}</h2>
          
//         </Link>
//         <p className="mb-2">{product.brand}</p>
//         <p>${product.price}</p>
//         <button className="primary-button" type button>
//             Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }
