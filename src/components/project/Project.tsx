import { projectList } from "../../constants/constants";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.css";

type ProjectProps = {
  myProjects: typeof projectList;
};

const Project = ({ myProjects }: ProjectProps) => {
  // console.log("myProjects", myProjects);
  // const getDesiredProject = myProjects.filter((project) => {
  //   const projectTags = project.projectTag;
  //   const findProject = projectTags.find((item) =>
  //     fillterOptions.includes(item.tech)
  //   );
  //   return findProject;
  // });
  // console.log("getDesiredProject", getDesiredProject);

  return (
    <div className="project-wrap">
      {myProjects.map((project, index) => (
        <ProjectCard
          key={index}
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
