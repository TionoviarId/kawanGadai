"use client";
import {  useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import satu from '../../public/1.jpeg'
import dua from '../../public/2.jpeg'
import tiga from '../../public/3.jpeg'
import empat from '../../public/4.jpeg'
import lima from '../../public/5.jpeg'

function MultipleCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const [arrowHover, setArrowHover] = useState(false);


  return (
    <>
      <div className=" w-full h-full ">
       
        <div className="mt-14 z-20 ">
          <Carousel responsive={responsive} autoPlay={true} infinite={true} arrows={arrowHover} className="z-0 flex  gap-10" >
            <div className="text-white  flex justify-center items-center flex-col mx-2 ">
              <Image
                src={satu}
                width={210}
                height={150}
                className="w-[250px] md:w-[382px] md:h-[286px] h-[135px] rounded-xl"
                alt=""
                
              />
            
            </div>

            <div className="text-white  flex justify-center items-center flex-col mx-2">
              <Image
                src={dua}
                width={210}
                height={150}
                className="w-[250px] md:w-[382px] md:h-[286px] h-[135px] rounded-xl"
                alt=""
              />
            
            </div>

            <div className="text-white  flex justify-center items-center flex-col mx-2">
              <Image
                src={tiga}
                width={210}
                height={150}
                className="w-[250px] md:w-[382px] md:h-[286px] h-[135px] rounded-xl"
                alt=""
              />
            
            </div>

            <div className="text-white  flex justify-center items-center flex-col mx-2">
              <Image
                src={empat}
                width={210}
                height={150}
                className="w-[250px] md:w-[382px] md:h-[286px] h-[135px] rounded-xl"
                alt=""
              />
            
            </div>

            <div className="text-white  flex justify-center items-center flex-col mx-2">
              <Image
                src={lima}
                width={210}
                height={150}
                className="w-[250px] md:w-[382px] md:h-[286px] h-[135px] rounded-xl"
                alt=""
              />
            
            </div>

           

          </Carousel>
        </div>
      </div>



    </>
  );
}

export default MultipleCarousel;