import { Fragment, Key } from "react";
import { ChildrenType } from "../../constants/constants";
import TabBar from "../tabBar/TabBar";
import "./ContentSection.css";

type ContentSectionProps = {
  showTabBar: ChildrenType[];
  activeFileToShow: (key: Key) => void;
  handleCloseTab: (
    key: Key,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
};

const ContentSection = ({
  showTabBar,
  handleCloseTab,
  activeFileToShow,
}: ContentSectionProps) => {
  // const myLife = {
  //   name: "Nguyen Duy Nhan",
  //   yearOfBirth: 1999,
  //   address: 'Ho Chi Minh City',
  //   interest: ['learning','coding','reading'],
  //   work: {
  //     jobTitle: 'Web & SoftWare developer',
  //     curentLevel:'INITAL_LEVEL',
  //     getBetter: function(step){
  //       const targetLevel = this.curentLevel + step
  //       while(this.curentLevel < targetLevel){
  //         this.curentLevel ++;
  //         toWork()
  //       }
  //       toWork()
  //       this.getBetter(step)
  //     }
  //   }

  // }
  // myLife.work.getBetter(STEP)
  return (
    <>
      <div className="tab-bar-section">
        {" "}
        <TabBar
          tabChildren={showTabBar}
          activeFileToShow={activeFileToShow}
          handleCloseTab={handleCloseTab}
        />{" "}
      </div>
      <div className="content-section-wrap">
        {showTabBar.map((file) => {
          if (file.isActive) {
            return <Fragment key={file.key}> {file.component} </Fragment>;
          }
        })}
      </div>
    </>
  );
};

export default ContentSection;
