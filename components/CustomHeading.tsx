import { HeadingProps } from "@/utils/types";

const CustomHeading: React.FC<HeadingProps> = ({ subtitle, title, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <h2 className="text-primary text-lg font-semibold md:mb-[15px] mb-[10px] subtitle">
        {subtitle}
      </h2>
      <h1 className="text-textColor mb-6 font-semibold md:text-[38px] text-[32px] heading">
        {title}
      </h1>
    </div>
  );
};

export default CustomHeading;
