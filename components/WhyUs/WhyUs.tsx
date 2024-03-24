import dynamic from "next/dynamic";
const WhyUsImageSection = dynamic(() => import("./WhyUsImageSection"));
const WhyUsContent = dynamic(() => import("./WhyUsContent"));

const WhyUs = () => {
  return (
    <div className="flex justify-between items-center md:px-8 px-4 lg:py-[160px] md:py-[120px] py-[90px] mx-auto max-w-[1248px] whyus">
      <div className="relative max-w-[51%] image" data-aos="fade-up">
        <WhyUsImageSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <WhyUsContent />
      </div>
    </div>
  );
};

export default WhyUs;
