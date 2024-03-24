import dynamic from "next/dynamic";
const Heading = dynamic(() => import("./Heading"));
const ArticlesAndNewsList = dynamic(() => import("./ArticlesAndNewsList"));

const ArticlesAndNews = () => {
  return (
    <div className="bg-white lg:py-[160px] md:py-[120px] py-[90px] overflow-hidden">
      <div
        className="md:px-8 px-4 pb-8 mx-auto max-w-[1248px]"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back">
        <Heading />
        <div className="flex articles">
          <ArticlesAndNewsList />
        </div>
      </div>
    </div>
  );
};

export default ArticlesAndNews;
