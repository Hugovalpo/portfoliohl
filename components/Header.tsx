import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Header.module.css";
import { useTranslations } from "next-intl";

function Header() {
  const  t  = useTranslations();


  return (
    <div id="home" className={styles.container}>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={styles.title1}
      >
        {t("header_1")}
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={styles.title2}
      >
        {t("header_2")}
        <span className={styles.title3}>{t("header_3")}</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={styles.text}
      >
        {t("header_text")}
      </motion.p>
    </div>
  );
}

export default Header;
