"use client";
import { useState, useEffect } from "react";
import { SUBTITLE_TESTIMONIALS, TITLE_TESTIMONIALS, LIST_TESTIMONIALS } from "@/utils/content";
import dynamic from "next/dynamic";
const CustomHeading = dynamic(() => import("../CustomHeading"));
const TestimonialCard = dynamic(() => import("./TestimonialCard"));

const Testimonials = () => {
  const firstTestimonial = LIST_TESTIMONIALS[0];
  const restTestimonials = LIST_TESTIMONIALS.slice(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-white lg:py-[160px] md:py-[120px] py-[90px] overflow-hidden">
      <div
        className="md:px-8 px-4 pb-8 mx-auto max-w-[1248px]"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back">
        <div className="flex justify-center items-center relative testimonials">
          <div className="z-20 mr-16 mt-[35px] max-w-[568px] relative self-stretch testimonial-left-section">
            {/* HEADING */}
            <CustomHeading
              subtitle={SUBTITLE_TESTIMONIALS}
              title={TITLE_TESTIMONIALS}
              className="lg:max-w-[511px] testimonial-heading"
            />
            {/* FIRST CARD */}
            {firstTestimonial && (
              <TestimonialCard
                title={firstTestimonial.title}
                text={firstTestimonial.text}
                image={firstTestimonial.image}
                name={firstTestimonial.name}
                city={firstTestimonial.city}
              />
            )}
          </div>
          <div className="z-20 max-w-[568px] relative">
            {/* REMAINING CARDS */}
            {restTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                title={testimonial.title}
                text={testimonial.text}
                image={testimonial.image}
                name={testimonial.name}
                city={testimonial.city}
                className={index == 0 ? "mb-[63px]" : ""}
              />
            ))}
          </div>
          <div
            className="absolute bg-primary w-[34%] min-h-[59%] testimonial-bg"
            style={{
              transform: `translate(${mousePosition.x / 40}px, ${mousePosition.y / 40}px)`,
              transition: "transform 650ms ease-out",
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
