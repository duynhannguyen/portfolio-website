import ActivityBar from '../activityBar/ActivityBar';
import './NavigateSection.css';

export type NavigateSectionProps = {
  folderTitle: string;
  clickToFolded: (title: string) => void;
};

const NavigateSection = ({
  clickToFolded,
  folderTitle,
}: NavigateSectionProps) => {
  return (
    <div className="navigate-section-wrap">
      <ActivityBar clickToFolded={clickToFolded} folderTitle={folderTitle} />
    </div>
  );
};

export default NavigateSection;
