import { LiaShoppingCartSolid } from "react-icons/lia";

const AddToCartBtn = () => {
  return (
    <button className="flex items-center gap-2 rounded-full text-lg px-6 py-3 font-extrabold bg-primary text-white">
      Add To Cart <LiaShoppingCartSolid className="text-3xl" />
    </button>
  );
};

export default AddToCartBtn;
