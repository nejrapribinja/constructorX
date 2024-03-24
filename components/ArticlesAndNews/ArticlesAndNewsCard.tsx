import { ArticlesandNewsCardInterface } from "@/utils/types";
import Image from "next/image";

export const ArticlesAndNewsCard: React.FC<ArticlesandNewsCardInterface> = ({
  image,
  title,
  date,
}) => {
  return (
    <div className="flex mb-6 article-card cursor-pointer card-slider overflow-hidden">
      <Image
        alt={title}
        src={image}
        width={204}
        height={155}
        className="mr-5 article-img img-slider"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-textColor text-xl font-semibold mb-[10px] leading-[1.455em]">
          {title}
        </h1>
        <p className="text-gray text-lg">{date}</p>
      </div>
    </div>
  );
};

export default ArticlesAndNewsCard;
