import { TestimonialsCard } from "@/utils/types";
import Image from "next/image";

const TestimonialCard: React.FC<TestimonialsCard> = ({
  title,
  text,
  image,
  name,
  city,
  className,
}) => {
  return (
    <div
      className={`bg-white border border-borderColor pt-[73px] px-12 pb-[66px] shadow-md testimonial-card ${className}`}>
      <h1 className="text-[22px] mb-4 text-textColor font-semibold leading-6">{title}</h1>
      <p className="text-gray text-lg mb-[17px]">{text}</p>
      <div className="flex items-center">
        <Image
          width={63}
          height={63}
          src={image}
          alt="review"
          loading="lazy"
          className="rounded-full mr-[20px]"
        />
        <div>
          <p className="text-textColor text-lg font-semibold mb-2 leading-[1.125em]">{name}</p>
          <p className="text-gray text-lg leading-[1.125em]">{city}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
