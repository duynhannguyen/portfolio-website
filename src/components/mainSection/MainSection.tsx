import { useState } from 'react';
import ContentSection from '../contentSection/ContentSection';
import NavigateSection from '../navigateSection/NavigateSection';
import './MainSection.css';
import FolderStructure from '../folderStructure/FolderStructure';

const MainSection = () => {
  const [folderTitle, setFolderTitle] = useState('');
  const clickToFolded = (title: string) => {
    if (folderTitle === title) {
      return setFolderTitle('');
    }
    setFolderTitle(title);
  };

  return (
    <div className="main-section-wrap">
      <NavigateSection
        clickToFolded={clickToFolded}
        folderTitle={folderTitle}
      />
      {folderTitle && <FolderStructure folderTitle={folderTitle} />}
      <div className="content-container">
        <ContentSection />
      </div>
    </div>
  );
};

export default MainSection;
