import {
  SUBTITLE_ABOUTUS,
  TITLE_ABOUTUS,
  TEXT_ABOUTUS,
  BUTTON_TITLE_ABOUTUS,
} from "@/utils/content";
import dynamic from "next/dynamic";
const CustomHeading = dynamic(() => import("../CustomHeading"));
const CustomButton = dynamic(() => import("../CustomButton"));

const AboutUsContent = () => {
  return (
    <div className="mr-[30px] max-w-[533px] aboutus-content">
      <CustomHeading subtitle={SUBTITLE_ABOUTUS} title={TITLE_ABOUTUS} />
      <p className="text-gray text-lg mb-[58px]">{TEXT_ABOUTUS}</p>
      <CustomButton
        text={BUTTON_TITLE_ABOUTUS}
        className="transform button scale-100 hover:scale-95 bg-transparent text-lg hover:bg-primary hover:text-white transition-all duration-[350ms] ease-in-out border border-solid border-[#b9b9b9] hover:border-transparent py-[24px] px-[44px] text-textColor"
      />
    </div>
  );
};

export default AboutUsContent;
