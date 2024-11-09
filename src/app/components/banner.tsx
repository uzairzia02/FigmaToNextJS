import Image from "next/image"
import IphoneImage from "@/app/images/Iphone Image.png"
export default function Banner() {
    return (
        <>
        <div className="sm:w-[1440px] w-[375px] sm:h-[632px] h-[769px] bg-black sm:gap-[24px] sm:flex sm:px-[160px] px-4 pt-[88px] 
        sm:pt-0 grid items-center">

            <div className="sm:w-[714px] w-[343px] sm:h-[256px] h-[344px] sm:gap-x-[10px] grid  ">
                <p className="font-semibold opacity-40 text-[25px] text-white sm:text-left text-center leading-normal ">Pro.Beyond.</p>
                <p className="font-thin sm:text-[96px] text-[72px] text-white text-center sm:text-left leading-none sm:">IPhone 14 <span className="sm:font-bold font-semibold">Pro</span></p>
                <p className="font-medium sm:text-[18px] text-[19px] text-[#909090] h-auto sm:text-left text-center ">Created to change everything for the better. For everyone</p>

                <button className="border-white border-[1px] rounded-[6px] w-[191px] h-[56px] px-[56px] py-[15px] text-white text-[16px] sm:mt-7 sm:m-0 mt-[28px] m-auto">
Shop Now

                </button>


            </div>

            <div className="sm:w-[406px] w-[343px] sm:h-[632px] h-[289px] sm:items-end items-start flex sm:mt-0 sm:p-0 pt-9">
                <Image className="object-cover -mt-28" src={IphoneImage} alt="Iphone Image">

                </Image>


            </div>

        </div>
        
        
        </>
    )
}