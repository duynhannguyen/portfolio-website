import { useState } from "react";
import ContentSection from "../contentSection/ContentSection";
import NavigateSection from "../navigateSection/NavigateSection";
import "./MainSection.css";
import FolderStructure from "../folderStructure/FolderStructure";

const MainSection = () => {
  const [showFolderStructure, setShowFolderStructure] = useState(true);

  return (
    <div className="main-section-wrap">
      <NavigateSection
        showFolderStructure={showFolderStructure}
        setShowFolderStructure={setShowFolderStructure}
      />
      {showFolderStructure && <FolderStructure />}
      <div className="content-container">
        <ContentSection />
      </div>
    </div>
  );
};

export default MainSection;
