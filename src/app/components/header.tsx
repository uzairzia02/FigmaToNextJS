import Image from "next/image"
import Logo from "@/app/images/Logo.png"
import Search from "@/app/images/Search.png"
import Heart from "@/app/images/Favorites.png"
import Cart from "@/app/images/Cart1.png"
import Profile from "@/app/images/User.png"
import Burger from "@/app/images/Burger.png"

export default function Header () {
    return (
        <>
        <div className="sm:w-[1440px] w-[375px] h-[88px] sm:px-[160px] px-4 sm:py-4 py-6 flex sm:items-center sm:gap-[8px] justify-between "> 
            
            <div className="sm:w-[65px] sm:h-[23px] ">
                <Image src={Logo} alt="Logo">
                </Image>
            </div>

            <div className="sm:w-[372px] sm:h-[56px] sm:bg-gray-100 sm:p-[16px] sm:flex sm:gap-[8px] sm:rounded-lg hidden">
                <Image src={Search} alt="search">
                </Image>
                <p className="sm:text-gray-500 sm:opacity-50 sm:size-[14px] sm:w-[47px] sm:h-[18px] hidden">Search</p>
            </div>

            <div className="sm:w-[369px] sm:h-[19px] hidden">
                <ul className="flex items-center gap-[52px] text-[16px] ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>

            </div>

            <div className="sm:w-[144px] sm:h-[32px] sm:gap-[24px] sm:flex hidden">
                <Image src={Heart} alt="Heart">
                </Image>
                <Image src={Cart} alt="Cart">
                </Image>
                <Image src={Profile} alt="Profile">
                </Image>
            </div>

            <div className="sw-[144px] h-[32px] gap-[24px] flex sm:hidden">
                <Image src={Burger} alt="Burger">
                </Image>
                </div>

        </div>
        </>
    )
}