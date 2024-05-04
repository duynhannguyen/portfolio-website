import { Dispatch, Key, SetStateAction } from "react";
import { ChildrenType } from "../../constants/constants";
import "./TabBar.css";

export type TabBarProps = {
  tabChildren: ChildrenType[];
  handleCloseTab: (
    key: Key,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  activeFileToShow: (key: Key) => void;
  selectedKey: Key[];
  setSelectdKey: Dispatch<SetStateAction<Key[]>>;
};
const TabBar = ({
  tabChildren,
  handleCloseTab,
  activeFileToShow,
  setSelectdKey,
  selectedKey,
}: TabBarProps) => {
  return (
    <div className="tab-bar-wrap">
      {tabChildren &&
        tabChildren?.map((tabs) => (
          <div
            id={String(tabs.key)}
            key={tabs.key}
            className={` ${
              tabs.isActive ? "active-tab-container" : null
            } tab-container `}
            onClick={() => activeFileToShow(tabs.key)}
          >
            <span>{tabs.title}</span>{" "}
            <button
              type="button"
              onClick={(event) => handleCloseTab(tabs.key, event)}
              className="close-mark"
            >
              &#10006;
            </button>
          </div>
        ))}
    </div>
  );
};

export default TabBar;
