import "./ActivityBar.css";
import { NavigateSectionProps } from "../navigateSection/NavigateSection";
import { iconList } from "../../constants/constants";

type ActivityBarProps = NavigateSectionProps;

const ActivityBar = ({ clickToFolded, folderTitle }: ActivityBarProps) => {
  return (
    <div className="activity-bar-wrap">
      {iconList.map((item) => (
        <div
          style={
            folderTitle === item.title ? { color: "#ffffffab" } : undefined
          }
          onClick={() => clickToFolded(item.title)}
          className="icon-element"
          key={item.title}
        >
          {" "}
          {item.icon}
          {folderTitle === item.title ? (
            <div className="active-icon "></div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ActivityBar;
