import { useForm } from "react-hook-form";
import "./ContactForm.css";
import "highlight.js/styles/base16/atelier-sulphurpool.css";
import { useState, useEffect } from "react";
import Highlight from "react-highlight";
import MailAPI from "../../services/mailAPI";
import Loading from "../loading/Loading";
export type FormEmailValues = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [inputValue, setInputValue] = useState<FormEmailValues | undefined>({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState("");
  const [sendMailStatus, setSendMailStatus] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormEmailValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    const subscription = watch((data) => {
      setInputValue({
        name: data.name,
        email: data.email,
        message: data.message,
      });
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
    const timeout = setTimeout(() => {
      setSendMailStatus("Delayed");
    }, 20000);
    try {
      setFormError("");
      setSendMailStatus("");
      const sendMail = await MailAPI.sendMail(data);
      if (sendMail.status === 200) {
        setSendMailStatus("Success");
      }
      if (sendMail.status !== 200) {
        throw new Error(sendMail.data);
      }
    } catch (error) {
      console.log("error", error);
      if (error instanceof Error) {
        const stringifyError = String(error);
        setFormError(stringifyError);
        clearTimeout(timeout);
      }
    } finally {
      reset();
      clearTimeout(timeout);
      setSendMailStatus("Success");
    }
  };

  return (
    <div className="contact-form">
      <div className=" contact-form__submit ">
        {sendMailStatus === "Success" ? (
          <div className="email-noti">
            <h3 className="email-noti-title">Thank you!&#x1F918; </h3>
            <p className="email-noti-message">
              {" "}
              Your message has been send. I will reply as soon as possiable I
              can !
            </p>
            <button
              type="button"
              onClick={() => {
                setSendMailStatus("");
              }}
              className="email-noti-btn"
            >
              send-new-message
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit(onSubmit)} className="form-submit">
              {formError && (
                <span className="form-submit__error-text"> {formError} </span>
              )}
              {sendMailStatus === "Delayed" && (
                <span className="form-submit__error-text__warning">
                  {" "}
                  This response is taking longer than normal, please wait
                  &#128549;{" "}
                </span>
              )}
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
                  <p className="form-submit__error-text">
                    {" "}
                    {errors.name.message}{" "}
                  </p>
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
                    {errors.email.type === "pattern" &&
                      "Invalid email address "}
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
                <div className="form-submit__btn-text">
                  {isSubmitting ? <Loading /> : "_Send-message"}
                </div>
              </button>
            </form>
          </>
        )}
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
