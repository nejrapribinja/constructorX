import { LIST_PAST_PROJECTS } from "@/utils/content";
import dynamic from "next/dynamic";
const PastProjectCard = dynamic(() => import("./PastProjectCard"));

const PastProjectsList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      {LIST_PAST_PROJECTS.map((card, index) => (
        <PastProjectCard
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
          IconService={card.IconService}
          service={card.service}
          IconDate={card.IconDate}
          date={card.date}
        />
      ))}
    </div>
  );
};

export default PastProjectsList;
