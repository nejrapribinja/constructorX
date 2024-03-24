import { LIST_MENU_FOOTER } from "@/utils/content";
import dynamic from "next/dynamic";
const UtilityPages = dynamic(() => import("./UtilityPages"));

const MenuContent = () => {
  const firstSixItems = LIST_MENU_FOOTER.slice(0, 6);
  const restOfItems = LIST_MENU_FOOTER.slice(6);
  return (
    <div className="flex justify-between max-w-[789px] w-[100%] menu-content">
      <div className="max-w-[490px] mr-10 w-[100%] menu-pages">
        <p className="mb-[15px] text-bgColor font-semibold text-lg">Menu</p>
        <div className="flex justify-between text-bgColor menu-list">
          <ul>
            {firstSixItems.map((item, index) => (
              <li key={index} className="mb-4 text-lg">
                <a
                  href="/"
                  className="cursor-pointer hover:text-primary transition-all duration-[350ms] ease-in-out inline-flex">
                  {item.label}
                  {item.hasCMS && (
                    <span className="text-[#fdf1ed] bg-primary text-xs font-semibold px-2 py-[5px] ml-[14px]">
                      CMS
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {restOfItems.map((item, index) => (
              <li key={index} className="mb-4 text-lg">
                <a
                  href="/"
                  className="cursor-pointer hover:text-primary transition-all duration-[350ms] ease-in-out inline-flex">
                  {item.label}
                  {item.hasCMS && (
                    <span className="text-[#fdf1ed] bg-primary text-xs font-semibold px-2 py-[5px] ml-[14px]">
                      CMS
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <UtilityPages />
    </div>
  );
};

export default MenuContent;
