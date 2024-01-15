'use client';

import React from "react";
import { SlGlobe } from "react-icons/sl";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import styles from "../styles/MenuLanguage.module.css";
import Flags from "./Flags";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";


function MenuLanguage() {
  const [menuShow, setMenuShow] = useState<boolean>();
  const { locales, locale, pathname, query, asPath} = useRouter();
  

  let menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  const toggleMapVisibility = () => {
    setMenuShow(!menuShow);
  };

  // const changeLanguage = (code: string) => {
  //   const lang = code;
  //   router.push(pathname, lang );
  // };

  const languages = ["gb", "es", "fr"];
  //   const { t } = useTranslations();

  return (
    <div className={styles.container} onClick={() => toggleMapVisibility()}>
      <span className={styles.globe}>
        <SlGlobe />
      </span>
      {/* {menuShow && ( */}
      <motion.div
        ref={menuRef}
        className={styles.menu}
        //   initial={{ y: -10, opacity: 0 }}
        //   animate={{ y: 0, opacity: 1 }}
        //   transition={{ duration: 0.3, delay: 0.2 }}
        animate={menuShow ? "open" : "closed"}
        variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 0 } }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {languages.map((code) => {
          return (
            <Link href={{pathname, query}}
            key={code} as={asPath} locale={code ==="gb"?"en":code}>
            <Flags
              key={code==="gb"?"en":code}
              code={code}
              // changeLanguage={changeLanguage}
            ></Flags></Link>
            
          );
        })}
      </motion.div>
      {/* )} */}
    </div>
  );
}

export default MenuLanguage;
