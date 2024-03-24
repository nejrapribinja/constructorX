import { COPYRIGHT } from "@/utils/content";

const FooterBottom = () => {
  return (
    <div
      className="border-t-[1px] border-t-[#474747] md:mt-[89px] mt-[10px] py-[33px] text-bgColor flex justify-center text-center"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back">
      <p className="px-4 md:text-lg text-base">{COPYRIGHT}</p>
    </div>
  );
};

export default FooterBottom;
