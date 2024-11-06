import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CategorySideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const res = await fetch("/public/data/categories.json");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    loadAllData();
  }, []);
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 p-6 rounded-2xl w-full lg:w-1/4 mb-6 lg:mb-0 self-start">
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "rounded-full text-lg px-7 py-4 font-extrabold bg-primary text-white"
                : "rounded-full text-lg px-7 py-4 font-medium bg-black bg-opacity-5 text-black text-opacity-60"
            }`
          }
          key={category.name}
          to={`/shop/${category.slug}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategorySideBar;
