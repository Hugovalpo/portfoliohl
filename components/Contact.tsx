import React from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.css";
import SectionTitle from "./SectionTitle";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import Form from "./Form";

function Contact() {
  const t = useTranslations();

  return (
    <section id="contact" className={styles.container}>
      <SectionTitle title={t("title_contact")} titleNo="03." />
      <h2 className={styles.subtitle}>{t("text_contact")}</h2>
      <ContactForm/>
      {/* <a href="mailto:lillo.hugo@gmail.com">
        <button className={styles.button}>Send Mail</button>
      </a> */}
    </section>
  );
}

export default Contact;
