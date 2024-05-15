import { Dispatch, Fragment, Key, SetStateAction } from "react";
import { ChildrenType } from "../../constants/constants";
import TabBar from "../tabBar/TabBar";
import "./ContentSection.css";

type ContentSectionProps = {
  showTabBar: ChildrenType[];
  activeFileToShow: (key: Key) => void;
  handleCloseTab: (
    key: Key,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  selectedKey: Key[];
  setSelectdKey: Dispatch<SetStateAction<Key[]>>;
  folderTitle: string;
};

const ContentSection = ({
  showTabBar,
  handleCloseTab,
  activeFileToShow,
  setSelectdKey,
  selectedKey,
}: ContentSectionProps) => {
  return (
    <nav>
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
