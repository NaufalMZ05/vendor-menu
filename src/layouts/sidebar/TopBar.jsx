import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./TopBar.css";
import Sidebar from "./SideBar";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import GetReview from "../../icons/getReview";
import { ReactComponent as ManageReview } from "../../icons/manage-reviews.svg"; //Manage Reviews
import { ReactComponent as ShowCase } from "../../icons/showcase.svg"; //Manage Reviews
import { ReactComponent as Promotions } from "../../icons/promotions.svg";
import { ReactComponent as ShopIcon } from "../../icons/shop.svg";
import { ReactComponent as EnquiryIcon } from "../../icons/enquiries.svg";
import { ReactComponent as SettingsIcons } from "../../icons/settings.svg";
import { RxTriangleDown } from "react-icons/rx";
import { ReactComponent as AbiaLogo } from "../../ABIA-White-Logo-gold-crown.svg";
const TopBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullscreenOverlay, setFullscreenOverlay] = useState(false);
  //sidebar
  const [isActive, setIsActive] = useState(false);
  //submenu
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#6cc2bc]  md:bg-[#fff] h-20  flex items-center justify-between fixed top-0 left-0 right-0 z-40 border-b border-[#6cc2bc] ">
      <div className="ml-8 mt-4 ">
        {/* <button className="text-white mr-2 md:hidden" onClick={toggleSidebar}>
          <MdMenu size={24} />
        </button> */}
        <span className="ml-[5px] text-black text-[20px] md:text-[25px] font-bold  md:ml-[256px]">
          Welcome, ABC Cakes !
        </span>
      </div>
      <div>
        <button
          className="mr-4 mt-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          <HiUserCircle
            size={40}
            className="text-[#fff] md:text-[#6cc2bc] md:mr-10 "
          />
        </button>
        {sidebarOpen && (
          <div className="dropdown">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <span className="font-nunito text-lg font-bold">
                  ABC Cakes at...
                </span>
                <br></br>
                <span>info@abccakesmel.co</span>
              </li>
              <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">
                Account Details
              </li>
              <hr className="border-[#aeb0b0]" />
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center font-bold">
                Log out
              </li>
            </ul>
          </div>
        )}
        <button className="mr-7 md:hidden" onClick={toggleMenu}>
          <MdMenu
            size={35}
            className="text-[#fff] md:text-[#6cc2bc] md:mr-10 md:hidden"
          />
        </button>
        {menuOpen && (
          <>
            <div
              className={`fullscreen-overlay ${
                fullscreenOverlay ? "visible" : ""
              } md:hidden`}
              onClick={toggleMenu}
            >
              <div className="menu-container">
                <div className="flex items-center justify-around ml-16">
                  <AbiaLogo width={80} alt="Abia-logo" className="mt-5" />
                  <div className="close-icon">
                    <AiOutlineClose size={30} className="mt-2 -mr-5" />
                  </div>
                </div>
                <ul className="mt-[40px] ">
                  <li className="mb-5">
                    <NavLink to={"/"}>
                      <div className="flex gap-5">
                        <HomeIcon className=" w-5 h-5 fill-current text-[#fff]" />
                        Home
                      </div>
                    </NavLink>
                    {/* <hr className="hr-line" /> */}
                  </li>
                  <li className="mb-5">
                    <NavLink to={"/get-review"}>
                      <div className="flex gap-5">
                        <GetReview className=" w-5 h-5 fill-current text-[#fff]" />
                        Get review
                      </div>
                    </NavLink>
                  </li>
                  <li className="mb-5">
                    <NavLink to={"/manage-review"}>
                      <div className="flex gap-5 ">
                        <ManageReview className="w-6 h-6 fill-current text-[#fff] " />
                        Manage reviews
                      </div>
                    </NavLink>
                  </li>
                  <li className="mb-5">
                    <div className="flex justify-start">
                      <NavLink to={"/showcase"} className="flex gap-5">
                        <ShowCase className="w-5 h-5 fill-current text-[#fff]" />
                        Showcase
                      </NavLink>
                      <RxTriangleDown
                        className={`ml-56 transition-transform ${
                          showSubMenu ? "rotate-180" : ""
                        }`}
                        onClick={toggleSubMenu}
                      />
                    </div>
                    {showSubMenu && (
                      <div>
                        <ul className="ml-[43px] mt-4">
                          <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-2"
                          >
                            <NavLink to={"/showcase/review-widget"}>
                              Review Widgets
                            </NavLink>
                          </motion.li>
                          <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-2"
                          >
                            <NavLink to={"/showcase/award-badges"}>
                              Award Widgets
                            </NavLink>
                          </motion.li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li className="mb-5">
                    <NavLink to={"/promotions"}>
                      <div className="flex gap-5">
                        <Promotions className="w-5 h-5 fill-current text-[#fff]" />
                        Promotions
                      </div>
                    </NavLink>
                  </li>
                  <li className="mb-5">
                    <NavLink to={"/shop"}>
                      <div className="flex gap-5 ">
                        <ShopIcon className="w-5 h-5 fill-current text-[#fff]" />
                        Shop
                      </div>
                    </NavLink>
                  </li>
                  <li className="mb-5">
                    <NavLink to={"/enquiries"}>
                      <div className="flex gap-5 ">
                        <EnquiryIcon className="w-5 h-5 fill-current text-[#fff]" />
                        Enquiries
                      </div>
                    </NavLink>
                  </li>
                  <li className="mb-5">
                    <NavLink to={"/settings"}>
                      <div className="flex gap-5 ">
                        <SettingsIcons className="w-5 h-5 fill-current text-[#fff]" />
                        Settings
                      </div>
                    </NavLink>
                  </li>
                </ul>
                <div className="mt-[65px] space-y-2">
                  <div className="">
                    <span className="text-sm text-white ml-2">
                      Your Plan: Free
                    </span>
                  </div>
                  <button className=" rounded-3xl bg-[#e8cf82] px-6 py-2 ">
                    <span className="text-black text-sm font-bold">
                      {" "}
                      Upgrade Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
