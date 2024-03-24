import { CONTACT_CARD } from "@/utils/content";
import dynamic from "next/dynamic";
const ContactCard = dynamic(() => import("./ContactCard"));

const ContactHeroBanner = () => {
  return (
    <div className="sm:-translate-y-[100px] -translate-y-[50px] md:px-8 px-4 mx-auto max-w-[1248px] contact-banner relative">
      <div
        className="flex md:flex-row flex-col bg-white"
        data-aos="fade-up"
        style={{ boxShadow: "0 5px 18px 0 rgba(46, 46, 46, .03)" }}>
        {CONTACT_CARD.map((card, index) => (
          <ContactCard
            key={index}
            title={card.title}
            Icon={card.Icon}
            value={card.value}
            linkText={card.linkText}
            href={card.href}
            className={card.className}
            iconClassName={card.iconClassName}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactHeroBanner;
