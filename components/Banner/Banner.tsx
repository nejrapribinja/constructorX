import { BannerProps } from "@/utils/types";
import Image from "next/image";
import dynamic from "next/dynamic";
const CustomButton = dynamic(() => import("../CustomButton"));

const Banner: React.FC<BannerProps> = ({ text, buttonTitleOne, buttonTitleTwo }) => {
  return (
    <div className="bg-primary lg:py-[143px] md:py-[114px] sm:py-[95px] py-[76px] relative">
      {/* BACKGROUND */}
      <Image
        src="/images/banner/1.svg"
        loading="lazy"
        alt="banner"
        objectFit="cover"
        fill
        objectPosition="100% 50%"
        className="absolute left-0 bottom-0 top-0 max-w-[47%] min-h-[100%] banner-img1"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
      />
      <Image
        src="/images/banner/2.svg"
        loading="lazy"
        width={568}
        height={198}
        alt="banner"
        className="absolute right-0 bottom-0 banner-img2 max-w-[39%]"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
      />
      {/* BANNER CONTENT */}
      <div className="md:px-8 px-4 pb-8 mx-auto max-w-[1248px]" data-aos="fade-up">
        <div className="flex justify-between items-center banner">
          <p className="text-white md:max-w-[502px] max-w-[432px] md:text-[38px] text-[32px] font-semibold leading-[1.421em] z-20">
            {text}
          </p>
          <div className="button-row flex w-full justify-end">
            <CustomButton
              text={buttonTitleOne}
              className="transform button scale-100 hover:scale-95 transition-transform duration-[350ms] text-lg bg-white mr-[26px] py-[24px] px-[44px] text-primary"
            />
            <CustomButton
              text={buttonTitleTwo}
              className="transform scale-100 hover:scale-95 bg-transparent text-lg hover:bg-white transition-all duration-[350ms] ease-in-out border border-solid border-white hover:border-transparent py-[24px] px-[44px] text-white hover:text-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
