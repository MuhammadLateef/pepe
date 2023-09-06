import React from 'react';
import Image from 'next/image';
import About from "../../public/Assets/firstsection/about/mmga1.svg";
import svgLine from "../../public/Assets/firstsection/svgicons/svgLine.svg";
const page = () => {
    return (
        <div className="w-full">
            <div className='max-w-[1500px] mx-auto'>
                <div className="w-[90%] mx-auto flex md:flex-row flex-col justify-around items-center md:py-[50px] py-[30px]">
                    <div className="md:w-[40%] w-full animate-cls">
                        <Image width={100} height={100} className="w-full" src={About} alt="" />
                    </div>
                    <div className="md:w-[40%] w-full">
                        <h2 className='md:text-[56px] md:text-start text-center md:mt-0 mt-6 text-[35px] font-bold text1'>about</h2>
                        <p className='md:mt-8 mt-4 md:text-[23px] text-[18px] break-words'>Pepe is tired of watching everyone play
                            hot potato with the endless derivative
                            ShibaCumGMElonKishuTurboAssFlokiM
                            oon Inu coins. The Inu’s have had their
                            day. It’s time for the most recognizable
                            meme in the world to take his reign as
                            king of the memes.</p>
                        <p className='pt-4  md:text-[23px] text-[18px]'>Pepe is here to make memecoins great
                            again. Launched stealth with no
                            presale, zero taxes, LP burnt and
                            contract renounced, $PEPE is a coin for
                            the people, forever. Fueled by pure
                            memetic power, let $PEPE show you the
                            way.</p>
                    </div>
                </div>
            </div>
            <div className=""><Image width={100} height={100} className='w-full' src={svgLine} alt="" /></div>
        </div>
    )
}

export default page;