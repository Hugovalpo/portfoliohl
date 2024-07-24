import React from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
  return (
    <section className={styles.contactForm}>
      <form className={styles.form}>
        <div className={styles.groupInputBox}>
        <div className={styles.inputBox}>
          <input className={styles.field} type="text" placeholder="Name" />
        </div>
        <div className={styles.inputBox}>
          <input className={styles.field} type="email" placeholder="Email" />
        </div>
        </div>
        <div className={styles.inputBox}>
          <textarea className={styles.fieldText} placeholder="Message" rows={10} cols={33} ></textarea>
        </div>

        <button>Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
