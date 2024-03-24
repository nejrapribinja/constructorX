import { PastProjectsCard } from "@/utils/types";
import Image from "next/image";

const PastProjectCard: React.FC<PastProjectsCard> = ({
  image,
  title,
  text,
  IconService,
  service,
  IconDate,
  date,
}) => {
  return (
    <div className="md:w-[570px] w-full mr-2 md:mb-0 mb-5 border border-borderColor bg-white transform hover:translate-y-[5px] duration-300 ease-in-out cursor-pointer card-slider overflow-hidden">
      <Image
        alt={title}
        width={570}
        height={390}
        src={image}
        loading="lazy"
        className="img-slider md:w-[570px] w-full"
      />
      <div className="px-8 pt-[33px] pb-9 project-content">
        <h1 className="mb-[6px] md:text-2xl text-[22px] text-textColor leading-6 font-semibold">
          {title}
        </h1>
        <p className="text-gray text-lg">{text}</p>
        <div className="bg-borderColor min-h-[1px] w-full mt-[30px] mb-[26px]"></div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <IconService className="text-primary w-6 h-6 mr-2" />
            <p className="text-base font-medium text-textColor leading-5">{service}</p>
          </div>
          <div className="flex items-center">
            <IconDate className="text-primary w-5 h-6 mr-2" />
            <p className="text-base font-medium text-textColor leading-5">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastProjectCard;
