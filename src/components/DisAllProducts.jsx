import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const DisAllProducts = () => {
  const products = useLoaderData();
  return (
    <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default DisAllProducts;
