import { LIST_UTILITY_PAGES } from "@/utils/content";

const UtilityPages = () => {
  return (
    <div>
      <p className="mb-[15px] text-bgColor font-semibold text-lg">Utility pages</p>
      <ul>
        {LIST_UTILITY_PAGES.map((item, index) => (
          <li key={index} className="mb-4 text-lg">
            <a
              href="/"
              className="cursor-pointer hover:text-primary transition-all duration-[350ms] ease-in-out inline-flex">
              {item.label}
            </a>
          </li>
        ))}
        <li className="text-lg text-primary pb-[6px] mb-4 font-semibold hover:text-white transition-all duration-[350ms] ease-in-out cursor-pointer border-b-[3px] border-b-primary hover:border-b-white inline-flex">
          Browse More Templates
        </li>
      </ul>
    </div>
  );
};

export default UtilityPages;
