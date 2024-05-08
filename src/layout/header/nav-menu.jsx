import Link from "next/link.js";
import React from "react";
import menu_data from "./menu-data.js";
import { useRouter } from "next/router.js";

const NavMenu = ({num=false}) => {
  const router = useRouter()
  return (
    <>
      <ul>
        {menu_data.map((menu, index) =>
         
          <li key={menu.id}>
              <Link className={router.pathname === menu.link ? 'text-dark' : ''}  href={menu.link}>
               
                {menu.title}
              </Link>
            </li>
          
        )}
      </ul>
    </>
  );
};

export default NavMenu;
