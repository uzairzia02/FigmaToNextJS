import Image from "next/image";
import Image1 from "@/app/images/banner2 pics/Group 1.png"
import Image2 from "@/app/images/banner2 pics/Macbook 1.png"
import Image3 from "@/app/images/banner2 pics/image 41.png"
import Image4 from "@/app/images/banner2 pics/image 64.png"



export default function Banner2() {
    return (
      <>
        <div className="w-[1440px] h-[640px] bg-red-100 flex">
          <div className="w-[360px] h-[640px] px-8 bg-white flex justify-center">
            <div className="image">
              <Image src={Image1} alt="1st Image"></Image>
              <p className="text-[33px] font-light text-black">
                Popular Products
              </p>
              <p className="text-[14px] font-medium text-[#909090] mt-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
              </p>
              <button className="border-black rounded-md border-[1px] px-14 py-4 mt-4 ">
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-[360px] h-[640px] px-8 bg-[#f9f9f9] flex justify-center">
            <div className="image">
              <Image src={Image4} alt="1st Image"></Image>
              <p className="text-[33px] font-light text-black mt-[67px]">
                Ipad Pro
              </p>
              <p className="text-[14px] font-medium text-[#909090] mt-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
              </p>
              <button className="border-black rounded-md border-[1px] px-14 py-4 mt-4 ">
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-[360px] h-[640px] px-8 bg-[#eaeaea] flex justify-center">
            <div className="image">
              <Image src={Image3} alt="1st Image"></Image>
              <p className="text-[33px] font-light text-black mt-[72px]">
              Samsung Galaxy 
              </p>
              <p className="text-[14px] font-medium text-[#909090] mt-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
              </p>
              <button className="border-black rounded-md border-[1px] px-14 py-4 mt-4 ">
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-[360px] h-[640px] px-8 bg-[#2c2c2c] flex justify-center">
            <div className="">
              <Image className="h-auto w-[360px] " src={Image2} alt="1st Image"></Image>
              <p className="text-[33px] font-light text-[#ffffff] mt-[60px]  ">
              Macbook Pro
              </p>
              <p className="text-[14px] font-medium text-[#909090] mt-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
              </p>
              <button className="border-white rounded-md border-[1px] px-14 py-4 mt-4 text-white">
                Shop Now
              </button>
            </div>
          </div>

         





        </div>
      </>
    );
}