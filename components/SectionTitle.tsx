import React from "react";
import styles from "../styles/SectionTitle.module.css";

interface Props {
  title: string;
  titleNo: string;
}

function SectionTitle({ title, titleNo }: Props) {
  return (
    <h2 className={styles.title}>
      <span className={styles.span1}>{titleNo}</span>
      {title}
      <span className={styles.span2}></span>
    </h2>
  );
}

export default SectionTitle;
