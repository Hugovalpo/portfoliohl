import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div id="home" className={styles.container}>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={styles.title1}
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={styles.title2}
      >
        Hugo Lillo.
        <span className={styles.title3}>I cook code for the web</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={styles.text}
      >
        {" "}
        I am a junior fullstack web developer with projects experience in React
        and Nodejs. I have a strong interest for creating user-friendly and
        responsive web applications using React ecosystem & back-end development
        .{" "}
      </motion.p>
    </div>
  );
}

export default Header;
