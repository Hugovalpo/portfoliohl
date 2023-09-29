import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

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
          <Link href="Projects" className={styles.link}>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <span className={styles.span}>02.</span>Projects{" "}
            </motion.li>
          </Link>
          <Link href="About" className={styles.link}>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <span className={styles.span}>03.</span>Contact
            </motion.li>
          </Link>
        </ul>
        <a href="/assets/hugo_resume.pdf" target="_blank">
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
      {/*links group finish here */}
      {/*small icon start here*/}
      <div className={styles.iconMenu} onClick={() => setShow(true)}>
        <span className={styles.iconBar1}></span>
        <span className={styles.iconBar2}></span>
        <span className={styles.iconBar3}></span>
      </div>
      {show && (
          <div
            className={styles.popoverContainer}
          >
          </div>
        )}
      </div>
  );
}

export default Navbar;
