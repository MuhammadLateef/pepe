"use client";
import Image from "next/image";
import React from "react";
import homeImage1 from "../../public/Assets/firstsection/img1.svg";
import social1 from "../../public/Assets/firstsection/socail1.png";
import social2 from "../../public/Assets/firstsection/social2.png";
import social3 from "../../public/Assets/firstsection/social3.png";
import social4 from "../../public/Assets/firstsection/social4.png";
import social5 from "../../public/Assets/firstsection/social5.png";
import social6 from "../../public/Assets/firstsection/social6.png";
import svg1 from "../../public/Assets/firstsection/svgicons/gemini.svg";
import svg2 from "../../public/Assets/firstsection/svgicons/binance.svg";
import svg3 from "../../public/Assets/firstsection/svgicons/kucoin-logo.svg";
import svg4 from "../../public/Assets/firstsection/svgicons/huobi-token-ht-logo.svg";
import svg5 from "../../public/Assets/firstsection/svgicons/ByBit_Icon.svg";
import svg6 from "../../public/Assets/firstsection/svgicons/crypto_com-logo.svg";
import svg7 from "../../public/Assets/firstsection/svgicons/bitget-logo.svg";
import svg8 from "../../public/Assets/firstsection/svgicons/mexc-logo.svg";
import svg9 from "../../public/Assets/firstsection/svgicons/unnamed.svg";
import svgLine from "../../public/Assets/firstsection/svgicons/svgLine.svg";
// import backgrounImge from "../../public/Assets/firstsection/bghome.png";
import backgrounImge from "../../public/Assets/firstsection/bghome.png";
const page = () => {
  return (
    <div className="bgimagediv">
      <div className="max-w-[1500px] mx-auto">
        <div className="w-[90%] mt-[50px] mx-auto flex md:flex-row flex-col justify-between items-center">
          <div className="md:w-[40%] w-full">
            <h2 className="text-textcolor md:text-[55px] text-[35px] font-semibold text1">
              $PEPINA
            </h2>
            <p className="text-textcolor md:text-[28px] text-[23px] md:mt-0 mt-4 font-comfortaa">
              Outshining Pepe! The Memecoin Marvel with Game-Changing Features -
              Leading the Market to New Heights!
            </p>
            <div className="mt-8 flex justify-start space-x-4">
              <a href="#">
                <Image
                  width={100}
                  height={100}
                  className="w-15 hover:scale-110 transition-all ease-in delay-200"
                  src={social1}
                  alt="img"
                />
              </a>
              <a href="#">
                <Image
                  width={100}
                  height={100}
                  className="w-15 hover:scale-110 transition-all ease-in delay-200"
                  src={social2}
                  alt="img"
                />
              </a>
              <a href="#">
                <Image
                  width={100}
                  height={100}
                  className="w-15 hover:scale-110 transition-all ease-in delay-200"
                  src={social3}
                  alt="img"
                />
              </a>
              <a href="#">
                <Image
                  width={100}
                  height={100}
                  className="w-15 hover:scale-110 transition-all ease-in delay-200"
                  src={social4}
                  alt="img"
                />
              </a>
              <a href="#">
                <Image
                  width={100}
                  height={100}
                  className="w-15 hover:scale-110 transition-all ease-in delay-200"
                  src={social5}
                  alt="img"
                />
              </a>
              <a href="#">
                <Image
                  width={100}
                  height={100}
                  className="w-15 hover:scale-110 transition-all ease-in delay-200"
                  src={social6}
                  alt="img"
                />
              </a>
            </div>
          </div>
          <div className="md:w-[35%] w-full md:mt-0 mt-[20px] animate-cls">
            <Image
              width={100}
              height={100}
              className="w-full"
              src={homeImage1}
              alt="img"
            />
          </div>
        </div>
        <div className="w-[70%] mx-auto mt-[90px] pb-[60px]">
          <div className="flex sm:flex-row text1 flex-col items-center space-x-4 sm:space-y-0 space-y-6 mb-6">
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-around items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              gemini{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg1}
                  alt="img"
                />
              </span>
            </a>
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-between items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              binance{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg2}
                  alt="img"
                />
              </span>
            </a>
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-between items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              kucoin{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg3}
                  alt="img"
                />
              </span>
            </a>
          </div>
          <div className="flex sm:flex-row text1 flex-col items-center space-x-4 sm:space-y-0 space-y-6 mb-6">
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-around items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              huobi{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg4}
                  alt="img"
                />
              </span>
            </a>
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-between items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              bybit{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg5}
                  alt="img"
                />
              </span>
            </a>
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-between items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              crypto.com{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg6}
                  alt="img"
                />
              </span>
            </a>
          </div>
          <div className="flex sm:flex-row text1 flex-col items-center space-x-4 sm:space-y-0 space-y-6 mb-6">
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-around items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              bitget{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg7}
                  alt="img"
                />
              </span>
            </a>
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-between items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              okx{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg8}
                  alt="img"
                />
              </span>
            </a>
            <a
              href="#"
              className="border-2 border-white  rounded-full flex justify-between items-center text-[18px] py-[9px] md:w-[30%] w-[100%] px-[20px] hover:border-green-900 hover:bg-white hover:text-bgcolor transition duration-300"
            >
              bingx japan{" "}
              <span>
                <Image
                  width={30}
                  height={100}
                  className=""
                  src={svg9}
                  alt="img"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          width={100}
          height={100}
          className="w-full"
          src={svgLine}
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
