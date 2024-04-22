import ActivityBar from "../activityBar/ActivityBar";
import FolderStructure from "../folderStructure/FolderStructure";
import "./NavigateSection.css";
const NavigateSection = () => {
  return (
    <div className="navigate-section-wrap">
      <ActivityBar />
      <FolderStructure />
    </div>
  );
};

export default NavigateSection;
