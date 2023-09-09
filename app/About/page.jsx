import React from "react";
import Image from "next/image";
import About from "../../public/Assets/firstsection/about/mmga1.svg";
import svgLine from "../../public/Assets/firstsection/svgicons/svgLine.svg";
const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1500px] mx-auto">
        <div className="w-[90%] mx-auto flex md:flex-row flex-col justify-around items-center md:py-[50px] py-[30px]">
          <div className="md:w-[40%] w-full animate-cls">
            <Image
              width={100}
              height={100}
              className="w-full"
              src={About}
              alt=""
            />
          </div>
          <div className="md:w-[40%] w-full">
            <h2 className="md:text-[56px] md:text-start text-center md:mt-0 mt-6 text-[35px] font-bold text1">
              about
            </h2>
            <p className="md:mt-8 mt-4 md:text-[23px] text-[18px] break-words">
              Pepe is tired of watching everyone play Pepina is done watching
              the meme market frenzy with derivative coins. It's time for the
              most iconic meme to reign supreme.
            </p>
            <p className="pt-4  md:text-[23px] text-[18px]">
              Pepina is here to elevate memecoins to new heights. $PEPINA is a
              coin by and for the people, forever. Empowered by a
              hyperdeflationary mechanism, every sell transaction fuels
              $PEPINA's journey to the moon. Let $PEPINA lead the way to a
              brighter meme future.
            </p>
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
