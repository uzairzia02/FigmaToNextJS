import PlayStationImage from "@/app/images/PlayStation.png"
import PlayStationResponsiveImage from "@/app/images/PlayStationResponsive.png"
import Airpodresponsive from "@/app/images/hero__gnfk5g59t0qe_xlarge_2x 1.png"
import VisionProresponsive from "@/app/images/Apple vision pro responsive.png"
import Macbookresponsive from "@/app/images/MacBook Pro 14 (1).png"
import Image from "next/image"
import Airpod1 from "@/app/images/Apple Airpod.png"
import Airpod2 from "@/app/images/airpod32.png"
import MacBook from "@/app/images/MacBook Pro 14.png"


export default function SmallerBanners() {
    return (
        <>
        <div className="sm:w-[1440px] w-[375px] sm:h-[600px] h-[1700px] sm:flex grid bg-red-400 ">

            <div className="sm:w-[720px] sm:h-[600px] w-[375px] h-[424px]">

                <div className="sm:w-[720px] w-[376px] sm:h-[328px] h-[424px] bg-white sm:overflow-hidden sm:flex grid items-center sm:p-0 px-4 py-10
                sm:justify-start justify-center ">

                    <Image className="sm:w-[360px] sm:h-[343px] sm:block hidden " src={PlayStationImage} alt="Playstation">

                    </Image>

                    <Image className="w-[200px] h-[200px] sm:hidden block m-auto " src={PlayStationResponsiveImage} alt="Playstation">

</Image>

                    <div className=" w-[338px] h-[128px] grid ">
                        <p className="sm:text-[49px] text-[34px] sm:align-top sm:m-0 m-auto sm:font-semibold " >Playstation <span className="sm:font-semibold font-medium" >5</span></p>
                        <p className="sm:text-[14px] sm:m-0 m-auto sm:text-left text-center sm:font-normal font-medium text-[#909090] ">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>


                    </div>



                </div>

                <div className="w-[375px] h-[376px] bg-[#ededed] m-auto sm:hidden grid justify-center ">
                    <Image className="m-auto " src={Airpodresponsive} alt="airpod responsive"></Image>
                    <p className="text-[34px] font-light text-center " >Apple  AirPods <span className="font-medium"> Max</span></p>
                    <p className="text-[16px] font-medium text-[#909090] -mt-8 text-center " >Computational audio. Listen, it's powerful</p>

                </div>

                <div className="w-[375px] h-[376px] bg-[#353535] m-auto sm:hidden grid justify-center ">
                    <Image className="m-auto " src={VisionProresponsive} alt="airvision pro responsive"></Image>
                    <p className="text-[34px] font-light text-white text-center " >Apple  Vision <span className="font-bold"> Pro</span></p>
                    <p className="text-[16px] font-medium text-[#909090] -mt-8 text-center px-11 " >An immersive way to experience entertainment</p>

                </div>
                
                <div className="w-[375px] h-[524px] bg-[#ededed] m-auto sm:hidden grid justify-center ">
                    <Image className="m-auto " src={Macbookresponsive} alt="Macbook responsive"></Image>
                    <p className="text-[34px] font-medium text-black text-center m-auto " >Macbook <span className="font-light"> Air</span></p>
                    <p className="text-[16px] font-medium text-[#909090] m-auto text-center px-11 " >The new 15‑inch MacBook Air makes room for 
                        more of what you love with a spacious Liquid Retina display.
                    </p>

                    <button className="border-[1px] font-medium border-black rounded-md px-[56px] py-[16px] h-[56px] w-[343px] justify-center m-auto ">
                        Shop Now
                    </button>
                    

                </div>



                <div className="sm:w-[720px] sm:h-[272px] sm:flex hidden ">

                    <div className="w-[360px] h-[272px] bg-[#EDEDED] flex ">
                        <Image src={Airpod1} alt="airpod1">
                        </Image>

                        <div className="h-[143px] w-[160px] grid items-center m-auto ">
                            <p className="text-[29px]">Apple AirPods <span className="font-medium">Max</span> </p>
                            <p className="text-[14px] text-[#909090] font-medium ">Computational audio. Listen, it's powerful</p>

                        </div>

                    </div>

                    <div className="sm:bg-[#353535] sm:w-[360px] sm:h-[272px] sm:flex sm:items-center">
                    <Image className="w-[136px] h-[190px] " src={Airpod2} alt="airpod2">
                    </Image>

                    <div className="h-[144px] w-[160px] grid items-center m-auto ">
                            <p className="text-[29px] text-white">Apple Vision <span className="font-medium">Pro</span> </p>
                            <p className="text-[14px] text-[#909090] font-medium">An immersive way to experience entertainment</p>

                        </div>

                    </div>

                </div>


            </div>

            <div className="sm:w-[720px] sm:h-[600px] sm:bg-[#EDEDED] sm:py-11 sm:flex sm:items-center hidden">

                <div className="pl-[56px] w-[360px] h-[272px] ">
                   
                    <p className="text-[64px] font-thin leading-none mt-0 mb-0 ">Macbook </p>
                    <p className="text-[64px] font-medium leading-none mt-0 mb-4">Air</p>

                    <p className="text-[14px] font-medium text-[#909090] mb-4" >The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>

                    <button className="border-2 border-black w-[191px] h-[56px] px-14 py-[10px] rounded-md ">
                        Shop Now
                    </button>

                </div>
                <Image className="w-[292px] h-[502px] flex items-end justify-end m-auto mr-0 " src={MacBook} alt="Macbook">

                </Image>


            </div>


           


        </div>
        
        
        
        </>
    )
}