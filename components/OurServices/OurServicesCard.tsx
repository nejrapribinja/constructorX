import { OurServicesCard } from "@/utils/types";
import Image from "next/image";

const OurServicesCard: React.FC<OurServicesCard> = ({ Icon, title, text, image }) => {
  return (
    <div className="max-w-[572px] overflow-hidden border-x border-x-borderColor border-b-[6px] border-b-primary mt-4 transform hover:translate-y-[5px] duration-300 ease-in-out cursor-pointer card-slider">
      <Image
        src={image}
        alt={title}
        className="img-slider"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={571}
        height={392}
      />
      <div className="md:px-10 px-[35px] md:pb-[65px] pb-[54px] card">
        <div
          className={`md:w-[80px] md:min-w-[80px] md:min-h-[80px] md:max-h-[80px] w-[67px] min-w-[67px] min-h-[67px] max-h-[67px] flex justify-center items-center bg-primary translate-y-[-50%]`}>
          <Icon className={`w-12 h-12 text-white`} />
        </div>
        <h1 className="md:text-2xl text-[22px] font-semibold mb-2">{title}</h1>
        <p className="text-gray text-lg mb-[26px]">{text}</p>
        <div className="leading-[1.111em] max-w-[111px]">
          <p className="text-primary text-lg font-medium">View service</p>
          <div className="bg-[#ed552180] min-h-[1px] line"></div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesCard;
