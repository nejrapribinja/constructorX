import { FOOTER_CONTACT_CARD } from "@/utils/content";
import dynamic from "next/dynamic";
const FooterContactCard = dynamic(() => import("./ContactFooterCard"));

const ContactFooterBanner = () => {
  return (
    <div
      className="flex md:flex-row flex-col pt-[30px] pb-[25px] px-[25px] contact-list bg-transparent border border-gray mb-[73px]"
      style={{ boxShadow: "0 5px 18px 0 rgba(46, 46, 46, .03)" }}>
      {FOOTER_CONTACT_CARD.map((card, index) => (
        <FooterContactCard key={index} title={card.title} Icon={card.Icon} value={card.value} />
      ))}
    </div>
  );
};

export default ContactFooterBanner;
