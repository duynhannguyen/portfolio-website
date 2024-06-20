import { FaGithub } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-wrap">
      <div className="header-name">nguyen-duy-nhan</div>
      <a
        href="https://github.com/duynhannguyen"
        target="_blank"
        className="header-contact"
      >
        {" "}
        <FaGithub className="header-contact-icon" />{" "}
      </a>
    </header>
  );
};

export default Header;
