import PageTitle from "../components/PageTitle";
import CategorySideBar from "../components/CategorySideBar";
// import ProductCard from "../components/ProductCard";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <div className="bg-primary">
        <PageTitle
          title={"Shop"}
          subTitle={
            "Shop your favorite product you can search by category from the left"
          }
        />
      </div>
      <div className="container mx-auto px-5 md:px-10">
        <h2 className="my-8 font-bold text-2xl">Shop</h2>

        <div className="block lg:flex gap-6">
          <CategorySideBar />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Shop;

{
  /* <div className="w-3/4 grid grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </div> */
}
