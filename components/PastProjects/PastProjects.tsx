import {
  SUBTITLE_PAST_PROJECTS,
  TITLE_PAST_PROJECTS,
  BUTTON_TITLE_PAST_PROJECTS1,
  BUTTON_TITLE_PAST_PROJECTS2,
} from "@/utils/content";
import dynamic from "next/dynamic";
const CustomHeading = dynamic(() => import("../CustomHeading"));
const CustomButton = dynamic(() => import("../CustomButton"));
const PastProjectsList = dynamic(() => import("./PastProjectsList"));

const PastProjects = () => {
  return (
    <div className="bg-bgColor lg:py-[160px] md:py-[120px] py-[90px]">
      <div
        className="md:px-8 px-4 pb-8 mx-auto max-w-[1248px]"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back">
        <div className="flex justify-between items-end mb-8 past-projects">
          {/* HEADING */}
          <CustomHeading
            subtitle={SUBTITLE_PAST_PROJECTS}
            title={TITLE_PAST_PROJECTS}
            className="xl:max-w-[504px] max-w-[460px]"
          />
          <div className="flex w-full justify-end flex-row button-row mb-7">
            <CustomButton
              text={BUTTON_TITLE_PAST_PROJECTS1}
              className="transform button scale-100 hover:scale-95 transition-transform duration-[350ms] text-lg bg-primary mr-[26px] py-[24px] px-[44px] text-white"
            />
            <CustomButton
              text={BUTTON_TITLE_PAST_PROJECTS2}
              className="transform scale-100 hover:scale-95 bg-transparent text-lg hover:bg-primary transition-all duration-[350ms] ease-in-out border border-solid border-[#b9b9b9] hover:border-transparent py-[24px] px-[44px] text-textColor hover:text-white"
            />
          </div>
        </div>
        {/* PAST PROJECTS LIST */}
        <PastProjectsList />
      </div>
    </div>
  );
};

export default PastProjects;
