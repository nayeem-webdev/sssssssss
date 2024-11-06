import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Blogs from "../pages/Blogs";
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../pages/ProductPage";
import DisAllProducts from "../components/DisAllProducts";
import DisSmartphone from "../components/DisSmartphone";
import DisLaptops from "../components/DisLaptops";
import DisTablets from "../components/DisTablets";
import DisHeadphones from "../components/DisHeadphones";
import DisWearables from "../components/DisWearables";
import { Navigate } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("../public/data/products.json"),
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <Navigate to={"all-products"} />,
          },
          {
            path: "all-products",
            element: <DisAllProducts />,
            loader: () => fetch("../public/data/products.json"),
          },
          {
            path: "smartphones",
            element: <DisSmartphone />,
            loader: () => fetch("../public/data/products.json"),
          },
          {
            path: "laptops",
            element: <DisLaptops />,
            loader: () => fetch("../public/data/products.json"),
          },
          {
            path: "tablets",
            element: <DisTablets />,
            loader: () => fetch("../public/data/products.json"),
          },
          {
            path: "headphones",
            element: <DisHeadphones />,
            loader: () => fetch("../public/data/products.json"),
          },
          {
            path: "wearables",
            element: <DisWearables />,
            loader: () => fetch("../public/data/products.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("../public/data/techBlog.json"),

      },
      {
        path: "/product/:productID",
        element: <ProductPage />,
        loader: () => fetch("/public/data/products.json"),
      },
    ],
  },
]);
export default routes;
