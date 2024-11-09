import Image from "next/image";
import Logo from "@/app/images/footer/Logo Vector.png"
import FBLogo from "@/app/images/footer/Facebook.png"
import Twitter from "@/app/images/footer/Twitter.png"
import Tiktok from "@/app/images/footer/tiktok.png"
import Insta from "@/app/images/footer/Instagram.png"


export default function Footer() {
    return (
        <>
            <div className="w-[1440px] h-[504px]  bg-black px-[160px] py-[104px] grid ">

                <div className="w-[1120px] h-[256px] flex ">
                   <div className="w-[384px] ">
                    <Image src={Logo} alt="Logo"></Image>
                    <p className="text-[14px] font-medium mt-6 text-[#cfcfcf] ">We are a residential interior design firm located in Portland. 
                        Our boutique-studio offers more than</p>
                   </div>

                   <div className="ml-[115px] gap-y-4 grid">
                    <p className="text-[16px] font-semibold text-white gap-y-8" >Services</p>
                    <ul className="gap-y-4 grid text-[#cfcfcf] text-[14px]">
                    <li>Bonus Program</li>
                    <li>Gift cards</li>
                    <li>Credit and payment</li>
                    <li>Service contracts</li>
                    <li>Non-cash account</li>
                    <li>Payment</li>
                    </ul>

                   </div>

                   <div className="ml-[205px] gap-y-4 grid">
                    <p className="text-[16px] font-semibold text-white gap-y-8 ">Assistance to the buyer</p>
                    <ul className="gap-y-4 grid text-[#cfcfcf] text-[14px]">
                    <li>Find an order</li>
                    <li>Terms of delivery</li>
                    <li>Exchange and return of goods</li>
                    <li>Guarantee</li>
                    <li>Frequently asked questions</li>
                    <li>Terms of use of the site</li>
                    </ul>

                   </div>


                </div>

                <div className="w-[173px] h-[16px] flex mt-8 justify-between">
                    <Image src={Twitter} alt="Twitter"></Image>
                    <Image src={FBLogo} alt="Twitter"></Image>
                    <Image src={Tiktok} alt="Tiktok"></Image>
                    <Image src={Insta} alt="Instagram"></Image>

                </div>


            </div>
        
        
        
        </>
    )
}
