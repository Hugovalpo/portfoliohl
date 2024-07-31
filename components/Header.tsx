import React from "react";
import profileImg from "../public/assets/images/Hugoedit.jpg";
import { motion } from "framer-motion";
import styles from "../styles/Header.module.css";
import { useTranslations } from "next-intl";  
import Image from "next/image";
import { useState } from "react";

function Header() {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }


  const  t  = useTranslations();

  return (
    <div id="home" className={styles.container}>
      <div className={styles.sectionInfo}>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={styles.title1}
      >
        {t("header_1")}  {/* "hi , my name is ..." */}
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={styles.title2}
      >
        {t("header_2")} {/* "HUGO LILLO" */}
        <span className={styles.title3}>{t("header_3")}{/* " I cook code for the web" */}</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={styles.text}
      >
        {t("header_text")} {/* " i am a fullstack..." */}
      </motion.p>
      </div>
      <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
           className={styles.firstFrame}>
          <div className={styles.secondFrame}>
            <div className={styles.imageWraper}>
              <Image
                className={styles.image}
                src={profileImg}
                alt="profileImg"
              />
              <div className={styles.frame1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            </div>
          </div>
          <div className={isHover?styles.frame2h: styles.frame2}></div>
        </motion.div>
    </div>
    
    
  );
}

export default Header;
