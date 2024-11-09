import Arrows from "@/app/images/Arrow`s.png";
import Image from "next/image";
import Phones from "@/app/images/Phones.png";
import SmartWatch from "@/app/images/Smart Watches.png";
import Camera from "@/app/images/Cameras.png";
import HeadPhones from "@/app/images/Headphones.png";
import Computer from "@/app/images/Computers.png";
import Gaming from "@/app/images/Gaming.png";

export default function Categories() {
  return (
    <>
      <div className="sm:w-[1440px] w-[375px] sm:h-[352px] h-[624px] bg-[#Fafafa] sm:px-40 px-4 sm:py-20 py-16 sm:space-y-[32px] ">
        <div className="h-[32px] flex justify-between">
          <div className="text-[24px] font-medium tracking-[.1px]">
            Browse by Category
          </div>

          <div>
            <Image src={Arrows} alt="Arrows"></Image>
          </div>
        </div>

        <div className="sm:w-[1120px] sm:h-[128px] gap-8 sm:flex hidden">
          <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
            <Image
              className="leading-none mt-0 mb-0"
              src={Phones}
              alt="Phones"
            ></Image>
            <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
              Phones
            </p>
          </div>

          <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
            <Image
              className="m-auto"
              src={SmartWatch}
              alt="Smart Watch"
            ></Image>
            <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
              Smart Watches
            </p>
          </div>

          <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
            <Image className="m-auto" src={Camera} alt="Cameras"></Image>
            <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
              Cameras
            </p>
          </div>

          <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
            <Image className="m-auto" src={HeadPhones} alt="Headphones"></Image>
            <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
              Headphones
            </p>
          </div>

          <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
            <Image className="m-auto" src={Computer} alt="Computers"></Image>
            <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
              Computers
            </p>
          </div>

          <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
            <Image className="m-auto" src={Gaming} alt="Gaming"></Image>
            <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
              Gaming
            </p>
          </div>
        </div>

        <div className="w-[343px] h-[416px] gap-4 bg-[#fafafa] mt-12 sm:hidden">
          <div className="flex gap-4">
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
              <Image
                className="leading-none mt-0 mb-0"
                src={Phones}
                alt="Phones"
              ></Image>
              <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
                Phones
              </p>
            </div>

            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
              <Image
                className="m-auto"
                src={SmartWatch}
                alt="Smart Watch"
              ></Image>
              <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
                Smart Watches
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
              <Image className="m-auto" src={Camera} alt="Cameras"></Image>
              <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
                Cameras
              </p>
            </div>

            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
              <Image
                className="m-auto"
                src={HeadPhones}
                alt="Headphones"
              ></Image>
              <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
                Headphones
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
              <Image className="m-auto" src={Computer} alt="Computers"></Image>
              <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
                Computers
              </p>
            </div>

            <div className="w-[160px] h-[128px] bg-[#ededed] rounded-[15px] grid m-0 items-center justify-center ">
              <Image className="m-auto" src={Gaming} alt="Gaming"></Image>
              <p className="text-[16px] font-medium leading-none -mt-8 mb-0">
                Gaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
