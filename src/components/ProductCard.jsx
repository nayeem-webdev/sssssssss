import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="rounded-2xl overflow-hidden">
        <img
          src={product.product_image}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h2 className="mt-6 text-2xl font-bold">{product.product_title}</h2>
      <p className="mt-3 text-xl font-medium text-black text-opacity-60">
        Price: $ {product.price}
      </p>
      <button
        onClick={() => navigate(`/product/${product.product_id}`)} 
        className="mt-4 bg-[length:200%_200%] bg-[position:10%_10%] hover:bg-[position:50%_50%] bg-gradient-to-t text-primary hover:text-pink-500 from-pink-500  to-primary p-[2px]  transition-all duration-500 ease-in-out rounded-full"
        >
        <div className="font-bold  text-lg h-full w-full bg-white px-6 py-3 rounded-full">
          View Details
        </div>
      </button>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductCard;
