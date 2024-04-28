import AboutMe from '../aboutMe/AboutMe';
import Tabbar from '../tabBar/TabBar';
import './ContentSection.css';
const ContentSection = () => {
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
      <div>
        {' '}
        <Tabbar />{' '}
      </div>
      <div className="content-section-wrap">
        <AboutMe />
      </div>
    </>
  );
};

export default ContentSection;
