import { Key, useState } from "react";
import ContentSection from "../contentSection/ContentSection";
import NavigateSection from "../navigateSection/NavigateSection";
import "./MainSection.css";
import FolderStructure from "../folderStructure/FolderStructure";
import { ChildrenType } from "../../constants/constants";

const MainSection = () => {
  const [folderTitle, setFolderTitle] = useState("");
  const [showFile, setShowFile] = useState<Key>("");
  const [showTabBar, setShowTabBar] = useState<ChildrenType[]>([]);
  // console.log("showTabBar", showTabBar);
  const clickToFolded = (title: string) => {
    if (folderTitle === title) {
      return setFolderTitle("");
    }
    setFolderTitle(title);
  };

  return (
    <div className="main-section-wrap">
      <NavigateSection
        clickToFolded={clickToFolded}
        folderTitle={folderTitle}
      />

      {folderTitle && (
        <FolderStructure
          showTabBar={showTabBar}
          setShowTabBar={setShowTabBar}
          folderTitle={folderTitle}
          setShowFile={setShowFile}
        />
      )}

      <div className="content-container">
        <ContentSection showFile={showFile} showTabBar={showTabBar} />
      </div>
    </div>
  );
};

export default MainSection;
