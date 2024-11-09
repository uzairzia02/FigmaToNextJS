import Like from "@/app/images/Product Images/Like.png"
import Image from "next/image"
import Image1 from "@/app/images/discount Images/Iphone 14 pro 1 (8).png"
import Image2 from "@/app/images/discount Images/Iphone 14 pro 1 (9).png"
import Image3 from "@/app/images/discount Images/Iphone 14 pro 1 (10).png"
import Image4 from "@/app/images/discount Images/Iphone 14 pro 1 (11).png"
import BannerBelow from "@/app/images/discount Images/Banner 2.png"




export default function DiscountProducts () {
    return (
        <>
            <div className="w-[1440px] h-[656px] px-[160px] py-[80px] ">

                <p className="text-[24px] font-medium mb-8 ">Discounts up to -50%

                </p>

                    <div className="w-[1120px] h-[432px] flex gap-4 ">

                        <div className="w-[268px] h-[432px] px-4  py-6 bg-[#f6f6f6] ">
                        
                            <div className="w-[236px] h-[32px] flex justify-end">
                            <Image src={Like} alt="like"></Image>
                            </div>

                            <div className="justify-center flex mt-4">
                                <Image src={Image1} alt="Image1"></Image>
                            </div>

                            <p className="justify-center flex mt-4 items-center text-[16px] font-medium text-center">Apple iPhone 14 Pro 512GB </p>
                            <p className="justify-center flex items-center text-[16px] font-medium text-center">Gold (MQ233)</p>
                            <p className="justify-center flex mt-4 items-center text-[24px] font-semibold tracking-wider text-center">$1437</p>
                            <button className="px-[64px] py-3 border-[2px] border-white bg-black text-white rounded-lg flex justify-center m-auto mt-3 ">
                                Buy Now
                            </button>


                        </div>

                        <div className="w-[268px] h-[432px] px-4  py-6 bg-[#f6f6f6] ">
                        
                        <div className="w-[236px] h-[32px] flex justify-end">
                        <Image src={Like} alt="like"></Image>
                        </div>

                        <div className="justify-center flex mt-4">
                            <Image src={Image2} alt="Image1"></Image>
                        </div>

                        <p className="justify-center flex mt-4 items-center text-[16px] font-medium text-center">AirPods Max Silver</p>
                        <p className="justify-center flex items-center text-[16px] font-medium text-center">Starlight Aluminium </p>
                        <p className="justify-center flex mt-4 items-center text-[24px] font-semibold tracking-wider text-center">$549</p>
                        <button className="px-[64px] py-3 border-[2px] border-white bg-black text-white rounded-lg flex justify-center m-auto mt-3 ">
                            Buy Now
                        </button>


                    </div>

                    <div className="w-[268px] h-[432px] px-4  py-6 bg-[#f6f6f6] ">
                        
                        <div className="w-[236px] h-[32px] flex justify-end">
                        <Image src={Like} alt="like"></Image>
                        </div>

                        <div className="justify-center flex mt-4">
                            <Image src={Image3} alt="Image1"></Image>
                        </div>

                        <p className="justify-center flex mt-4 items-center text-[16px] font-medium text-center">Apple Watch Series 9 GPS  </p>
                        <p className="justify-center flex items-center text-[16px] font-medium text-center">41mm Starlight Aluminium </p>
                        <p className="justify-center flex mt-4 items-center text-[24px] font-semibold tracking-wider text-center">$399</p>
                        <button className="px-[64px] py-3 border-[2px] border-white bg-black text-white rounded-lg flex justify-center m-auto mt-3 ">
                            Buy Now
                        </button>


                    </div>

                    <div className="w-[268px] h-[432px] px-4  py-6 bg-[#f6f6f6] ">
                        
                        <div className="w-[236px] h-[32px] flex justify-end">
                        <Image src={Like} alt="like"></Image>
                        </div>

                        <div className="justify-center flex mt-4">
                            <Image src={Image4} alt="Image1"></Image>
                        </div>

                        <p className="justify-center flex mt-4 items-center text-[16px] font-medium text-center">Apple iPhone 14 Pro 1TB Gold  </p>
                        <p className="justify-center flex items-center text-[16px] font-medium text-center">(MQ2V3)</p>
                        <p className="justify-center flex mt-4 items-center text-[24px] font-semibold tracking-wider text-center">$1499</p>
                        <button className="px-[64px] py-3 border-[2px] border-white bg-black text-white rounded-lg flex justify-center m-auto mt-3 ">
                            Buy Now
                        </button>


                    </div>

                    </div>


         </div>
         <Image className="w-[1440px] h-[448px] mt-0"  src={BannerBelow} alt="below banner"></Image>
        
        
        
        </>
    )
}