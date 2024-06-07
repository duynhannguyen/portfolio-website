import { IoIosMail } from "react-icons/io";
import "./ContactSection.css";
import { IoPhonePortrait } from "react-icons/io5";

const ContactSection = () => {
  return (
    <section>
      <div className="contact">
        <p className=" contact__line">
          <IoIosMail className="contact__icon" />
          <span className="contact__text">duynhannguyenn@gmail.com </span>
        </p>
        <p className=" contact__line">
          <IoPhonePortrait className="contact__icon" />
          <span className="contact__text"> (+84)905862741 </span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
