import Image from "next/image";
import dynamic from "next/dynamic";
const HeroContent = dynamic(() => import("./HeroContent"));

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" id="home">
      <Image
        priority
        src="/images/hero/herobackground.webp"
        alt="hero"
        fill
        objectFit="cover"
        className="backgroundImage"
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
