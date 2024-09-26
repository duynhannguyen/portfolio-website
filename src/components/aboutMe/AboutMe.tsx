import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-wrap">
      <div className="introdution">
        {/* /* In terms of skills, I currently work with JavaScript, React, and
        related tools for front-end development. I'm also actively learning to
        become a full-stack developer in the near future. My approach is
        proactive, focusing on delivering high-quality, reusable code. I take
        initiative in self-learning and keeping up with new technologies. When I
        encounter challenges, I make an effort to find solutions independently
        before seeking help. My goal is to collaborate with a team to create
        tech products, enhance my skills, and contribute to our organization's
        success in meeting market demands. /* */}
        <details open>
          <summary className="details-summary">
            My education and career before joining this industry.
          </summary>
          <p className="details-contents">
            I am study at the HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY
            (HUTECH), major: garment technology ( 2017 - 2021 ) with GPA: 3.02
            scores. After that i start working as a pattern designer for 1.5
            years
          </p>
        </details>
        <details open>
          <summary className="details-summary">
            How I became a part of this industry.
          </summary>
          <p className="details-contents">
            The first time I know about programming was through a friend who
            asked me to create data. After that time i felt i had found my
            passion. So i started researching it, during my research i found out
            i wanted to become a software engineer. So I took a programming
            course and graduated. Now i continue to learn and improve my skills.
          </p>
        </details>
        <details open>
          <summary className="details-summary">
            My goals for upcoming period{" "}
          </summary>
          <p className="details-contents">
            Aiming for an entry level position to develop my skills further and
            be able to contribute to the team.
          </p>
        </details>
      </div>
      <div className="my-life-obj">
        <img src="/myLife_dark.png" alt="myLife" />
      </div>
    </div>
  );
};

export default AboutMe;
