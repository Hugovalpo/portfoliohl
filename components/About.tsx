import profileImg from "@/public/assets/images/profileImage.png";
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
            I am a fullstack web developer with project experience in
            React and Node.js. About a year ago, I made a life-changing decision
            when I discovered my passion for coding. After dedicating eight
            years to my previous career, I took the bold step to transition into
            the world of web development. Now, I am thrilled to be on this
            journey of continuous learning, exploring the intricacies of coding
            and gaining expertise in creating user-friendly and responsive web
            applications using the React ecosystem for the front end and honing
            my skills in back-end development.
          </p>
          <p>The technologies i have been working:</p>
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
