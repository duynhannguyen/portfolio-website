import { HiCodeBracket, HiComputerDesktop } from "react-icons/hi2";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="project-card-wrap">
      <div className="project-name-section">
        <span className="mark"> // Project: </span>
        <span className="project-title"> _Weather-app </span>
      </div>
      <div className="card-info">
        <div className="card-image-section">
          <img
            className="card-image"
            src="/myLife_light.png"
            alt="project card"
          />
        </div>
        <div className="card-description-section">
          <p className="card-description">
            Searching & watching weather, uv index and air pollution from cities
            all over the world{" "}
          </p>
          <div className="card-button">
            <a
              className="source-code-btn"
              href="https://github.com/duynhannguyen/weather-app"
              target="_blank"
            >
              <HiCodeBracket className="source-code-icon" />
              <span>Source</span>
            </a>
            <a
              className="live-btn"
              href="https://weather-app-xi-sable.vercel.app/"
              target="_blank"
            >
              <HiComputerDesktop className="live-icon" />

              <span>Live </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
