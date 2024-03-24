"use client";
import {
  SUBTITLE_OUR_SERVICES,
  TITLE_OUR_SERVICES,
  BUTTON_TITLE_OUR_SERVICES1,
  BUTTON_TITLE_OUR_SERVICES2,
} from "@/utils/content";
import dynamic from "next/dynamic";
import OurServicesSlider from "./OurServicesSlider";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const CustomHeading = dynamic(() => import("../CustomHeading"));
const Arrow = dynamic(() => import("./Arrow"));
const CustomButton = dynamic(() => import("../CustomButton"));

const OurServices = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [screenWidth]);

  const responsiveSlides = () => {
    if (screenWidth >= 1200) {
      return 2;
    } else if (screenWidth >= 640) {
      return 1.5;
    } else {
      return 1;
    }
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: responsiveSlides(),
      spacing: 15,
    },
  });
  return (
    <div
      className="bg-bgColor lg:py-[160px] md:py-[120px] py-[90px] overflow-hidden"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back">
      <div className="md:px-8 px-4 pb-8 mx-auto max-w-[1248px]" id="services">
        <div className="flex md:justify-between md:items-end justify-start md:flex-row flex-col">
          {/* HEADING */}
          <CustomHeading
            subtitle={SUBTITLE_OUR_SERVICES}
            title={TITLE_OUR_SERVICES}
            className="md:w-[424px]"
          />
          {/* SLIDER ARROWS */}
          <div className="flex sm:mb-9">
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                  disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                />
              </>
            )}
          </div>
        </div>

        {/* SLIDER */}
        <OurServicesSlider sliderRef={sliderRef} />
      </div>
      {/* BUTTONS */}
      <div className="flex w-full justify-center px-4 flex-row button-row">
        <CustomButton
          text={BUTTON_TITLE_OUR_SERVICES1}
          className="transform button scale-100 hover:scale-95 transition-transform duration-[350ms] text-lg bg-primary mr-[26px] py-[24px] px-[44px] text-white"
        />
        <CustomButton
          text={BUTTON_TITLE_OUR_SERVICES2}
          className="transform scale-100 hover:scale-95 bg-transparent text-lg hover:bg-primary transition-all duration-[350ms] ease-in-out border border-solid border-[#b9b9b9] hover:border-transparent py-[24px] px-[44px] text-textColor hover:text-white"
        />
      </div>
    </div>
  );
};

export default OurServices;
