import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcomePage-wrap">
      <div className="welcome-content">
        <span className="greeting-title"> Hello, I am </span>
        <span className="author-name"> Nguyen Duy Nhan </span>
        <span className="job-name"> &gt; Front-end Developer </span>
        <div className="oriented-development">
          <span>Front-end</span>
          <span className="gt"> &gt; </span>
          <span>Going to fullstack</span>
        </div>
      </div>
      <div className="welcome-picture">
        <img src="/myLife_dark.png" />
      </div>
    </div>
  );
};

export default WelcomePage;
