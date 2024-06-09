import { Dispatch, Fragment, Key, SetStateAction, useEffect } from "react";
import { ChildrenType, mainPage, projectList } from "../../constants/constants";
import TabBar from "../tabBar/TabBar";
import "./ContentSection.css";
import Project from "../project/Project";

type ContentSectionProps = {
  showTabBar: ChildrenType[];
  setShowTabBar: Dispatch<SetStateAction<ChildrenType[]>>;
  activeFileToShow: (key: Key) => void;
  handleCloseTab: (
    key: Key,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  selectedKey: Key[];
  setSelectdKey: Dispatch<SetStateAction<Key[]>>;
  folderTitle: string;
  myProjects: typeof projectList;
};

const ContentSection = ({
  showTabBar,
  handleCloseTab,
  activeFileToShow,
  setSelectdKey,
  selectedKey,
  myProjects,
  setShowTabBar,
}: ContentSectionProps) => {
  const findProjectPageInTabList = showTabBar.find(
    (page) => page.title === mainPage.project
  );

  useEffect(() => {
    if (findProjectPageInTabList) {
      updatePropsOfProjectPage();
    }
  }, [myProjects, findProjectPageInTabList]);
  const updatePropsOfProjectPage = () => {
    const duplicateTabBar = [...showTabBar];
    const ProjectPageIndex = duplicateTabBar.findIndex((item) => item.isActive);
    duplicateTabBar[ProjectPageIndex].component = (
      <Project myProjects={myProjects} />
    );
    setShowTabBar(duplicateTabBar);
  };

  return (
    <nav className="content-section-container">
      <div className="tab-bar-section">
        {" "}
        <TabBar
          tabChildren={showTabBar}
          activeFileToShow={activeFileToShow}
          handleCloseTab={handleCloseTab}
          setSelectdKey={setSelectdKey}
          selectedKey={selectedKey}
        />{" "}
      </div>
      <div className="content-section-wrap">
        {showTabBar.map((file) => {
          if (file.isActive) {
            return <Fragment key={file.key}> {file.component} </Fragment>;
          }
        })}
      </div>
    </nav>
  );
};

export default ContentSection;
