import { FooterContactCard as ContactCardProps } from "@/utils/types";

const ContactCard: React.FC<ContactCardProps> = ({ title, Icon, value }) => {
  return title === "divider" ? (
    <div className="footer-contact-links-divider"></div>
  ) : (
    <div className="text-white w-full">
      <div className="flex flex-row  h-full items-center justify-center footer-contact">
        <div className="w-[72px] min-w-[72px] min-h-[72px] max-h-[72px] flex justify-center items-center mr-[22px] my-4 bg-primary cursor-pointer contact-icon-bg">
          <Icon className="w-14 h-14 text-white contact-icon" />
        </div>
        <div className="max-w-[180px] cursor-pointer">
          <h1 className="text-lg font-semibold mb-[6px]">{title}</h1>
          <p className="text-lg">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
