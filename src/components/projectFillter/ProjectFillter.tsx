import "./ProjectFillter.css";
import { techList } from "../../constants/constants";

type ProjectFillterProps = {
  fillterOptions: string[];
  getFillter: (options: string) => void;
};

const ProjectFillter = ({
  getFillter,
  fillterOptions,
}: ProjectFillterProps) => {
  return (
    <div>
      {techList.map((tech) => (
        <div key={tech.name} className="fillter-option">
          <input
            type="checkbox"
            id={tech.name}
            checked={fillterOptions.includes(tech.name)}
            onChange={() => getFillter(tech.name)}
          />
          <label htmlFor={tech.name} className="checkbox-label"></label>
          <label htmlFor={tech.name} className="fillter-option-text">
            <div className="frameWork-icon">{tech.icon}</div>
            <span className="frameWork-text">{tech.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProjectFillter;
