import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className=" contact-form__submit ">
        <form className="form-submit">
          <label className="form-submit__label" htmlFor="name-input">
            _name:
          </label>
          <input
            className="form-submit__input"
            placeholder=""
            id="name-input"
            type="text"
            required
          />
          <label className="form-submit__label" htmlFor="email-input">
            _email:
          </label>
          <input
            className="form-submit__input"
            placeholder=""
            id="email-input"
            type="text"
            required
          />
          <label className="form-submit__label" htmlFor="message-area">
            _message:
          </label>
          <textarea autoFocus className="form-submit__textarea"></textarea>
          <button type="submit" className="form-submit__btn">
            <p className="form-submit__btn-text">_Send-message</p>
          </button>
        </form>
      </div>
      <div className="contact-form__preview">preview</div>
    </div>
  );
};

export default ContactForm;
