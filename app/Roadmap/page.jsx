import React from 'react';
import Image from 'next/image';
import Image1 from '../../public/Assets/firstsection/roadmap/img1.svg';
import Image2 from '../../public/Assets/firstsection/roadmap/wow-image.svg';
const page = () => {
  return (
    <div>
      <div className="max-w-[1500px]">
        <div className="w-[90%] py-[50px] mx-auto ">
          <div className="w-full flex md:flex-row flex-col items-center justify-between">
            <div className="md:w-[20%] w-full">
              <Image width={100} height={100} className='w-full' src={Image2} alt="" />
            </div>
            <div className="md:w-[40%] w-full">
              <h2 className='mb-[40px] md:text-[56px] sm:text-[35px] text-[25px] text-center text1'>roadmap</h2>
              <div className="w-[70%] mx-auto py-[14px] px-[37px] rounded-tr-[30px] rounded-bl-[30px] border border-solid border-white border-opacity-90 bg-black bg-opacity-50 shadow-xl shadow-inner">

                <p className='text-[22px] text-textcolor font-bold text-center'>Phase 1: Meme</p>
                <p className='text-[22px] text-textcolor font-bold'>Phase 2: Vibe and HODL</p>
                <p className='text-[22px] text-textcolor font-bold'>Phase 3: Meme Takeover</p>
              </div>
            </div>
            <div className="md:w-[20%] w-full">
              <Image width={100} height={100} className='w-full' src={Image1} alt="" />
            </div>
          </div>
          <div className="">
            <p className='my-[50px] md:w-[70%] w-full mx-auto text-center text-shadow-4xl text-black font-comfortaa text-2xl font-bold leading-8'>All jokes aside, here is a rough sketch of $pepe path ahead. We dont wan’t
              to give everything away on day 1, Expect surprises along the way ;)</p>
            <div className="w-[85%] mx-auto flex md:flex-row flex-col md:items-start items-center md:space-y-0 space-y-10 justify-between ">
              <div className="flex flex-col border-2 items-center rounded-tr-[30px] rounded-bl-[30px] md:w-[30%] w-[100%] hover:bg-bgcolor transition duration-300 p-[27px] space-y-[22px] flex-shrink-0 bg-[#274C21]">
                <h2 className='text-center text-shadow-2xl text-textcolor font-evermore text-[23px] font-normal leading-6 text1'>Phase 1</h2>
                <div>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>Launch</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>CoinGecko/Coinmark
                    etcap Listings</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>1,000+ Holders</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>Get $PEPE Trending
                    on twitter with our
                    memetic power</p>
                </div>
              </div>
              <div className="flex flex-col border-2 items-center rounded-tr-[30px] rounded-bl-[30px] md:w-[30%] w-[100%] p-[27px] hover:bg-bgcolor transition duration-300  space-y-[22px] flex-shrink-0  bg-[#274C21]">
                <h2 className='text-center text1 text-shadow-2xl pl-[26px] text-textcolor font-evermore text-[23px] font-normal leading-6'>Phase 2</h2>
                <div>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>Community Partnerships
                    Pepe Times digital
                    newsletter</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>Formation of token gated
                    discord group, Pepe
                    Palace, for holders, more
                    details tba</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>CEX Listings
                    10,000+holders</p>

                </div>
              </div>
              <div className="flex flex-col border-2 items-center rounded-tr-[30px] rounded-bl-[30px] md:w-[30%] w-[100%] p-[27px] hover:bg-bgcolor transition duration-300  space-y-[22px] flex-shrink-0  bg-[#274C21]">
                <h2 className='text-center text-shadow-2xl pl-[26px] text-textcolor font-evermore text-[23px] font-normal leading-6 text1'>Phase 3</h2>
                <div>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>Pepe merch</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>Pepe Academy</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>Pepe Tools</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>T1 Exchange Listings
                    100,000+ holders</p>
                  <p className='text-shadow-2xl pl-[26px] font-comfortaa text-[20px] font-bold leading-6'>Meme Takeover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;