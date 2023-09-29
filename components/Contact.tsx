import React from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.css";
import SectionTitle from "./SectionTitle";
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <SectionTitle title="Contact Me" titleNo="03." />
      <h2 className={styles.subtitle}>Get in touch</h2>
      <a href="mailto:lillo.hugo@gmail.com">
        <button className={styles.button}>Send Mail</button>
      </a>
    </section>
  );
}

export default Contact;
