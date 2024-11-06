import { useLoaderData, useParams } from "react-router-dom";
import DisplayProduct from "../components/DisplayProduct";
import PageTitle from "../components/PageTitle";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const productID = useParams();

  const data = useLoaderData();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const selectedProduct = data.find(
      (product) => product.product_id == productID.productID
    );
    setProduct(selectedProduct);
  }, [data, productID]);

    const {
      product_image,
      product_title,
      price,
      description,
      specification = [],
      rating = 0,
    } = product || {};

  return (
    <div>
      <div className="bg-primary pb-60">
        <PageTitle
          title={"Product Details"}
          subTitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>
      <div className="container mx-auto px-5 md:px-10 -mt-60">
        <DisplayProduct product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
