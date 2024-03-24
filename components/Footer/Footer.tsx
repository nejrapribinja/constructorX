import dynamic from "next/dynamic";
const ContactFooterBanner = dynamic(() => import("./ContactFooterBanner/ContactFooterBanner"));
const FooterContent = dynamic(() => import("./FooterContent/FooterContent"));
const FooterBottom = dynamic(() => import("./FooterContentBottom-Copyright/FooterBottom"));

const Footer = () => {
  return (
    <div className="bg-textColor lg:pt-[160px] md:pt-[120px] pt-[90px]">
      <div
        className="md:px-8 px-4 pb-8 mx-auto max-w-[1248px]"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back">
        <ContactFooterBanner />
        <FooterContent />
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
