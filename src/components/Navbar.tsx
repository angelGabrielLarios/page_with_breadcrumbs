import { useState } from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { IconMenu, IconX, IconTerminal2 } from '@tabler/icons-react';

export const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <NavLink to={`/`}>
        {/* <img src={""} alt="hoobank" className="w-[124px] h-[32px]" /> */}
        <IconTerminal2 className="text-blue-600 size-10" />
      </NavLink>

      <ul className="list-none lg:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
          >
            <NavLink
              to={`${nav.id}`}
              className={({ isActive }) => {
                return `font-poppins font-normal cursor-pointer text-sm text-dimWhite p-2 transition-colors duration-100 ease-in ${isActive ? 'text-blue-600 font-extrabold' : ''}`
              }}
            >{nav.title}</NavLink>
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <button
          onClick={() => setToggle(!toggle)}
          className="text-blue-500"
        >
          {toggle ? <IconX /> : <IconMenu />}
        </button>

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-40 text-white`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}


              >
                <NavLink
                  to={`${nav.id}`}
                  className={`font-poppins font-medium cursor-pointer text-xs py-2 block`}
                >{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};


