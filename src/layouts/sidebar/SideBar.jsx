import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import GetReview from "../../icons/getReview"; //get review
// svg
import manageReview from "../../icons/manageReview";
import { ReactComponent as HomeIcon } from "../../icons/home.svg"; //home
import { ReactComponent as ManageReview } from "../../icons/manage-reviews.svg"; //Manage Reviews
import { ReactComponent as ShowCase } from "../../icons/showcase.svg"; //Manage Reviews
import { ReactComponent as Promotions } from "../../icons/promotions.svg";
import { ReactComponent as ShopIcon } from "../../icons/shop.svg";
import { ReactComponent as EnquiryIcon } from "../../icons/enquiries.svg";
import { ReactComponent as SettingsIcons } from "../../icons/settings.svg";

import { NavLink, useLocation, useRoutes } from "react-router-dom";

//css
import "./sideBar.css";
import TopBar from "./TopBar";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  //icon active
  const [isActive, setIsActive] = useState(false);

  const sidebarRef = useRef();
  const { pathname } = useLocation();

  const handleNavLinkClick = () => {
    setIsActive(true);
  };
  const handleNavLinkBlur = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "showcase",
      icon: ShowCase,
      menus: ["review widget", "Award Badges"],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-60 bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-[#6cc2bc]  text-gray shadow-xl z-[9999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex justify-center items-center border-b border-white py-5 w-full">
          <img
            src="https://mockabia.com/images/ABIA-White-Logo-gold-crown.svg"
            width={95}
            alt=""
          />
        </div>

        <div className="flex flex-col  h-full text-white">
          <ul className="pl-7 text-[0.9rem] py-5 flex flex-col gap-2 font-semibold overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link font-semibold ">
                <div className="flex gap-5 ml-5">
                  <HomeIcon className=" w-5 h-5 fill-current text-[#fff]" />
                  Home
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/get-review"}
                className={`link ${isActive ? "active" : ""}`}
                onClick={handleNavLinkClick}
                onBlur={handleNavLinkBlur}
              >
                <div className="flex gap-5 ml-5">
                  <GetReview
                    width={21}
                    height={23.67}
                    color={isActive ? " #6cc2bc" : "#fff"}
                  />
                  Get review
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/manage-review"} className="link font-semibold">
                <div className="flex gap-5 ml-5">
                  <ManageReview className="w-6 h-6 fill-current text-[#fff] " />
                  Manage reviews
                </div>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={"/showcase"} className="sublink">
                <ShowCase className="w-6 h-6 fill-current text-[#fff]" />
                Showcase
              </NavLink>
            </li> */}

            {(open || isTabletMid) && (
              <div className="ml-3 mt-1">
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col ">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink to={"/promotions"} className="link font-semibold">
                <div className="flex gap-5 ml-5 -mt-1">
                  <Promotions className="w-5 h-5 fill-current text-[#fff]" />
                  Promotions
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to={"/shop"} className="link font-semibold">
                <div className="flex gap-5 ml-5">
                  <ShopIcon className="w-5 h-5 fill-current text-[#fff]" />
                  Shop
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/enquiries"}
               
              >
                <div className="flex gap-5 ml-5">
                  <EnquiryIcon className="w-5 h-5 fill-current" />
                  Enquiries
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/settings"} className="link font-semibold">
                <div className="flex gap-5 ml-5">
                  <SettingsIcons className="w-5 h-5 fill-current text-[#fff]" />
                  Settings
                </div>
              </NavLink>
            </li>
          </ul>
          {open && (
            <div>
              <div className="p-[24px] space-y-2">
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
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
