import { LIST_ARTICLES_AND_NEWS } from "@/utils/content";
import dynamic from "next/dynamic";
import Image from "next/image";
const ArticlesAndNewsCard = dynamic(() => import("./ArticlesAndNewsCard"));

const ArticlesAndNewsList = () => {
  const firstArticlesAndNews = LIST_ARTICLES_AND_NEWS[0];
  const restArticlesAndNews = LIST_ARTICLES_AND_NEWS.slice(1);
  return (
    <>
      <div className="max-w-[690px] mr-6 left-article">
        {/* FIRST CARD */}
        {firstArticlesAndNews && (
          <div className="card-slider cursor-pointer overflow-hidden">
            <Image
              alt={firstArticlesAndNews.title}
              src={firstArticlesAndNews.image}
              width={690}
              height={328}
              className="mb-[42px] article-frst-img img-slider"
            />
            <h1 className="text-textColor text-[38px] font-semibold mb-[10px]">
              {firstArticlesAndNews.title}
            </h1>
            <p className="text-gray text-lg">{firstArticlesAndNews.date}</p>
          </div>
        )}
      </div>
      <div className="max-w-[486px]">
        {/* REMAINING CARDS */}
        {restArticlesAndNews.map((news, index) => (
          <ArticlesAndNewsCard key={index} image={news.image} title={news.title} date={news.date} />
        ))}
      </div>
    </>
  );
};

export default ArticlesAndNewsList;
