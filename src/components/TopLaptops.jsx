import PropTypes from "prop-types";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const TopLaptops = ({ products }) => {
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const newProducts = [...products].filter(
      (product) => product.category === "Laptops"
    );
    setFilterData(newProducts);
  }, [products]);
  const TopSmartphones = filterData.slice(0, 4);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-5 mt-24  ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-3xl ">Laptops</h2>
        <p
          onClick={() => navigate("/shop/laptops")}
          className="flex  items-center gap-2 mr-12 text-primary hover:text-primary/60 cursor-pointer border-b border-primary hover:border-primary/60"
        >
          Show all <LiaLongArrowAltRightSolid />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {TopSmartphones.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};
TopLaptops.propTypes = {
  products: PropTypes.array,
};
export default TopLaptops;
