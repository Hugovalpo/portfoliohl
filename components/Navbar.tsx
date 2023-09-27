import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.containerlink}>
        <ul className={styles.listlink}>
          <Link href="home" className={styles.link}>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              Home
            </motion.li>
          </Link>
          <Link href="About" className={styles.link}>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <span className={styles.span}>01.</span>About
            </motion.li>
          </Link>
          <Link href="About" className={styles.link}>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <span className={styles.span}>02.</span>Experience
            </motion.li>
          </Link>
          <Link href="About" className={styles.link}>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <span className={styles.span}>03.</span>Projet{" "}
            </motion.li>
          </Link>
          <Link href="About" className={styles.link}>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <span className={styles.span}>03.</span>Contact
            </motion.li>
          </Link>
        </ul>
        <a
          href="/assets/hugo_resume.pdf"
          target="_blank"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, ease: "easeIn" }}
            className={styles.buttonResume}
          >
            Resume
          </motion.button>
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Navbar;
