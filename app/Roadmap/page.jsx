import React from "react";
import Image from "next/image";
import Image1 from "../../public/Assets/firstsection/roadmap/img1.svg";
import Image2 from "../../public/Assets/firstsection/roadmap/wow-image.svg";
const page = () => {
  return (
    <div>
      <div className="max-w-[1500px]">
        <div className="w-[90%] py-[50px] mx-auto ">
          <div className="w-full flex md:flex-row flex-col items-center justify-between">
            <div className="md:w-[20%] w-full">
              <Image
                width={100}
                height={100}
                className="w-full"
                src={Image2}
                alt=""
              />
            </div>
            <div className="md:w-[60%] w-full">
              <h2 className="mb-[40px] md:text-[59px] sm:text-[35px] text-[25px] text-center text1">
                Moon Map:
              </h2>
              <div className="w-[70%] mx-auto py-[14px] px-[37px] rounded-tr-[30px] rounded-bl-[30px] border border-solid border-white border-opacity-90 bg-black bg-opacity-50 shadow-xl shadow-inner hover:scale-105 transition ease-in-out delay-200 hover:bg-bgcolor">
                <p className="text-[22px] text-textcolor font-bold text-center">
                  Phase 1: Meme
                </p>
                <p className="text-[22px] text-textcolor font-bold">
                  Phase 2: Vibe and HODL
                </p>
                <p className="text-[22px] text-textcolor font-bold">
                  Phase 3: Meme Takeover
                </p>
              </div>
            </div>
            <div className="md:w-[20%] w-full">
              <Image
                width={100}
                height={100}
                className="w-full"
                src={Image1}
                alt=""
              />
            </div>
          </div>
          <div className="">
            <p className="my-[50px] md:w-[70%] w-full mx-auto text-center text-shadow-4xl text-black font-comfortaa text-2xl font-bold leading-8">
              All jokes aside, here is a rough sketch of $pepe path ahead. We
              dont wan’t to give everything away on day 1, Expect surprises
              along the way ;)
            </p>
            <div className="w-[90%] mx-auto flex lg:flex-row flex-col md:items-start items-center lg:space-y-0 space-y-10 justify-between ">
              <div className="flex flex-col border-2 items-center rounded-tr-[30px] rounded-bl-[30px] lg:w-[35%] w-[100%] hover:bg-bgcolor transition duration-300 p-[27px] space-y-[22px] flex-shrink-0 bg-[#274C21] hover:scale-105">
                <h2 className="text-center text-shadow-2xl text-textcolor font-evermore text-[23px] font-normal leading-6 text1">
                  Phase 1
                </h2>
                <div>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    Launch
                  </p>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    CoinGecko/Coinmarketcap Listings
                  </p>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    1,000+ Holders
                  </p>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    big marketing campaigns
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-2 items-center rounded-tr-[30px] rounded-bl-[30px] lg:w-[30%] w-[100%] p-[27px] hover:bg-bgcolor transition duration-300  space-y-[22px] flex-shrink-0  bg-[#274C21] hover:scale-105">
                <h2 className="text-center text1 text-shadow-2xl pl-[26px] text-textcolor font-evermore text-[23px] font-normal leading-6">
                  Phase 2
                </h2>
                <div>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    Staking Platfrom Launch
                  </p>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    Cex listing
                  </p>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    Certik Audit
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-2 items-center rounded-tr-[30px] rounded-bl-[30px] lg:w-[30%] w-[100%] p-[27px] hover:bg-bgcolor transition duration-300  space-y-[22px] flex-shrink-0  bg-[#274C21] hover:scale-105">
                <h2 className="text-center text-shadow-2xl pl-[26px] text-textcolor font-evermore text-[23px] font-normal leading-6 text1">
                  Phase 3
                </h2>
                <div>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    NFT
                  </p>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    Play to earn platfrom
                  </p>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    Launch of our DEX
                  </p>
                  <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    PepeGains +1$
                  </p>
                  {/* <p className="text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6">
                    Meme Takeover
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
