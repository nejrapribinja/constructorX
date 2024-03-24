import "keen-slider/keen-slider.min.css";
import { OUR_SERVICES_DATA } from "@/utils/content";
import dynamic from "next/dynamic";
const OurServicesCard = dynamic(() => import("./OurServicesCard"));

interface SliderProps {
  sliderRef: any;
}

const OurServicesSlider: React.FC<SliderProps> = ({ sliderRef }) => {
  return (
    <div ref={sliderRef} className="keen-slider">
      {OUR_SERVICES_DATA.map((service, index) => (
        <div className="keen-slider__slide pb-2" key={index}>
          <OurServicesCard
            image={service.image}
            Icon={service.Icon}
            title={service.title}
            text={service.text}
          />
        </div>
      ))}
    </div>
  );
};

export default OurServicesSlider;
