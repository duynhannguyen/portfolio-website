import { ChildrenType } from "../../constants/constants";
import "./TabBar.css";

export type TabBarProps = {
  tabChildren: ChildrenType[];
};
const TabBar = ({ tabChildren }: TabBarProps) => {
  // const tabLists = [
  //   { title: "About me" },
  //   { title: "Cv" },
  //   { title: "Education" },
  // ];

  return (
    <div className="tab-bar-wrap">
      {tabChildren &&
        tabChildren?.map((tabs, index) => (
          <div key={index} className="tab-container">
            <span>{tabs.title}</span>{" "}
            <span className="close-mark">&#10006;</span>
          </div>
        ))}
    </div>
  );
};

export default TabBar;
