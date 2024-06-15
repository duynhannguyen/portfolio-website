import { useForm } from "react-hook-form";
import "./ContactForm.css";
import "highlight.js/styles/base16/atelier-sulphurpool.css";
import { useState, useEffect } from "react";
import Highlight from "react-highlight";
import MailAPI from "../../services/mailAPI";
export type FormEmailValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [inputValue, setInputValue] = useState<FormEmailValues | undefined>({
    name: "",
    email: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormEmailValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    const subscription = watch((data) => {
      if (data.email && data.name && data.message) {
        setInputValue({
          name: data.name,
          email: data.email,
          message: data.message,
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const date = new Date();
  const option: {
    weekday: "short" | "long" | "narrow";
    day: "numeric" | "2-digit" | undefined;
    month: "short" | "long" | "narrow";
  } = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = date.toLocaleDateString("en-US", option);

  const onSubmit = async (data: FormEmailValues) => {
    try {
      console.log("data", data);

      await MailAPI.sendMail(data);
    } catch (error) {
      console.log("error", error);
    }
  };

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
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
                {errors.email.type === "pattern" && "Invalid email address "}
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
        <Highlight className="preview-code javascript ">
          {`
  const button = document.querySelector('#sendBtn')

  const message = {
    name: "${inputValue?.name}";
    email: "${inputValue?.email}";
    message: "${inputValue?.message}";
    date: "${formattedDate}"
  }
  button.addEventListener('click', () => {
    form.send(message);
  })

          `}
        </Highlight>
      </div>
    </div>
  );
};

export default ContactForm;
