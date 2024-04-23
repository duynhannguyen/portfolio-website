import { FaFileCode, FaGamepad, FaUser } from "react-icons/fa6";
import "./ActivityBar.css";

const iconList = [
  { icon: <FaUser title="Personal info" /> },
  { icon: <FaFileCode title="Projects" /> },
  { icon: <FaGamepad title="Hobbies" /> },
];

const ActivityBar = () => {
  return (
    <div className="activity-bar-wrap">
      {iconList.map((item, index) => (
        <div className="icon-element" key={index}>
          {" "}
          {item.icon}{" "}
        </div>
      ))}
    </div>
  );
};

export default ActivityBar;
