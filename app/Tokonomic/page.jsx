import React from "react";
import tokenomicImage from "../../public/Assets/firstsection/tokonomic/tokenomicImage.svg";
import svgLine from "../../public/Assets/firstsection/svgicons/svgLine.svg";
import Image from "next/image";

const Tokenomic = () => {
  return (
    <>
      <div className="md:my-8 my-0 md:py-4 py-2 text-[#ffff] w-[85%] mx-auto">
        <h2
          className="text-[#FFFF] text1 text-center md:text-[56px] sm:text-[35px] text-[25px] font-Evermore leading-[78px]"
          style={{
            textShadow:
              "1px -1px 0px rgba(0, 0, 0, 0.50), 1px 1px 0px rgba(0, 0, 0, 0.50), -1px 1px 0px rgba(0, 0, 0, 0.50), -1px -1px 0px rgba(0, 0, 0, 0.50)",
          }}
        >
          TOKENOMICS
        </h2>

        <div className="flex md:flex-row flex-col justify-between items-center md:my-10 my-6 md:gap-10 gap-4 ">
          <div
            className="md:w-[40%] w-full mx-auto font-Evermore md:text-[25px] text-[20px] font-normal`"
            style={{
              textShadow:
                " 1px -1px 0px rgba(0, 0, 0, 0.50), 1px 1px 0px rgba(0, 0, 0, 0.50), -1px 1px 0px rgba(0, 0, 0, 0.50), -1px -1px 0px rgba(0, 0, 0, 0.50)",
            }}
          >
            <h2 className="sm:text-[20px] text-[16px] text-center text1">
              Token Supply:
            </h2>
            <p className="sm:text-[20px] text-[14px] mt-3 text-center text1">
              500 000 000{" "}
            </p>
            <div className="bg-[#264B20]  border-2 p-4 my-8  rounded-bl-[30px] rounded-tr-[30px] border-[#fffef8] hover:bg-bgcolor transition ease-out delay-150">
              <h2 className="mb-8 md:text-[22px] text-[18px]">
                No Taxes, No Bullshit. It’s that simple.
              </h2>
              <p className="leading-[30px] md:text-[22px] text-[18px]">
                <ul>
                  <li className="flex my-2">
                    {" "}
                    <span
                      className="border-2 w-[12%] h-6 mx-4 my-auto rounded-2xl"
                      style={{
                        background: "rgb(194,195,34)",
                        background:
                          "linear-gradient(0deg, rgba(194,195,34,1) 0%, rgba(109,189,114,1) 81%)",
                      }}
                    ></span>{" "}
                    0% team No team tokens
                  </li>
                  <li className="flex my-2 ">
                    {" "}
                    <span
                      className="border-2 w-[12%] h-6 mx-4 my-auto rounded-2xl"
                      style={{
                        background: "rgb(194,195,34)",
                        background:
                          "linear-gradient(0deg, rgba(194,195,34,1) 0%, rgba(109,189,177,1) 81%)",
                      }}
                    ></span>{" "}
                    80% public launch
                  </li>
                  <li className="flex  my-2 ">
                    {" "}
                    <span
                      className="border-2 w-[12%] h-6 mx-4 my-auto rounded-2xl"
                      style={{
                        background: "rgb(194,195,34)",
                        background:
                          "linear-gradient(0deg, rgba(194,195,34,1) 0%, rgba(109,189,181,1) 33%)",
                      }}
                    ></span>{" "}
                    0% Presale
                  </li>
                  <li className="flex my-2 ">
                    {" "}
                    <span
                      className="border-2 w-[12%] h-6 mx-4 my-auto rounded-2xl"
                      style={{
                        background: " rgb(194,195,34)",
                        background:
                          "linear-gradient(0deg, rgba(194,195,34,1) 0%, rgba(187,189,109,1) 69%)",
                      }}
                    ></span>{" "}
                    0% Private Sell
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="md:w-[35%] w-full md:p-8 p-2 mx-auto my-auto">
            <Image
              width={100}
              height={100}
              src={tokenomicImage}
              alt=""
              className="w-full h-auto"
            />
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
    </>
  );
};

export default Tokenomic;
