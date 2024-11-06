import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import TopRated from "../components/TopRated.jsx";
import TopSmartphones from "../components/TopSmartphones.jsx";
import TopLaptops from "../components/TopLaptops.jsx";
import TopSmartWatches from "../components/TopSmartWatches.jsx";

const Home = () => {
  const products = useLoaderData();
  return (
    <>
      <Hero />
      <TopRated products={products} />
      <TopSmartphones products={products} />
      <TopLaptops products={products} />
      <TopSmartWatches products={products} />
    </>
  );
};

export default Home;
