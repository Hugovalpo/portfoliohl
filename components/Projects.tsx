import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "./SectionTitle";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import tienditech from "@/public/assets/images/tienditech.png";
import apppaciente from "@/public/assets/images/appPaciente.png";
import flyways from "@/public/assets/images/flyways.png";
import morningnews from "@/public/assets/images/morningnews.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <SectionTitle title="Some projects i have done" titleNo="02." />
      <div className={styles.projectsContainer}>
        {/* start  project one */}
        <div className={styles.project}>
          <a
            className={styles.linkImage}
            href="https://tienditech.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className={styles.image}
                src={tienditech}
                alt="tienditech"
              />
            </div>
          </a>
          <div className={styles.projectInfo}>
            <p className={styles.features}>Featured project</p>
            <h3 className={styles.projectName}>Tienditech - fiction e-shop</h3>
            <p className={styles.description}>
              This project was developed for educational purposes. It is a
              fictitious e-commerce website with a library component using MUI
              for responsive design. The frontend is composed of React, React
              Router, Next.js, and the MUI library. The backend is built with
              Express.js and MongoDB.
            </p>
            <div className={styles.groupLinks}>
              <a className={styles.link} href="https://tienditech.vercel.app/">
                <RxOpenInNewWindow />
              </a>
              <a
                className={styles.link}
                href="https://github.com/Hugovalpo/Tienditech"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* end project one */}
        {/* start project two */}
        <div className={styles.project}>
          <a
            className={styles.linkImage}
            href="https://github.com/Hugovalpo/appPaciente"
            target="_blank"
          >
            <div>
              <Image
                className={styles.image}
                src={apppaciente}
                alt="apppaciente"
                height={200}
                width={200}
              />
            </div>
          </a>
          <div className={styles.projectInfo}>
            <p className={styles.features}>Featured project</p>
            <h3 className={styles.projectName}>
              AppPaciente -Hackaton Hosp Eloisa Diaz
            </h3>
            <p className={styles.description}>
              This project was developed for Eloisa Diaz Hospital in Santiago,
              Chile. It's a mobile application designed to fetch user data from
              HL7 standard servers, with functionalities such as authentication
              and user data editing. Technologies used include React Native,
              React Router, and context.
            </p>
            <div className={styles.groupLinks}>
              {/* <a className={styles.link} href="https://tienditech.vercel.app/"><RxOpenInNewWindow/></a> */}
              <a
                className={styles.link}
                href="https://github.com/Hugovalpo/appPaciente"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* end project two */}
        {/* start project three */}
        <div className={styles.project}>
          <a
            className={styles.linkImage}
            href="https://github.com/jossbnd/flyways-frontend"
            target="_blank"
          >
            <div>
              <Image
                className={styles.image}
                src={flyways}
                alt="flyways"
                height={200}
                width={200}
              />
            </div>
          </a>
          <div className={styles.projectInfo}>
            <p className={styles.features}>Featured project</p>
            <h3 className={styles.projectName}>Flyways app</h3>
            <p className={styles.description}>
              This final project was developed within a 10-day timeframe as part
              of a web & mobile developer coding bootcamp at La Capsule. The
              objective was to create a mobile application that connects
              passengers who have recently disembarked from their flights and
              are looking to share a taxi ride with others heading in the same
              direction. This collaborative approach allows them to share the
              fare and reduce their environmental footprint.
            </p>
            <div className={styles.groupLinks}>
              {/* <a className={styles.link} href="https://tienditech.vercel.app/"><RxOpenInNewWindow/></a> */}
              <a
                className={styles.link}
                href="https://github.com/jossbnd/flyways-frontend"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* end project three */}
      </div>
    </section>
  );
}

export default Projects;
