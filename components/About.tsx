import  profileImg  from '@/public/assets/images/profileImage.png';
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import styles from "../styles/About.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <SectionTitle title="About" titleNo="01." />
      <div className={styles.containerInfo}>
        <div className={styles.leftSide}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            repudiandae dolores magnam ea excepturi deleniti minus reprehenderit
            esse enim explicabo at soluta, dolorem nihil itaque odio delectus
            odit possimus aliquid.
          </p>
          <p>The technologies i have been working :</p>
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
              <Image className={styles.image}src={profileImg} alt="profileImg" />
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}></div>
      </div>
    </section>
  );
}

export default About;
