import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const DisLaptops = () => {
    const products = useLoaderData();

  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const newProducts = [...products].filter(
      (product) => product.category === "Laptops"
    );
    setFilterData(newProducts);
  }, [products]);
  return (
    <div className="w-3/4 grid grid-cols-3 gap-6">
      {filterData.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default DisLaptops;