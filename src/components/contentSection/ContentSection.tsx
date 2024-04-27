import "./ContentSection.css";
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
    <div className="content-section-wrap">
      <div className="introdution">
        /* In terms of skills, I currently work with JavaScript, React, and
        related tools for front-end development. I'm also actively learning to
        become a full-stack developer in the near future. My approach is
        proactive, focusing on delivering high-quality, reusable code. I take
        initiative in self-learning and keeping up with new technologies. When I
        encounter challenges, I make an effort to find solutions independently
        before seeking help. My goal is to collaborate with a team to create
        tech products, enhance my skills, and contribute to our organization's
        success in meeting market demands. /*
      </div>

      <div className="my-life-obj">
        <img src="/myLife_dark.png" alt="myLife" />
      </div>
    </div>
  );
};

export default ContentSection;
