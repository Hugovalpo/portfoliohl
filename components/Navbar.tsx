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
import { useState, useRef } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  const ref = useRef<string | any>("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    console.log("href", href);
    const targetId = href.replace(/.*\#/, "");
    console.log("targetid", targetId);
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // Update the class name of the clicked link
    const links = document.querySelectorAll(".Navbar_link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShow(false);
      console.log("qssdds", e.target);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.containerlink}>
          <ul className={styles.rowlink}>
            <Link
              id="#link"
              href="#home"
              onClick={handleScroll}
              className={styles.link}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              id="#link"
              href="#about"
              onClick={handleScroll}
              className={styles.link}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className={styles.span}>01.</span>About
              </motion.li>
            </Link>
            <Link
              id="#link"
              href="#projects"
              onClick={handleScroll}
              className={styles.link}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className={styles.span}>02.</span>Projects{" "}
              </motion.li>
            </Link>
            <Link
              id="#link"
              href="#contact"
              onClick={handleScroll}
              className={styles.link}
            >
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
        {/* POPOVER START HERE */}
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            className={styles.menuContainer}
            onClick={handleClick}
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className={styles.containerClose}
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className={styles.outlineClose}
              />
              <div className={styles.listContainer}>
                <ul className={styles.groupLink}>
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className={styles.link}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="about"
                    onClick={handleScroll}
                    className={styles.link}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className={styles.span}>01.</span>
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="Projects"
                    onClick={handleScroll}
                    className={styles.link}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className={styles.span}>02.</span>
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="Contact"
                    onClick={handleScroll}
                    className={styles.link}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className={styles.span}>03.</span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/hugo_resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, ease: "easeIn" }}
                    className={styles.buttonResume}
                  >
                    Resume
                  </motion.button>
                </a>
              </div>
              <div className={styles.netContainer}>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, ease: "easeIn" }}
                  href="https://github.com/Hugovalpo"
                  target="_blank"
                >
                  <span className={styles.span2}>
                    <TbBrandGithub />
                  </span>
                </motion.a>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.85, ease: "easeIn" }}
                  href="https://www.linkedin.com/in/hugolillou/"
                  target="_blank"
                >
                  <span className={styles.span2}>
                    <SlSocialLinkedin />
                  </span>
                </motion.a>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, ease: "easeIn" }}
                  href="https://www.instagram.com/polarizado_inc/"
                  target="_blank"
                >
                  <span className={styles.span2}>
                    <SlSocialInstagram />
                  </span>
                </motion.a>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.95, ease: "easeIn" }}
                  href="https://www.facebook.com/hugo.lillo1/"
                  target="_blank"
                >
                  <span className={styles.span2}>
                    <SlSocialFacebook />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
