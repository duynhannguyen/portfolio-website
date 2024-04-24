import { FaFileCode, FaGamepad, FaUser } from "react-icons/fa6";
import "./ActivityBar.css";
import { NavigateSectionProps } from "../navigateSection/NavigateSection";

const iconList = [
  { icon: <FaUser title="Personal info" /> },
  { icon: <FaFileCode title="Projects" /> },
  { icon: <FaGamepad title="Hobbies" /> },
];

type ActivityBarProps = NavigateSectionProps;

const ActivityBar = ({
  setShowFolderStructure,
  showFolderStructure,
}: ActivityBarProps) => {
  return (
    <div className="activity-bar-wrap">
      {iconList.map((item, index) => (
        <div
          onClick={() => setShowFolderStructure(!showFolderStructure)}
          className="icon-element"
          key={index}
        >
          {" "}
          {item.icon}{" "}
        </div>
      ))}
    </div>
  );
};

export default ActivityBar;
