import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <NavLink to={`/`}>
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </NavLink>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
          >
            <NavLink
              to={`${nav.id}`}
              className={`font-poppins font-normal cursor-pointer text-sm text-dimWhite p-2`}
            >{nav.title}</NavLink>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-red-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-40`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}


              >
                <NavLink
                  to={`${nav.id}`}
                  className={`font-poppins font-medium cursor-pointer text-[16px]`}
                >{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};


