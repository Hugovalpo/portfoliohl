import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import React from "react";
import styles from "../styles/Leftside.module.css";

function Leftside() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cercleContainer}>
        <a href="https://github.com/Hugovalpo" target="_blank">
          <span className={styles.cercle}>
            <TbBrandGithub />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/hugolillou/" target="_blank">
          <span className={styles.cercle}>
            <SlSocialLinkedin />
          </span>
          </a>
          <a href="https://www.instagram.com/polarizado_inc/" target="_blank">
          <span className={styles.cercle}>
            <SlSocialInstagram />
          </span>
          </a>
          <a href="https://www.facebook.com/hugo.lillo1/" target="_blank">
          <span className={styles.cercle}>
            <SlSocialFacebook />
          </span>
          </a>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
}

export default Leftside;
