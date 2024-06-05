import { Key, ReactNode, useState } from "react";
import ContentSection from "../contentSection/ContentSection";
import NavigateSection from "../navigateSection/NavigateSection";
import "./MainSection.css";
import FolderStructure from "../folderStructure/FolderStructure";
import { ChildrenType, mainPage, projectList } from "../../constants/constants";
import WelcomePage from "../welcomePage/WelcomePage";
import Project from "../project/Project";

export type FolderTitleInitState = {
  title: string;
  component: ReactNode;
};

const MainSection = () => {
  const [folderTitle, setFolderTitle] = useState("");
  const [showTabBar, setShowTabBar] = useState<ChildrenType[]>([]);
  const [selectedKey, setSelectdKey] = useState<Key[]>([]);
  const [fillterOptions, setFillterOptions] = useState<string[]>([]);
  const [myProjects, setMyProjects] = useState(projectList);
  console.log("myProjects", myProjects);
  // console.log("showTabBar", showTabBar)
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
    if (key === mainPage.project) {
      setFolderTitle(key);
    }
    setShowTabBar(showOnlyActiveFile);
    setSelectdKey([key]);
  };
  const handleCloseTab = (
    key: Key,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    const currentFileIndex = showTabBar.findIndex((tab) => tab.key === key);
    const lastTabIndex = showTabBar.length - 1 === currentFileIndex;

    if (showTabBar[currentFileIndex].isActive && lastTabIndex) {
      const showLastFile = showTabBar.map((tabs, index) => {
        tabs.isActive = false;
        if (index === showTabBar.length - 2) {
          return { ...tabs, isActive: true };
        }
        return tabs;
      });
      const removeCurrentFile = showLastFile.filter((tab) => tab.key !== key);
      setShowTabBar(removeCurrentFile);
      if (showLastFile.length === 1) {
        return setSelectdKey([]);
      }
      return setSelectdKey([showLastFile[showLastFile.length - 2].key]);
    }
    if (showTabBar[currentFileIndex].isActive && !lastTabIndex) {
      const removeCurrentFile = showTabBar.filter((tab) => tab.key !== key);
      const showLastFile = removeCurrentFile.map((tabs, index) => {
        tabs.isActive = false;
        if (index === removeCurrentFile.length - 1) {
          return { ...tabs, isActive: true };
        }
        return tabs;
      });
      setShowTabBar(showLastFile);
      if (showLastFile.length === 1) {
        return setSelectdKey([]);
      }
      return setSelectdKey([showLastFile[showLastFile.length - 1].key]);
    }
    if (!showTabBar[currentFileIndex].isActive) {
      const closeTab = showTabBar.filter((tab) => tab.key !== key);
      return setShowTabBar(closeTab);
    }
  };

  const getFillter = (option: string) => {
    if (fillterOptions.includes(option)) {
      const exitFillterOptions = fillterOptions.filter(
        (item) => item !== option
      );
      const removeFilterResult = myProjects.filter(
        (project) => !project.projectTag.includes(option)
      );
      setMyProjects(removeFilterResult);
      setFillterOptions(exitFillterOptions);
    } else {
      updateFillterResult(option);
      setFillterOptions((prev) => [...prev, option]);
    }
  };

  const updateFillterResult = (fillterResult: string) => {
    const filtering = projectList.filter((project) =>
      project.projectTag.includes(fillterResult)
    );
    console.log("filtering", filtering);
    setMyProjects(filtering);
  };
  // const updatePropsOfProjectPage = () => {
  //   const duplicateTabBar = [...showTabBar];
  //   const ProjectPageIndex = duplicateTabBar.findIndex((item) => item.isActive);
  //   duplicateTabBar[ProjectPageIndex].component = (
  //     <Project myProjects={myProjects} />
  //   );
  //   console.log("duplicateTabBar", duplicateTabBar);
  // };

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
          setSelectdKey={setSelectdKey}
          selectedKey={selectedKey}
          getFillter={getFillter}
          fillterOptions={fillterOptions}
        />
      )}

      {showTabBar.length === 0 && (
        <section className="welcome-container">
          {" "}
          <WelcomePage />{" "}
        </section>
      )}
      {showTabBar.length > 0 && (
        <section className="content-container">
          <ContentSection
            handleCloseTab={handleCloseTab}
            activeFileToShow={activeFileToShow}
            showTabBar={showTabBar}
            setSelectdKey={setSelectdKey}
            selectedKey={selectedKey}
            folderTitle={folderTitle}
            myProjects={myProjects}
            setShowTabBar={setShowTabBar}
          />
        </section>
      )}
    </div>
  );
};

export default MainSection;
