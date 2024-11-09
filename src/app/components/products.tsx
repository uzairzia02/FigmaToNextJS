import Image from "next/image";
import Like from "@/app/images/Product Images/Like.png"
import Pic1 from "@/app/images/Product Images/Iphone 14 pro 1.png"
import Pic2 from "@/app/images/Product Images/Iphone 14 pro 1 (1).png"
import Pic3 from "@/app/images/Product Images/Iphone 14 pro 1 (2).png"
import Pic4 from "@/app/images/Product Images/Iphone 14 pro 1 (3).png"
import Pic5 from "@/app/images/Product Images/Iphone 14 pro 1 (4).png"
import Pic6 from "@/app/images/Product Images/Iphone 14 pro 1 (5).png"
import Pic7 from "@/app/images/Product Images/Iphone 14 pro 1 (6).png"
import Pic8 from "@/app/images/Product Images/Iphone 14 pro 1 (7).png"
import RedLike from "@/app/images/Product Images/Red Like.png"




export default function Products() {
    return (
      <>
        <div className=" w-[1440px] h-[1056px] px-[160px] py-[56px] gap-y-8 grid ">
          <div className="w-[1120px] h-[32px] gap-8 flex text-[#8b8b8b] ">
            <p className="text-black font-medium border-b-2 border-black rounded-sm">
              New Arrival
            </p>
            <p className="font-medium">Best Seller</p>
            <p className="font-medium">Featured Products</p>
          </div>

          <div className="w-[1120px] h-[880px] gap-4 grid">
                <div className="w-[1120px] h-[432px] gap-4 flex">                    
                    <div className="w-[268px] h-[432px] px-4 py-6 bg-[#f6f6f6] rounded-[9px] ">
                        <div className="flex justify-end">
                              <Image src={Like} alt="Like"></Image>
                        </div>

                        <div className="flex justify-center mt-4">
                             <Image src={Pic1} alt="IPhone"></Image>
                        </div>
                        <div className="font-medium text-black mt-4 text-[16px] text-center mx-2 ">
                             <p>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                        </div>
                        <div className="text-center mt-2 text-[24px] font-bold tracking-wide ">
                                 $900
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="w-[188px] h-48px bg-black text-white px-16 py-3 text-[14px] rounded-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] px-4 py-6 bg-[#f6f6f6] rounded-[9px] ">
                        <div className="flex justify-end">
                              <Image src={Like} alt="Like"></Image>
                        </div>

                        <div className="flex justify-center mt-4">
                             <Image src={Pic2} alt="Camera"></Image>
                        </div>
                        <div className="font-medium text-black mt-4 text-[16px] text-center mx-2 ">
                             <p>Blackmagic Pocket Cinema Camera 6k </p>
                        </div>
                        <div className="text-center mt-2 text-[24px] font-bold tracking-wide ">
                        $2535
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="w-[188px] h-48px bg-black text-white px-16 py-3 text-[14px] rounded-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    
                    <div className="w-[268px] h-[432px] px-4 py-6 bg-[#f6f6f6] rounded-[9px] ">
                        <div className="flex justify-end">
                              <Image src={Like} alt="Like"></Image>
                        </div>

                        <div className="flex justify-center mt-4">
                             <Image src={Pic3} alt="smart Watch"></Image>
                        </div>
                        <div className="font-medium text-black mt-4 text-[16px] text-center mx-2 ">
                             <p>Apple Watch Series 9 GPS 41mm Starlight Aluminium</p>
                        </div>
                        <div className="text-center mt-2 text-[24px] font-bold tracking-wide ">
                        $399
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="w-[188px] h-48px bg-black text-white px-16 py-3 text-[14px] rounded-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] px-4 py-6 bg-[#f6f6f6] rounded-[9px] ">
                        <div className="flex justify-end">
                              <Image src={Like} alt="Like"></Image>
                        </div>

                        <div className="flex justify-center mt-4">
                             <Image src={Pic4} alt="Airpod"></Image>
                        </div>
                        <div className="font-medium text-black mt-4 text-[16px] text-center mx-2 ">
                             <p>AirPods Max Silver
                             Starlight Aluminium </p>
                        </div>
                        <div className="text-center mt-2 text-[24px] font-bold tracking-wide ">
                        $549
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="w-[188px] h-48px bg-black text-white px-16 py-3 text-[14px] rounded-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[1120px] h-[432px] gap-4 flex">                    
                    <div className="w-[268px] h-[432px] px-4 py-6 bg-[#f6f6f6] rounded-[9px] ">
                        <div className="flex justify-end">
                              <Image src={Like} alt="Like"></Image>
                        </div>

                        <div className="flex justify-center mt-4">
                             <Image src={Pic5} alt="Watch"></Image>
                        </div>
                        <div className="font-medium text-black mt-4 text-[16px] text-center mx-2 ">
                             <p>Samsung Galaxy Watch6 Classic 47mm Black </p>
                        </div>
                        <div className="text-center mt-2 text-[24px] font-bold tracking-wide ">
                        $369
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="w-[188px] h-48px bg-black text-white px-16 py-3 text-[14px] rounded-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] px-4 py-6 bg-[#f6f6f6] rounded-[9px] ">
                        <div className="flex justify-end">
                              <Image src={RedLike} alt="Like"></Image>
                        </div>

                        <div className="flex justify-center mt-4">
                             <Image src={Pic6} alt="Mobile"></Image>
                        </div>
                        <div className="font-medium text-black mt-4 text-[16px] text-center mx-2 ">
                             <p>Galaxy Z Fold5 Unlocked | 256GB | Phantom Black </p>
                        </div>
                        <div className="text-center mt-2 text-[24px] font-bold tracking-wide ">
                        $1799
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="w-[188px] h-48px bg-black text-white px-16 py-3 text-[14px] rounded-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    
                    <div className="w-[268px] h-[432px] px-4 py-6 bg-[#f6f6f6] rounded-[9px] ">
                        <div className="flex justify-end">
                              <Image src={Like} alt="Like"></Image>
                        </div>

                        <div className="flex justify-center mt-4">
                             <Image src={Pic7} alt="Buds"></Image>
                        </div>
                        <div className="font-medium text-black mt-4 text-[16px] text-center mx-2 ">
                             <p>Galaxy Buds FE </p>
                             <p> Graphite</p>
                        </div>
                        <div className="text-center mt-2 text-[24px] font-bold tracking-wide ">
                        $99.99
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="w-[188px] h-48px bg-black text-white px-16 py-3 text-[14px] rounded-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] px-4 py-6 bg-[#f6f6f6] rounded-[9px] ">
                        <div className="flex justify-end">
                              <Image src={Like} alt="Like"></Image>
                        </div>

                        <div className="flex justify-center mt-4">
                             <Image src={Pic8} alt="Airpod"></Image>
                        </div>
                        <div className="font-medium text-black mt-4 text-[16px] text-center mx-2 ">
                             <p>Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021</p>
                        </div>
                        <div className="text-center mt-2 text-[24px] font-bold tracking-wide ">
                        $398
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="w-[188px] h-48px bg-black text-white px-16 py-3 text-[14px] rounded-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                
          </div>
        </div>
      </>
    );
}