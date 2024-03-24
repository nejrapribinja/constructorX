import { REVIEW_TITLE_WHY_US, REVIEW_NAME, REVIEW_CITY } from "@/utils/content";
import Image from "next/image";

const WhyUsImageSection = () => {
  return (
    <>
      <div className="bg-primary w-[82%] min-h-[95%] md:-top-7 md:-left-7 -top-4 -left-4 absolute orange-div"></div>
      <Image
        src="/images/why_us/1.webp"
        loading="lazy"
        width={588}
        height={649}
        alt="whyus"
        className="z-10 relative max-w-[89%] whyus-image"
      />
      <div className="bg-white md:max-w-[72%] max-w-[80%] z-20 absolute right-0 -bottom-8 px-8 md:py-14 py-12 shadow-md bg-gray-100 review">
        <p className="text-xl text-textColor font-semibold mb-3 leading-6">{REVIEW_TITLE_WHY_US}</p>
        <div className="flex items-center">
          <Image
            width={63}
            height={63}
            src="/images/why_us/2.webp"
            alt="review"
            loading="lazy"
            className="rounded-full mr-[15px]"
          />
          <div>
            <p className="text-textColor text-lg font-medium mb-2 leading-[1.125em]">
              {REVIEW_NAME}
            </p>
            <p className="text-primary text-base leading-[1.125em]">{REVIEW_CITY}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsImageSection;
