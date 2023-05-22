import { useState } from "react";
import { motion } from "framer-motion";
import { RxTriangleDown } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const renderSubMenu = (menuList) => {
    return menuList.map((menu, index) => (
      <li key={menu}>
        <NavLink
          to={`/${data.name}/${menu.replace(" ", "-").toLowerCase()}`}
          className={`${
            data.name === "showcase" ? "active submenu-style " : ""
          }`}
        >
          {menu}
        </NavLink>
        {index !== menuList.length - 1 && <div className="submenu-line" />}
      </li>
    ));
  };

  return (
    <>
      <li
        className={`sublink ${pathname.includes(data.name) && "text-[#fff]"} ${
          subMenuOpen ? "active" : ""
        }`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize font-semibold">{data.name}</p>
        <RxTriangleDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          size={20}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-nunito overflow-hidden submenu-list"
      >
        {renderSubMenu(data.menus)}
      </motion.ul>
    </>
  );
};

export default SubMenu;
