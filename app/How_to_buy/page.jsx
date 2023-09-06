import React from "react";
// import howtobuy1 from "../../public/Assets/firstsection/howtobuy/howtobuy1.svg";
import howtobuy1 from "../../public/Assets/firstsection/howtobuy/howtobuy1.svg"
import howtobuy2 from "../../public/Assets/firstsection/howtobuy/howtobuy2.svg";
import howtobuy3 from "../../public/Assets/firstsection/howtobuy/howtobuy3.svg";
import howtobuy4 from "../../public/Assets/firstsection/howtobuy/howtobuy4.svg";
import eth from "../../public/Assets/firstsection/howtobuy/eth.svg";
import horse from "../../public/Assets/firstsection/howtobuy/horse.svg";
import cardimage from "../../public/Assets/firstsection/howtobuy/cardimage.svg";
import { BsSearch,BsThreeDots } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { BiDownArrowAlt } from "react-icons/bi";
import pepe from "../../public/Assets/firstsection/howtobuy/pepe.svg";
import svgLine from "../../public/Assets/firstsection/svgicons/svgLine.svg";
import Image from "next/image";
const CardData = [
  {
    image: howtobuy1,
    heading: "Create a Wallet",
    paragraph: `download metamask or your wallet of choice from the app store or google play store for
free. Desktop users, download the google chrome extension by going to metamask.io.`,
  },
  {
    image: howtobuy2,
    heading: "Get Some ETH",
    paragraph: `have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to
        your wallet.`,
  },
  {
    image: howtobuy3,
    heading: "Go to Uniswap",
    paragraph: `connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select
Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.`,
  },
  {
    image: howtobuy4,
    heading: "Switch ETH for $PEPE",
    paragraph: `switch ETH for $PEPE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.`,
  },
];

const HowTobuy = () => {
  return (
    <>
      <div className=" py-5 md:w-[80%] w-[90%] mx-auto">
        <div>
          <h2
            className="sm:text-5xl text-3xl text1 md:my-8 my-4 font-evermore py-4 text-[#050C06] text-center"
            style={{
              textShadow:
                "1px -1px 0px rgba(0, 0, 0, 0.50), 1px 1px 0px rgba(0, 0, 0, 0.50), -1px 1px 0px rgba(0, 0, 0, 0.50), -1px -1px 0px rgba(0, 0, 0, 0.50)",
            }}
          >
            HOW TO BUY
          </h2>

          {CardData.map((items, index) => {
            return (
              <>
                <div key={index} className="border-2 border-[#fffef8] bg-[#264B20] py-4  rounded-tr-[30px] rounded-bl-[30px] md:px-4 px-1 flex justify-center items-center  hover:bg-[#2d5c25] transition ease-in-out delay-200 my-4 md:flex-row flex-col">
                  <div className="md:w-[15%] mx-auto w-[40%] ">
                    <Image width={100} height={100}  src={items.image} alt="" className="w-full h-[15vh]" />
                  </div>
                  <div className="md:w-[80%] w-[95%] mx-auto md:my-0 my-4">
                    <h2
                      className="text-[#050C06] text1 md:text-start text-center font-Evermore sm:text-[23px] text-[18px] leading-[38px]"
                      style={{
                        textShadow:
                          " 1px -1px 0px rgba(0, 0, 0, 0.50), 1px 1px 0px rgba(0, 0, 0, 0.50), -1px 1px 0px rgba(0, 0, 0, 0.50), -1px -1px 0px rgba(0, 0, 0, 0.50)",
                      }}
                    >
                      {items.heading}
                    </h2>
                    <p
                      className="text-[#050C06] font-Comfortaa md:text-[19px] text-[16px] md:text-start text-justify leading-[31px]"
                      style={{
                        textShadow: `1px -1px 0px rgba(0, 0, 0, 0.50), 1px 1px 0px rgba(0, 0, 0, 0.50), -1px 1px 0px rgba(0, 0, 0, 0.50), -1px -1px 0px rgba(0, 0, 0, 0.50`,
                      }}
                    >
                      {items.paragraph}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* form cards is here */}

        <div className="grid lg:grid-cols-2 grid-cols-1 my-8">
          <div className="bg-[#171517] rounded-[10px] py-4 px-8 md:w-[90%] w-full">
            <div className="grid grid-cols-2 my-3">
              <div className="flex ml-4 space-x-4">
                <Image width={30} height={100} src={horse} alt="" />
                <Image width={30} height={100} src={eth} alt="" />
                <BiChevronDown className="text-gray-600 text-[30px] my-auto" />
              </div>
              <div className="grid grid-cols-2 place-items-center">
                <BsSearch className="text-30px  text-gray-600 my-auto" />
                <button className="text-[#FC72FF] text-[14px] font-Inter font-semibold py-2 px-4 rounded-[30px] bg-[#453545] hover:bg-[#FC72FF] hover:text-textcolor transition duration-300">
                  Connect
                </button>
              </div>
            </div>
            <div
              className="text-gray-600 my-8 px-4 "
              style={{
                borderRadius: "24px",
                border: "1px solid rgba(34, 34, 34, 0.07)",
                boxShadow:
                  "0px 40px 120px 0px rgba(252, 114, 255, 0.12), 0px 0px 10px 0px rgba(252, 114, 255, 0.04)",
              }}
            >
              <div className="flex space-x-6 text-[16px] my-8 font-semibold">
                <span>Swap</span>
                <span>Buy </span>
                <AiFillSetting className="text-[30px]" />
              </div>
              <div
                className=" border-2 border-[#F9F9F9] rounded-[24px] px-4 py-8 relative"
                style={{
                  boxShadow:
                    "0px 40px 120px 0px rgba(252, 114, 255, 0.12), 0px 0px 10px 0px rgba(252, 114, 255, 0.04)",
                }}
              >
                <div className="grid md:grid-cols-2 grid-cols-1 text-center ">
                  <div>
                    <h2 className="md:text-[18px] text-[16px] font-semibold md:my-0 my-2">
                      You pay{" "}
                    </h2>
                    <span className="text-[#CECECE] text-[36px] font-semibold">
                      0
                    </span>
                  </div>
                  <div>
                    <button className="md:px-4 px-1 py-1 mx-auto md:text-[18px] md:w-auto w-full text-[15px] text-[#fff] font-semibold border border-[#FC72FF] bg-[#FC72FF] flex md:space-x-1 space-x-0 md:flex-row  rounded-[20px] items-center justify-around  hover:bg-textcolor hover:text-[#FC72FF] transition duration-300">
                      {" "}
                      <p>select token </p>
                        <BiChevronDown className="font-semibold text-[30px]" />
                    </button>
                  </div>
                </div>
                <div className="border-4 border-[#171517] text-[40px] text-center rounded-[20px] absolute md:left-40 left-[40%] w-[15%] bg-[#1B1B1B]">
                  <BiDownArrowAlt className="text-gray-600 md:ml-2 ml-0" />
                </div>
              </div>
              <div
                className=" border-2 border-[#F9F9F9] rounded-[24px] px-4 py-8 my-8 relative"
                style={{
                  boxShadow:
                    "0px 40px 120px 0px rgba(252, 114, 255, 0.12), 0px 0px 10px 0px rgba(252, 114, 255, 0.04)",
                }}
              >
                <div className="grid md:grid-cols-2 grid-cols-1  ">
                  <div className="text-center">
                    <h2 className="md:text-[18px] text-[16px] font-semibold">
                      You pay{" "}
                    </h2>
                    <span className="text-[#CECECE] text-[36px] font-semibold">
                      0
                    </span>
                  </div>
                  <div>
                    <button className="lg:px-4 px-0 py-1 mx-auto text-[18px] md:w-auto w-full  text-[#fff] font-semibold border border-[#FC72FF] bg-[#FC72FF] flex md:space-x-2 space-x-0 rounded-[20px]  items-center justify-center hover:bg-textcolor hover:text-[#FC72FF] transition duration-300">
                      {" "}
                      <Image width={30} height={100}  src={pepe} alt="" className="mx-2  " />
                      <h2 className="my-auto"> PEPE </h2>
                      <div className="text-[18px]  my-auto">
                        <BiChevronDown className="font-semibold md:text-[30px] text-[25px] " />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-[#1B1B1B] text-[#FC72FF] w-full py-4  rounded-[16px] transition-all ease-in-out delay-200 hover:bg-[#343131] md:text-[18px] text-[16px] font-semibold ">
                  Connect Wallet
                </button>
              </div>
            </div>
            <div>
              <ul className="flex justify-between bg-[#101010] py-4 rounded-[20px] px-4">
                {["Swap", "Tokens", "NFTs", "Pools"].map((items, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className="text-white font-Inter text-[15px] "
                      >
                        {items}
                      </li>

                    </>
                  );
                })}
                <li className="text-white my-auto"><BsThreeDots /></li>
              </ul>
            </div>
          </div>
          <div>
            <Image width={100} height={100} className="w-full" src={cardimage} alt="" />
          </div>
        </div>
      </div>
      <div className=""><Image width={100} height={100} className='w-full' src={svgLine} alt="" /></div>
    </>
  );
};

export default HowTobuy;
