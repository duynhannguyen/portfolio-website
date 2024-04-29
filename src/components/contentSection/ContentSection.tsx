import { Fragment, Key } from "react";
import { ChildrenType } from "../../constants/constants";
import TabBar from "../tabBar/TabBar";
import "./ContentSection.css";

type ContentSectionProps = {
  showTabBar: ChildrenType[];
  showFile: Key;
};

const ContentSection = ({ showTabBar, showFile }: ContentSectionProps) => {
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
        <TabBar tabChildren={showTabBar} />{" "}
      </div>
      <div className="content-section-wrap">
        {/* <AboutMe /> */}
        {showTabBar.map((file, index) => {
          if (file.key === showFile) {
            return <Fragment key={index}> {file.component} </Fragment>;
          }
        })}
      </div>
    </>
  );
};

export default ContentSection;
