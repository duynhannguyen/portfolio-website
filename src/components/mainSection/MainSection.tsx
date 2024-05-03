import { Key, useState } from "react";
import ContentSection from "../contentSection/ContentSection";
import NavigateSection from "../navigateSection/NavigateSection";
import "./MainSection.css";
import FolderStructure from "../folderStructure/FolderStructure";
import { ChildrenType } from "../../constants/constants";

const MainSection = () => {
  const [folderTitle, setFolderTitle] = useState("");
  const [showTabBar, setShowTabBar] = useState<ChildrenType[]>([]);
  console.log("showTabBar", showTabBar);
  const clickToFolded = (title: string) => {
    if (folderTitle === title) {
      return setFolderTitle("");
    }
    setFolderTitle(title);
  };
  const activeFileToShow = (key: Key) => {
    const currentFileIndex = showTabBar.findIndex((tab) => tab.key === key);
    const updateActiveFile = [...showTabBar];
    updateActiveFile[currentFileIndex].isActive = true;
    const showOnlyActiveFile = updateActiveFile.map((tab) => {
      if (tab.key !== key) {
        tab.isActive = false;
      }
      return tab;
    });
    console.log("showOnlyActiveFile", showOnlyActiveFile);
    setShowTabBar(showOnlyActiveFile);
  };
  const handleCloseTab = (
    key: Key,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("close");
    event.stopPropagation();
    const currentFileIndex = showTabBar.findIndex((tab) => tab.key === key);
    if (showTabBar[currentFileIndex].isActive) {
      const showLastFile = showTabBar.map((tabs, index) => {
        tabs.isActive = false;
        if (index === showTabBar.length - 2) {
          return { ...tabs, isActive: true };
        }
        return tabs;
      });
      console.log("showLastFile", showLastFile);
      const removeCurrentFile = showLastFile.filter((tab) => tab.key !== key);
      setShowTabBar(removeCurrentFile);
    } else {
      const closeTab = showTabBar.filter((tab) => tab.key !== key);
      setShowTabBar(closeTab);
    }
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
        />
      )}

      <div className="content-container">
        <ContentSection
          handleCloseTab={handleCloseTab}
          activeFileToShow={activeFileToShow}
          showTabBar={showTabBar}
        />
      </div>
    </div>
  );
};

export default MainSection;
