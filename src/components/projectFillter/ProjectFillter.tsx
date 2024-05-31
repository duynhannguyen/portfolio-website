import "./ProjectFillter.css";
import { techList } from "../../constants/constants";

const ProjectFillter = () => {
  return (
    <div>
      {techList.map((tech) => (
        <div className="fillter-option">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="checkbox-label"></label>
          <label htmlFor="checkbox" className="fillter-option-text">
            <div className="frameWork-icon">{tech.icon}</div>
            <span className="frameWork-text">{tech.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProjectFillter;
