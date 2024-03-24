import { TITLE_ARTICLES_AND_NEWS, BUTTON_TITLE_ARTICLES_AND_NEWS } from "@/utils/content";
import dynamic from "next/dynamic";
const CustomButton = dynamic(() => import("../CustomButton"));

const Heading = () => {
  return (
    <div className="flex justify-between items-center mb-5 articles-heading">
      <h1 className="text-textColor text-[38px] font-semibold mb-7">{TITLE_ARTICLES_AND_NEWS}</h1>
      <CustomButton
        text={BUTTON_TITLE_ARTICLES_AND_NEWS}
        className="mb-7 transform button scale-100 hover:scale-95 bg-transparent text-lg hover:bg-primary transition-all duration-[350ms] ease-in-out border border-solid border-[#b9b9b9] hover:border-transparent py-[24px] px-[44px] text-textColor hover:text-white"
      />
    </div>
  );
};

export default Heading;
