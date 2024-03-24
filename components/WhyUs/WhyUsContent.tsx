import {
  SUBTITLE_WHY_US,
  TITLE_WHY_US,
  TEXT_WHY_US,
  LIST_WHY_US,
  BUTTON_TITLE,
} from "@/utils/content";
import { FaCheck } from "react-icons/fa";
import dynamic from "next/dynamic";
const CustomHeading = dynamic(() => import("../CustomHeading"));
const CustomButton = dynamic(() => import("../CustomButton"));

const WhyUsContent = () => {
  return (
    <div className="ml-[30px] max-w-[460px] whyus-content">
      <CustomHeading subtitle={SUBTITLE_WHY_US} title={TITLE_WHY_US} className="md:w-[428px]" />
      <p className="text-gray text-lg mb-[33px]">{TEXT_WHY_US}</p>
      <ul className="mb-[56px]">
        {LIST_WHY_US.map((item, index) => (
          <li key={index} className="mb-[18px] text-lg font-semibold text-textColor flex">
            <div className="bg-primary rounded-full flex justify-center items-center mr-[15px] w-[28px] min-w-[28px] min-h-[28px] max-h-[28px]">
              <FaCheck className="w-3 h-3 text-white" />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <CustomButton
        text={BUTTON_TITLE}
        className="transform button scale-100 hover:scale-95 transition-transform duration-[350ms] text-lg bg-primary mr-[26px] py-[24px] px-[44px] text-white"
      />
    </div>
  );
};

export default WhyUsContent;
