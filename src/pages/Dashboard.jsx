import { NavLink, Outlet } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="bg-primary">
          <PageTitle
            title={"Dashboard"}
            subTitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
          <div className="flex justify-center items-center gap-6 pb-10">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                  ? "border border-transparent  px-16 py-4 rounded-full text-xl  bg-white text-primary font-bold box-shadow-f"
                  : "border border-white text-white px-16 py-4 rounded-full text-xl hover:bg-white hover:text-primary hover:font-bold transition-all duration-500"
                }`
              }
            >
              Cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                  ? "border border-transparent  px-16 py-4 rounded-full text-xl  bg-white text-primary font-bold box-shadow-f"
                  : "border border-white text-white px-16 py-4 rounded-full text-xl hover:bg-white hover:text-primary hover:font-bold transition-all duration-500"
                }`
              }
            >
              Wishlist
            </NavLink>
          </div>
        </div>
        <div className="container mx-auto px-5 md:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
