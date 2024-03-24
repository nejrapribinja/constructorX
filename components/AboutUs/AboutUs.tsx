import Image from "next/image";
import dynamic from "next/dynamic";
const AboutUsContent = dynamic(() => import("./AboutUsContent"));

const AboutUs = () => {
  return (
    <div
      className="flex justify-between items-center md:px-8 px-4 lg:py-[160px] md:py-[120px] py-[90px] mx-auto max-w-[1248px] aboutus"
      id="about">
      <div className="flex-1" data-aos="fade-up">
        <AboutUsContent />
      </div>
      <div className="relative max-w-[49%] image" data-aos="fade-up" data-aos-delay="200">
        <Image
          src="/images/about_us/aboutus.webp"
          loading="lazy"
          width={588}
          height={649}
          alt="aboutus"
          className="z-10 relative"
        />
        <div className="bg-primary w-[90%] min-h-[99%] md:-top-7 md:-right-7 -top-4 -right-4 absolute"></div>
      </div>
    </div>
  );
};

export default AboutUs;
