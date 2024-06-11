import { useForm } from "react-hook-form";
import "./ContactForm.css";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.min.css";
import javascript from "highlight.js/lib/languages/javascript";
type FormValues = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [inputValue, setInputValue] = useState<FormValues | undefined>({
    name: "",
    email: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    const subscription = watch((data) =>
      setInputValue({
        name: data.name,
        email: data.email,
        message: data.message,
      })
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.highlightAll();
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };
  const codeRef = useRef(null);
  return (
    <div className="contact-form">
      <div className=" contact-form__submit ">
        <form onSubmit={handleSubmit(onSubmit)} className="form-submit">
          <label className="form-submit__label" htmlFor="name-input">
            _name:
          </label>
          <input
            {...register("name", {
              required: "This input is required",
            })}
            className="form-submit__input"
            placeholder=""
            id="name-input"
            type="text"
            aria-invalid={errors.name ? "true" : "false"}
          />
          <div className="form-submit__error">
            {errors.name && (
              <p className="form-submit__error-text"> {errors.name.message} </p>
            )}
          </div>

          <label className="form-submit__label" htmlFor="email-input">
            _email:
          </label>
          <input
            {...register("email", {
              required: "This input is required",
            })}
            className="form-submit__input"
            placeholder=""
            id="email-input"
            type="text"
          />
          <div className="form-submit__error">
            {errors.email && (
              <p className="form-submit__error-text">
                {" "}
                {errors.email.message}{" "}
              </p>
            )}
          </div>
          <label className="form-submit__label" htmlFor="message-area">
            _message:
          </label>
          <textarea
            {...register("message", {
              required: "This input is required",
            })}
            maxLength={350}
            autoFocus
            className="form-submit__textarea"
          ></textarea>
          <div className="form-submit__error">
            {errors.message && (
              <p className="form-submit__error-text">
                {" "}
                {errors.message.message}{" "}
              </p>
            )}
          </div>
          <button type="submit" className="form-submit__btn">
            <p className="form-submit__btn-text">_Send-message</p>
          </button>
        </form>
      </div>
      <div className="contact-form__preview">
        <pre>
          <code ref={codeRef} className="language-javascript">
            function helloWorld() const a = {inputValue?.email}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ContactForm;
