import { Link, NavLink, useLocation } from "react-router-dom";
import {
  LiaShoppingCartSolid,
  LiaHeart,
  LiaBarsSolid,
  LiaAngleDoubleUpSolid,
} from "react-icons/lia";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    const loadNav = async () => {
      try {
        const res = await fetch("/public/data/navbar.json");
        const data = await res.json();
        setNavItems(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    loadNav();
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${path==="/" ? "text-white" :"bg-white"} `}
    >
      <div className="z-50 container mx-auto px-8 md:px-[40px] flex justify-between py-[30px] items-center">
      <div className="flex gap-4 items-center relative">
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <LiaAngleDoubleUpSolid className="text-black text-opacity-60 h-10 w-10 rounded-full bg-white border-2 p-2 block md:hidden" />
          ) : (
            <LiaBarsSolid className="text-black text-opacity-60 h-10 w-10 rounded-full bg-white border-2 p-2 block md:hidden" />
          )}
        </div>
        <nav
          className={
            open
              ? "text-opacity-60 gap-2 flex p-3 rounded-xl top-14 flex-col absolute bg-white text-black"
              : "hidden"
          }
        >
          {navItems.map((navItem) => (
            <NavLink
              className={({ isActive }) => `${isActive && "font-bold"}`}
              key={navItem.component}
              to={navItem.path}
            >
              {navItem.name}
            </NavLink>
          ))}
        </nav>
        <Link to="/" className="font-bold text-2xl block lg:hidden">
          GM
        </Link>
        <Link to="/" className="font-bold text-2xl hidden lg:block">
          GadgetMafia
        </Link>
      </div>
      <nav className="text-opacity-60 md:flex gap-12 hidden">
        {navItems.map((navItem) => (
          <NavLink
            className={({ isActive }) => `${isActive && "font-bold"}`}
            key={navItem.component}
            to={navItem.path}
          >
            {navItem.name}
          </NavLink>
        ))}
      </nav>
      <div className="flex gap-4 text-black text-opacity-60">
        <LiaShoppingCartSolid className="h-10 w-10 rounded-full bg-white border-2 p-2" />
        <LiaHeart className="h-10 w-10 rounded-full bg-white border-2 p-2" />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
