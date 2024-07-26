import React from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
  return (
    <section className={styles.contactForm}>
      <form className={styles.form}>
        <div className={styles.groupInputBox}>
        <div className={styles.inputBox}>
          <label>Full Name</label>
          <input className={styles.field} type="text" placeholder="Name" />
        </div>
        <div className={styles.inputBox}>
          <label>Email</label>
          <input className={styles.field} type="email" placeholder="Email" />
        </div>
        </div>
        <div className={styles.textBox}>
          <label>Subject</label>
          <textarea className={styles.fieldText} placeholder="Message" rows={1} cols={33} ></textarea>
        </div>
        <div className={styles.textBox}>
          <label>Your Message</label>
          <textarea className={styles.fieldText} placeholder="Message" rows={6} cols={33} ></textarea>
        </div>

        <button className={styles.button} >Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
