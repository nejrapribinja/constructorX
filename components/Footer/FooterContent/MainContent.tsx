import { WHITE_LOGO, TEXT_FOOTER_MAIN } from "@/utils/content";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const SocialMediaIconsList = dynamic(() => import("./SocialMediaIconsList"));

const MainContent = () => {
  return (
    <div className="max-w-[274px] mr-[60px] mb-10">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          loading="lazy"
          src={WHITE_LOGO}
          alt="logo"
          width={271}
          height={37}
          className="transform scale-100 hover:scale-95 transition-transform duration-[350ms] mb-3"
        />
      </Link>
      <p className="text-bgColor text-lg md:mb-[30px] mb-5">{TEXT_FOOTER_MAIN}</p>
      <SocialMediaIconsList />
    </div>
  );
};

export default MainContent;
