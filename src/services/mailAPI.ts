import { FormEmailValues } from "../components/contactForm/ContactForm";
import api from "./axiosInstance";

const MailAPI = {
  sendMail: (body: FormEmailValues) => {
    const url = "/contact/";
    return api.post(url, body);
  },
};

export default MailAPI;
