import { LIST_SOCIAL_MEDIA_ICONS } from "@/utils/content";

const SocialMediaIconsList = () => {
  return (
    <div className="flex">
      {LIST_SOCIAL_MEDIA_ICONS.map((socialMedia, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-30 w-7 min-w-7 h-7 max-h-7 min-h-7 rounded-full flex justify-center items-center mb-[18px] mr-[18px] hover:bg-primary transition-all duration-[350ms] ease-in-out cursor-pointer">
          <socialMedia.Icon className="w-5 h-5 text-white" />
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIconsList;
