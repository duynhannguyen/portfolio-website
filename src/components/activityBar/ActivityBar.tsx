import { FaFileCode, FaGamepad, FaUser } from 'react-icons/fa6';
import './ActivityBar.css';
import { NavigateSectionProps } from '../navigateSection/NavigateSection';

const iconList = [
  { icon: <FaUser title="Personal info" />, title: 'Personal info' },
  { icon: <FaFileCode title="Projects" />, title: 'Projects' },
  { icon: <FaGamepad title="Hobbies" />, title: 'Hobbies' },
];

type ActivityBarProps = NavigateSectionProps;

const ActivityBar = ({ clickToFolded, folderTitle }: ActivityBarProps) => {
  return (
    <div className="activity-bar-wrap">
      {iconList.map((item, index) => (
        <div
          onClick={() => clickToFolded(item.title)}
          className="icon-element"
          key={index}
        >
          {' '}
          {item.icon}
          {folderTitle === item.title ? (
            <div className="active-icon"></div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ActivityBar;
