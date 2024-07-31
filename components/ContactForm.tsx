import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const t = useTranslations();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);  // for reCAPTCHA

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name , value} = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!captchaToken) {
      alert("Please complete the reCAPTCHA verification!");
      return;
    }
    // Send the form data to the server
    console.log(formData, captchaToken);
  };

  return (
    <section className={styles.contactForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.groupInputBox}>
          <div className={styles.inputBox}>
            <label>Full Name</label>
            <input
              className={styles.field}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input
              className={styles.field}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.textBox}>
          <label>Subject</label>
          <textarea
            className={styles.fieldText}
            id="subject"
            name="subject"
            placeholder="Subject"
            rows={1}
            cols={33}
            value={formData.subject}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.textBox}>
          <label>Your Message</label>
          <textarea
            className={styles.fieldText}
            id="message"
            name="message"
            placeholder="Message"
            rows={6}
            cols={33}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.captchaContainer}>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_GOOGLE_ReCAPTCHA || ''} // Replace with your reCAPTCHA site key
            onChange={handleCaptchaChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
