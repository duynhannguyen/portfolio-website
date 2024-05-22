import { useState } from "react";
import { projectList } from "../../constants/constants";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.css";
const Project = () => {
  const [myProjects, setMyProjects] = useState(projectList);
  return (
    <div className="project-wrap">
      {myProjects.map((project) => (
        <ProjectCard
          projectName={project.projectName}
          projectImg={project.projectImg}
          projectDescr={project.projectDescr}
          projectLink={project.projectLink}
          projectTag={project.projectTag}
        />
      ))}
    </div>
  );
};

export default Project;
