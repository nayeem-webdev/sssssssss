import AddToCartBtn from "../components/AddToCartBtn";
import { LiaHeart } from "react-icons/lia";
import PropTypes from "prop-types";
import { Rate } from "antd";

const DisplayProduct = ({ product }) => {
  const {
    product_image,
    product_title,
    price,
    description,
    specification = [],
    rating = 0,
  } = product || {};

  return (
    <div className="bg-white p-8 rounded-xl flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
        <img
          src={product_image}
          alt={`Image of ${product_title}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
        <div>
          <h2 className="font-semibold text-3xl">{product_title}</h2>
          <p className="text-black text-opacity-80 font-semibold text-xl mt-3">
            Price: ${price}
          </p>
        </div>
        <p className="bg-stock border-2 border-stock text-stock font-medium bg-opacity-10 px-4 py-2 rounded-full">
          In Stock
        </p>
        <p className="text-lg text-black text-opacity-60">{description}</p>
        <div>
          <h4 className="font-bold text-lg">Specification:</h4>
          <ul className="mt-3 text-lg text-black text-opacity-60">
            {specification.length ? (
              specification.map((spec) => (
                <li className="list-disc ml-6" key={spec}>
                  {spec}
                </li>
              ))
            ) : (
              <li className="list-disc ml-6">No specifications available</li>
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Ratings</h3>
          <div className="mt-2 flex items-center">
            <Rate disabled allowHalf defaultValue={rating} />
            <span className="ml-4 bg-gray-200 px-4 py-2 rounded-full">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-3">
          <AddToCartBtn />
          <LiaHeart className="h-[54px] w-[54px] rounded-full bg-white border-2 p-2" />
        </div>
      </div>
    </div>
  );
};

DisplayProduct.propTypes = {
  product: PropTypes.shape({
    product_image: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    specification: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
  }).isRequired,
};

export default DisplayProduct;
