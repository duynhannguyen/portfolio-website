import { projectList } from "../../constants/constants";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.css";

type ProjectProps = {
  myProjects: typeof projectList;
};

const Project = ({ myProjects }: ProjectProps) => {
  return (
    <div className="project-wrap">
      {myProjects.map((project, index) => (
        <div key={index}>
          <ProjectCard
            projectName={project.projectName}
            projectImg={project.projectImg}
            projectDescr={project.projectDescr}
            projectLink={project.projectLink}
            projectTag={project.projectTag}
          />
        </div>
      ))}
    </div>
  );
};

export default Project;
