import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const TopSmartWatches = ({ products }) => {
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const newProducts = [...products].filter(
      (product) => product.category === "Wearables"
    );
    setFilterData(newProducts);
  }, [products]);
  const TopSmartWatches = filterData.slice(0, 4);
  return (
    <div className="container mx-auto px-5 mt-24  ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-3xl ">Smart Watches</h2>
        <p
          onClick={() => navigate("/shop/wearables")}
          className="flex  items-center gap-2 mr-12 text-primary hover:text-primary/60 cursor-pointer border-b border-primary hover:border-primary/60"
        >
          Show all <LiaLongArrowAltRightSolid />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {TopSmartWatches.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};
TopSmartWatches.propTypes = {
  products: PropTypes.array,
};

export default TopSmartWatches;
