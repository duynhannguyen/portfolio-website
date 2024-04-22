import ContentSection from "../contentSection/ContentSection";
import NavigateSection from "../navigateSection/NavigateSection";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="main-section-wrap">
      <NavigateSection />
      <ContentSection />
    </div>
  );
};

export default MainSection;
