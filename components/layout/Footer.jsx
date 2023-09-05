import React from "react";
import Image from "next/image";
// import logofooter from "../../public/Assets/logo.png";
import logofooter from "../../public/Assets/logo.png"
import { PiTelegramLogo } from "react-icons/pi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="w-[85%] mx-auto py-4">
        <h2
          className="text-[#050C06] font-Evermore leading-[78.4px] md:text-[56px] sm:text-[35px] text-[25px] text-center text1 my-8"
          style={{
            textShadow:
              "1px -1px 0px rgba(0, 0, 0, 0.50), 1px 1px 0px rgba(0, 0, 0, 0.50), -1px 1px 0px rgba(0, 0, 0, 0.50), -1px -1px 0px rgba(0, 0, 0, 0.50)",
          }}
        >
          Contact{" "}
        </h2>
        <Image
          src={logofooter}
          alt=""
          className="lg:w-[13%] md:w-[30%] w-[50%] mx-auto transition-all ease-in-out delay-200 hover:scale-110 animate-pulse"
        />
        <div className="grid grid-cols-2 gap-8 lg:w-[13%] md:w-[20%] w-[60%] mx-auto my-4 py-2">
          <i className="">
            <PiTelegramLogo className="text-[60px] bg-[#FFFF] p-4 rounded-[50%] hover:bg-gray-200 transition ease-in-out delay-150 cursor-pointer" />
          </i>
          <i className="">
            <BsTwitter className="text-[60px] bg-[#FFF] p-2 rounded-[50%] hover:bg-gray-200 transition ease-in-out delay-150 cursor-pointer" />
          </i>
        </div>
        <div className="lg:w-[55%] md:w-[65%] w-[90%] mx-auto my-[26px]">
          <p
            className="text-[20px] text-center font-Comfortaa"
            style={{
              textShadow:
                "1px -1px 0px rgba(0, 0, 0, 0.50), 1px 1px 0px rgba(0, 0, 0, 0.50), -1px 1px 0px rgba(0, 0, 0, 0.50), -1px -1px 0px rgba(0, 0, 0, 0.50)",
            }}
          >
            $pepe coin has no association with Matt Furie or his creation Pepe
            the Frog. This token is simply paying homage to a meme we all love
            and recognize.
          </p>
        </div>
        <div className="lg:w-[55%] md:w-[65%] w-[90%] mx-auto my-[26px] pb-4">
          <p
            className="text-[20px] text-center font-Comfortaa"
            style={{
              textShadow:
                "1px -1px 0px rgba(0, 0, 0, 0.50), 1px 1px 0px rgba(0, 0, 0, 0.50), -1px 1px 0px rgba(0, 0, 0, 0.50), -1px -1px 0px rgba(0, 0, 0, 0.50)",
            }}
          >
            $PEPE is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
