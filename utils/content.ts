import { ContactCard, OurServicesCard, PastProjectsCard, TestimonialsCard, FooterContactCard, ArticlesandNewsCardInterface } from "./types";
import { PiPhoneLight, PiEnvelopeSimpleLight, PiListChecks, PiGearSix, PiWall,PiCalendarBlankBold } from "react-icons/pi";
import { CiLocationOn} from "react-icons/ci";
import { LiaScrewdriverSolid, LiaSwatchbookSolid } from "react-icons/lia";
import { RiRuler2Line } from "react-icons/ri";
import { BiLogoWhatsapp, BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoYoutube, BiLogoInstagram } from "react-icons/bi";
{/* HEADER */}
export const LOGO = "images/hero/logo.svg";
export const NAV_LINKS = [
    {
      title: "Home",
      path: "#home",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Services",
      path: "#services",
    },
    {
      title: "Pages",
      path: "#pages",
      subLinks: [{        
          title: "Home",
          path: "#home",
        },
        {
          title: "About",
          path: "#about",
        },
        {
          title: "Services",
          path: "#services",
        },]
    },
];
export const BUTTON_TITLE = "Get a qoute" 

{/* HERO */}
export const HERO_TITLE="We provide effective contracting services"
export const HERO_DESCRIPTION="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis feugiat pharetra quis imperdiet cursus tristique tincidunt non vitae."
export const HERO_BTN_TEXT="Our services"

{/* CONTACT HERO BANNER */}
{/* CARD 1*/}
export const TITLE1_CONTACT = "Call us";
export const PHONE_CONTACT="(323) 238-0682";
{/* CARD 2*/}
export const TITLE2_CONTACT = "Email us";
export const EMAIL_CONTACT="info@constructor.com";
{/* CARD 3*/}
export const TITLE3_CONTACT = "Visit our office";
export const ADDRESS_CONTACT = "149 W 70th St, 9000 Los Angeles, CA"
export const CONTACT_CARD:ContactCard[]=[
  {
    Icon: PiPhoneLight,
    title: TITLE1_CONTACT,
    value: PHONE_CONTACT,
    linkText: "Make us a call",
    href: `tel:${PHONE_CONTACT}`,
    className: "bg-white",
    iconClassName: "text-white bg-primary"
  }, 
  {
    title:"divider"
  },
  {
    Icon: PiEnvelopeSimpleLight,
    title: TITLE2_CONTACT,
    value: EMAIL_CONTACT,
    linkText: "Send us a email",
    href: `mailto: ${EMAIL_CONTACT}`,
    className: "bg-white",
    iconClassName: "text-white bg-primary"
  },
  {
    Icon: CiLocationOn,
    title: TITLE3_CONTACT,
    value: ADDRESS_CONTACT,
    linkText: "See address",
    href: `http://maps.google.com/?q=${ADDRESS_CONTACT}`,
    className: "bg-primary",
    iconClassName: "text-primary bg-white"
  }
]

/* ABOUT US */
export const SUBTITLE_ABOUTUS = "About us";
export const TITLE_ABOUTUS = "A team of reliable and experienced contractors";
export const TEXT_ABOUTUS = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendisse adipiscing diam quis. Et id volutpat sit odio venenatis a dui. Pharetra, quam non, amet pretium tincidunt sem tincidunt fringilla. Convallis ac viverra egestas in bibendum metus, elit. Sagittis lacinia sit."
export const BUTTON_TITLE_ABOUTUS = "About our company";

/* OUR SERVICES */
export const SUBTITLE_OUR_SERVICES = "Our services";
export const TITLE_OUR_SERVICES = "A comprehensive set of services";
/* CARD 1 */
export const IMAGE_OUR_SERVICES1 = "/images/our_services/1.webp";
export const TITLE_OUR_SERVICES_CARD1 = "Project Planning";
export const TEXT_OUR_SERVICES_CARD1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendiss.";
/* CARD 2 */
export const IMAGE_OUR_SERVICES2 = "/images/our_services/2.webp";
export const TITLE_OUR_SERVICES_CARD2 = "Project Managment";
export const TEXT_OUR_SERVICES_CARD2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendiss.";
/* CARD 3 */
export const IMAGE_OUR_SERVICES3 = "/images/our_services/3.webp";
export const TITLE_OUR_SERVICES_CARD3 = "General Contracting";
export const TEXT_OUR_SERVICES_CARD3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendiss.";
/* CARD 4 */
export const IMAGE_OUR_SERVICES4 = "/images/our_services/4.webp";
export const TITLE_OUR_SERVICES_CARD4 = "Interior Design";
export const TEXT_OUR_SERVICES_CARD4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendiss.";
/* LIST */
export const OUR_SERVICES_DATA:OurServicesCard[]=[
  {
    image: IMAGE_OUR_SERVICES1,
    Icon: PiListChecks,
    title: TITLE_OUR_SERVICES_CARD1,
    text: TEXT_OUR_SERVICES_CARD1,
  },
  {
    image: IMAGE_OUR_SERVICES2,
    Icon: PiGearSix,
    title: TITLE_OUR_SERVICES_CARD2,
    text: TEXT_OUR_SERVICES_CARD2
  },
  {
    image: IMAGE_OUR_SERVICES3,
    Icon: LiaScrewdriverSolid,
    title: TITLE_OUR_SERVICES_CARD3,
    text: TEXT_OUR_SERVICES_CARD3
  },
  {
    image: IMAGE_OUR_SERVICES4,
    Icon: LiaSwatchbookSolid,
    title: TITLE_OUR_SERVICES_CARD4,
    text: TEXT_OUR_SERVICES_CARD4
  }
]
export const BUTTON_TITLE_OUR_SERVICES1 = "Get a quote";
export const BUTTON_TITLE_OUR_SERVICES2 = "Browse services";

/* BANNER 1 */
export const TEXT_BANNER1 = "Ready to pull the trigger? Get a quote today.";
export const BUTTON_TITLE_ONE_BANNER1 = "Get a qoute";
export const BUTTON_TITLE_TWO_BANNER1 = "Our services";

/* BANNER 2 */
export const TEXT_BANNER2 = "Ready to pull the trigger? Get a quote today.";
export const BUTTON_TITLE_ONE_BANNER2 = "Get a qoute";
export const BUTTON_TITLE_TWO_BANNER2 = "Our services"

/* WHY US */
export const SUBTITLE_WHY_US = "Why us";
export const TITLE_WHY_US= "An exceptional quality that can't be beaten";
export const TEXT_WHY_US = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam";
export const LIST_WHY_US: string[] = [
  "Over 15 years of experience",
  "200+ successfully executed projects",
  "Exceptional work quality",
];
export const REVIEW_TITLE_WHY_US = "“The project was completed on time, and the result was exceptional”";
export const REVIEW_NAME = "John Carter";
export const REVIEW_CITY = "Los Angeles, CA";

/* PAST PROJECTS */
export const SUBTITLE_PAST_PROJECTS = "Past projects";
export const TITLE_PAST_PROJECTS = "Our project results speak for themselves";
export const BUTTON_TITLE_PAST_PROJECTS1 = "Get a quote";
export const BUTTON_TITLE_PAST_PROJECTS2 = "Browse services";
/* CARD 1 */
export const IMAGE_PAST_PROJECTS1 = "/images/past_projects/1.webp";
export const TITLE_PAST_PROJECTS1 = "Home construction in Malibu Beach, CA";
export const TEXT_PAST_PROJECTS1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendiss.";
export const SERVICE_PAST_PROJECTS1 = "Construction";
export const DATE_PAST_PROJECTS1 = "Sep 2021";
/* CARD 2 */
export const IMAGE_PAST_PROJECTS2 = "/images/past_projects/2.webp";
export const TITLE_PAST_PROJECTS2 = "Kitchen remodeling in Hollywood Hills, CA";
export const TEXT_PAST_PROJECTS2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendiss.";
export const SERVICE_PAST_PROJECTS2 = "Remodeling";
export const DATE_PAST_PROJECTS2 = "Sep 2021";
/* LIST */
export const LIST_PAST_PROJECTS:PastProjectsCard[]=[
  {
    image: IMAGE_PAST_PROJECTS1,
    title: TITLE_PAST_PROJECTS1,
    text: TEXT_PAST_PROJECTS1,
    IconService: RiRuler2Line,
    service: SERVICE_PAST_PROJECTS1,
    IconDate: PiCalendarBlankBold,
    date: DATE_PAST_PROJECTS1,
  },
  {
    image: IMAGE_PAST_PROJECTS2,
    title: TITLE_PAST_PROJECTS2,
    text: TEXT_PAST_PROJECTS2,
    IconService: PiWall,
    service: SERVICE_PAST_PROJECTS2,
    IconDate: PiCalendarBlankBold,
    date: DATE_PAST_PROJECTS2,
  }
]

/* TESTIMONIALS */
export const SUBTITLE_TESTIMONIALS = "Testimonials";
export const TITLE_TESTIMONIALS = "What our clients say about us and our work";
/* CARD 1 */
export const TITLE_TESTIMONIALS1 = "“A true team of expert contractors”";
export const TEXT_TESTIMONIALS1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendisse adipiscing diam quis.";
export const IMAGE_TESTIMONIALS1 = "/images/testimonials/1.webp";
export const NAME_TESTIMONIALS1 = "Sophia Moore";
export const CITY_TESTIMONIALS1 = "Malibu Beach, CA";
/* CARD 2 */
export const TITLE_TESTIMONIALS2 = "“A team that never undelivers”";
export const TEXT_TESTIMONIALS2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendisse adipiscing diam quis.";
export const IMAGE_TESTIMONIALS2 = "/images/testimonials/2.webp";
export const NAME_TESTIMONIALS2 = "Mike Warren";
export const CITY_TESTIMONIALS2 = "Hollywood Hills, CA";
/* CARD 3 */
export const TITLE_TESTIMONIALS3 = "“Great work quality, and delivered on time”";
export const TEXT_TESTIMONIALS3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendisse adipiscing diam quis.";
export const IMAGE_TESTIMONIALS3 = "/images/testimonials/3.webp";
export const NAME_TESTIMONIALS3 = "Lily Woods";
export const CITY_TESTIMONIALS3 = "Los Angeles, CA";
/* LIST */
export const LIST_TESTIMONIALS:TestimonialsCard[]=[
  {
    title: TITLE_TESTIMONIALS1,
    text: TEXT_TESTIMONIALS1,
    image: IMAGE_TESTIMONIALS1,
    name: NAME_TESTIMONIALS1,
    city: CITY_TESTIMONIALS1,
  },
  {
    title: TITLE_TESTIMONIALS2,
    text: TEXT_TESTIMONIALS2,
    image: IMAGE_TESTIMONIALS2,
    name: NAME_TESTIMONIALS2,
    city: CITY_TESTIMONIALS2,
  },
  {
    title: TITLE_TESTIMONIALS3,
    text: TEXT_TESTIMONIALS3,
    image: IMAGE_TESTIMONIALS3,
    name: NAME_TESTIMONIALS3,
    city: CITY_TESTIMONIALS3,
  },
]

/* ARTICLES AND NEWS */
export const TITLE_ARTICLES_AND_NEWS = "Articles & News";
export const BUTTON_TITLE_ARTICLES_AND_NEWS = "Browse Articles";
/* CARD1 */
export const IMAGE_ARTICLES_AND_NEWS1 = "/images/articles_and_news/1.webp";
export const TITLE_ARTICLES_AND_NEWS1 = "12 designers tricks for picking the perfect home color palette";
export const DATE_ARTICLES_AND_NEWS1 = "September 1, 2022";
/* CARD2 */
export const IMAGE_ARTICLES_AND_NEWS2 = "/images/articles_and_news/2.webp";
export const TITLE_ARTICLES_AND_NEWS2 = "Paint trends 2021 - the 17 colors you need for the ultimate wonder walls";
export const DATE_ARTICLES_AND_NEWS2 = "September 1, 2022";
/* CARD3 */
export const IMAGE_ARTICLES_AND_NEWS3 = "/images/articles_and_news/3.webp";
export const TITLE_ARTICLES_AND_NEWS3 = "Clever DIY home improvements you can do during the pandemic";
export const DATE_ARTICLES_AND_NEWS3 = "September 1, 2022";
/* CARD4 */
export const IMAGE_ARTICLES_AND_NEWS4 = "/images/articles_and_news/4.webp";
export const TITLE_ARTICLES_AND_NEWS4 = "15 mind blowing floor designs to make your home look great";
export const DATE_ARTICLES_AND_NEWS4 = "September 1, 2022";
/* LIST */
export const LIST_ARTICLES_AND_NEWS:ArticlesandNewsCardInterface[]=[
  {
    image: IMAGE_ARTICLES_AND_NEWS1,
    title: TITLE_ARTICLES_AND_NEWS1,
    date: DATE_ARTICLES_AND_NEWS1,
  },
  {
    image: IMAGE_ARTICLES_AND_NEWS2,
    title: TITLE_ARTICLES_AND_NEWS2,
    date: DATE_ARTICLES_AND_NEWS2,
  },
  {
    image: IMAGE_ARTICLES_AND_NEWS3,
    title: TITLE_ARTICLES_AND_NEWS3,
    date: DATE_ARTICLES_AND_NEWS3,
  },
  {
    image: IMAGE_ARTICLES_AND_NEWS4,
    title: TITLE_ARTICLES_AND_NEWS4,
    date: DATE_ARTICLES_AND_NEWS4,
  },
]
/* FOOTER */
/* CONTACT BANNER */
export const TITLE2_FOOTER_CONTACT = "Write to us";
export const ADDRESS_FOOTER_CONTACT = "Address";
export const FOOTER_CONTACT_CARD:FooterContactCard[]=[
  {
    Icon: PiPhoneLight,
    title: TITLE1_CONTACT,
    value: PHONE_CONTACT
  }, 
  {
    title: "divider"
  },
  {
    Icon: PiEnvelopeSimpleLight,
    title: TITLE2_FOOTER_CONTACT,
    value: EMAIL_CONTACT,
  },
  {
    title: "divider"
  },
  {
    Icon: CiLocationOn,
    title: ADDRESS_FOOTER_CONTACT,
    value: ADDRESS_CONTACT,
  }
]
/* MAIN CONTENT */
export const WHITE_LOGO = "images/footer/whitelogo.svg";
export const TEXT_FOOTER_MAIN = "Lorem ipsum dolor sit amet,  dolor consectetur adipiscing elit"
/* SOCIAL MEDIA */
export const LIST_SOCIAL_MEDIA_ICONS = [
  { Icon: BiLogoFacebook, name: "Facebook" },
  { Icon: BiLogoTwitter, name: "Twitter" },
  { Icon: BiLogoInstagram, name: "Instagram" },
  { Icon: BiLogoLinkedin, name: "LinkedIn" },
  { Icon: BiLogoYoutube, name: "YouTube" },
  { Icon: BiLogoWhatsapp, name: "WhatsApp" },
]
/* MENU CONTENT */
export const LIST_MENU_FOOTER = [
  { label: "Home" },
  { label: "About" },
  { label: "Services", hasCMS: true },
  { label: "Service Single", hasCMS: true },
  { label: "Shop", hasCMS: true },
  { label: "Single Product", hasCMS: true },
  { label: "Blog", hasCMS: true },
  { label: "Blog Post", hasCMS: true },
  { label: "Projects", hasCMS: true },
  { label: "Project Single", hasCMS: true },
  { label: "Contact" },
]
/* UTILITY PAGES */
export const LIST_UTILITY_PAGES = [
  { label: "Style Guide" },
  { label: "Start Here" },
  { label: "404 Not Found" },
  { label: "Password Protected" },
  { label: "Licenses" },
  { label: "Changelog" },
];
export const COPYRIGHT = "Copyright © Constructor X | Designed by BRIX Templates - Powered by Webflow"