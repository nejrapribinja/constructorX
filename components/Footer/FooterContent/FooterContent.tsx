import dynamic from "next/dynamic";
const MainContent = dynamic(() => import("./MainContent"));
const MenuContent = dynamic(() => import("./MenuContent"));

const FooterContent = () => {
  return (
    <div className="flex justify-between text-white footer-content">
      <MainContent /> <MenuContent />
    </div>
  );
};

export default FooterContent;
