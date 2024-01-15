import profileImg from "@/public/assets/images/profileImage.png";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import styles from "../styles/About.module.css";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations();
  return (
    <section id="about" className={styles.container}>
      <SectionTitle title={t("about_title")} titleNo="01." />
      <div className={styles.containerInfo}>
        <div className={styles.leftSide}>
          <p>{t("about_text")}</p>
          <p> {t("about_text2")}</p>
          <ul className={styles.technologies}>
            <li>
              <span className={styles.span}>
                <FaCheck />
              </span>
              JavaScript
            </li>
            <li>
              <span className={styles.span}>
                <FaCheck />
              </span>
              React
            </li>
            <li>
              <span className={styles.span}>
                <FaCheck />
              </span>
              Vue.js
            </li>
            <li>
              <span className={styles.span}>
                <FaCheck />
              </span>
              TypeScript
            </li>
            <li>
              <span className={styles.span}>
                <FaCheck />
              </span>
              MongoDB
            </li>
            <li>
              <span className={styles.span}>
                <FaCheck />
              </span>
              Next.js
            </li>
            <li>
              <span className={styles.span}>
                <FaCheck />
              </span>
              Node.js
            </li>
            <li>
              <span className={styles.span}>
                <FaCheck />
              </span>
              Express.js
            </li>
          </ul>
        </div>
        <div className={styles.firstFrame}>
          <div className={styles.secondFrame}>
            <div className={styles.imageWraper}>
              <Image
                className={styles.image}
                src={profileImg}
                alt="profileImg"
              />
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}></div>
      </div>
    </section>
  );
}

export default About;
