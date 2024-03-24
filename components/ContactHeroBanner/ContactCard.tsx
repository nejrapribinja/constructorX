import { ContactCard as ContactCardProps } from "@/utils/types";

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  Icon,
  value,
  linkText,
  href,
  className,
  iconClassName,
}) => {
  return title === "divider" ? (
    <div className="home-contact-links-divider"></div>
  ) : (
    <div
      className={`w-full lg:px-[61px] px-[30px] md:pt-10 pt-[33px] md:pb-12 pb-10 hero-contact ${className}`}>
      <div className="flex xl:flex-row md:flex-col flex-row h-full">
        <div
          className={`w-[60px] min-w-[60px] min-h-[60px] max-h-[60px] flex justify-center items-center mr-[18px] mb-[18px] ${iconClassName}`}>
          <Icon className={`w-10 h-10 ${className === "bg-primary" ? "text-primary" : ""}`} />
        </div>
        <div
          className={`flex flex-col justify-between ${
            className === "bg-primary" ? "text-white" : ""
          }`}>
          <h1 className="md:text-2xl text-[22px] font-semibold mb-1">{title}</h1>
          <p className={`text-lg mb-5 ${className === "bg-primary" ? "text-white" : "text-gray"}`}>
            {value}
          </p>
          <a
            href={href}
            target="_blank"
            className={`mt-auto underline font-medium text-lg ${
              className === "bg-white"
                ? "hover:text-primary transition ease-in-out duration-[350ms]"
                : "hover:text-black transition ease-in-out duration-[350ms]"
            }`}>
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
