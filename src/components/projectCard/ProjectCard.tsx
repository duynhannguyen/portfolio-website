import { projectList } from "../../constants/constants";
import "./ProjectCard.css";
import { FaCode, FaLaptop } from "react-icons/fa6";

type ProjectCardProps = (typeof projectList)[0];

const ProjectCard = ({
  projectName,
  projectImg,
  projectDescr,
  projectLink,
  projectTag,
}: ProjectCardProps) => {
  return (
    <div className="project-card-wrap">
      <div className="project-name-section">
        <span className="mark"> // Project: </span>
        <span className="project-title"> {projectName} </span>
      </div>
      <div className="card-info">
        <div className="card-image-section">
          <img
            className="card-image"
            src={projectImg.front}
            alt="project card"
          />
          <img
            className="card-image"
            src={projectImg.back}
            alt="project card"
          />
        </div>
        <div className="card-description-section">
          <p className="card-description">{projectDescr}</p>
          <div className="card-button">
            <a
              className="source-code-btn"
              href={projectLink.gitHub}
              target="_blank"
            >
              <FaCode className="source-code-icon" />
              <span>Source</span>
            </a>
            <a className="live-btn" href={projectLink.live} target="_blank">
              <FaLaptop className="live-icon" />

              <span>Live </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
