import dynamic from "next/dynamic";
/* COMPONENTS */
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
const Hero = dynamic(() => import("@/components/Hero/Hero"));
const ContactHeroBanner = dynamic(() => import("@/components/ContactHeroBanner/ContactHeroBanner"));
const AboutUs = dynamic(() => import("@/components/AboutUs/AboutUs"));
const OurServices = dynamic(() => import("@/components/OurServices/OurServices"));
const Banner = dynamic(() => import("@/components/Banner/Banner"));
const WhyUs = dynamic(() => import("@/components/WhyUs/WhyUs"));
const PastProjects = dynamic(() => import("@/components/PastProjects/PastProjects"));
const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"));
const ArticlesAndNews = dynamic(() => import("@/components/ArticlesAndNews/ArticlesAndNews"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));
/* BANNER PROPS */
import {
  TEXT_BANNER1,
  BUTTON_TITLE_ONE_BANNER1,
  BUTTON_TITLE_TWO_BANNER1,
  TEXT_BANNER2,
  BUTTON_TITLE_ONE_BANNER2,
  BUTTON_TITLE_TWO_BANNER2,
} from "@/utils/content";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ContactHeroBanner />
      <AboutUs />
      <OurServices />
      <Banner
        text={TEXT_BANNER1}
        buttonTitleOne={BUTTON_TITLE_ONE_BANNER1}
        buttonTitleTwo={BUTTON_TITLE_TWO_BANNER1}
      />
      <WhyUs />
      <PastProjects />
      <Testimonials />
      <Banner
        text={TEXT_BANNER2}
        buttonTitleOne={BUTTON_TITLE_ONE_BANNER2}
        buttonTitleTwo={BUTTON_TITLE_TWO_BANNER2}
      />
      <ArticlesAndNews />
      <Footer />
    </main>
  );
}
