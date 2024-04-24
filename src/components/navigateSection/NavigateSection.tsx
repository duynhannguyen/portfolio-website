import { Dispatch, SetStateAction } from "react";
import ActivityBar from "../activityBar/ActivityBar";
import "./NavigateSection.css";

export type NavigateSectionProps = {
  setShowFolderStructure: Dispatch<SetStateAction<boolean>>;
  showFolderStructure: boolean;
};

const NavigateSection = ({
  setShowFolderStructure,
  showFolderStructure,
}: NavigateSectionProps) => {
  return (
    <div className="navigate-section-wrap">
      <ActivityBar
        setShowFolderStructure={setShowFolderStructure}
        showFolderStructure={showFolderStructure}
      />
    </div>
  );
};

export default NavigateSection;
