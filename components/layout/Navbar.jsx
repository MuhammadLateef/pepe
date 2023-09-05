'use client'
import Link from "next/link";
import React,{useState} from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
// import { Link } from "react-router-dom";
import logo from "../../public/Assets/logo.svg"
import Image from "next/image";

const NavItemData = [
  {
    title: "Home",
    Link: "/",
  },
  {
    title: "about",
    Link: "/About",
  },
  {
    title: "how to buy",
    Link: "/How_to_buy",
  },
  {
    title: "bridge",
    Link: "/bridge",
  },
  {
    title: "tokenomics",
    Link: "/Tokonomic",
  },
  {
    title: "roadmap",
    Link: "/Roadmap",
  },
  
];

const NavbarItems = ({ title, classProps }) => {
  return (
    <li
      className={` cursor-pointer  transition duration-300 hover:text-textcolor text-white text1 text-[12px] ${classProps}`}
    >
      {title}
    </li>
  );
};

const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <nav className="bg-bgcolor">
        <div className="flex p-5 md:p-10 lg:px-20  justify-between md:border-b-2 border-b-0  border-black items-center self-stretch md:shadow-lg shadow-0 sticky top-0">
          <div className="text-textcolor md:text-[1.5rem] font-bold md:block hidden">
            <a><Image width={220} height={100} src={logo} className="" alt="img" /></a>
          </div>
          <div className="md:block hidden">
            <ul className="flex justify-end items-center lg:gap-10 md:gap-4  text-black ">
              {NavItemData.map((title, index) => {
                return (
                  <Link key={index} href={title.Link} >
                    <NavbarItems
                      key={index + title.title}
                      className=""
                      title={title.title}
                    />
                  </Link>
                );
              })}
              <li>
                {" "}
                <a className="rounded-[60px] border-1 py-[11px] text-[12px] cursor-pointer px-[33px] border hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300 text1">
                  buynow
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10  ">
          <div className="text-textcolor text-[1.2rem] relative text-bold md:hidden block">
            <a href="#" className="absolute left-5">
              {" "}
            <Image width={120} height={100} src={logo} className="" alt="img" />
            </a>
          </div>
          <div className="md:hidden block text-textcolor  relative">
            {toggle ? (
              <RxCross1
                className="absolute text-white right-10 text-[1.5rem] cursor-pointer"
                onClick={() => settoggle(!toggle)}
              />
            ) : (
              <HiMenuAlt3
                className="absolute text-white right-10 text-[1.5rem] cursor-pointer"
                onClick={() => settoggle(!toggle)}
              />
            )}
          </div>
          {/* mobile view */}
          <div
            className={`md:hidden block mt-10  col-span-2 py-2 transition-all ease-out delay-300 `}
          >
            <ul
              className={` text-white py-5 px-6 mobile-menu transition ease-linear delay-300 ${
                toggle ? "open" : "hidden"
              } `}
            >
              {NavItemData.map((title, index) => {
                return (
                  <a key={index}>
                    <NavbarItems
                      key={index + title.title}
                      classProps=" px-0 py-4 w-full"
                      title={title.title}
                      Link={title.Link}
                    />
                  </a>
                );
              })}
             <li>
                {" "}
                <a className="rounded-[60px] mt-8 border-1 py-[6px] text-[12px] cursor-pointer px-[20px] border hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300 text1">
                  buynow
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>{" "}
    </>
  );
};

export default Header;