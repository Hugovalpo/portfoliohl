import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "./SectionTitle";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import tienditech from "@/public/assets/images/tienditech.png";
import apppaciente from "@/public/assets/images/appPaciente.png";
import flyways from "@/public/assets/images/flyways.png";
import websam from "@/public/assets/images/websam.png"
import samartist from "@/public/assets/images/samartist.png";
import { useTranslations } from "next-intl";

function Projects() {

  const t = useTranslations();

  return (
    <section id="projects" className={styles.container}>
      <SectionTitle title={t('title_projects')} titleNo="02." />
      <div className={styles.projectsContainer}>
        {/* start  project one */}
        <div className={styles.project}>
          <a
            className={styles.linkImage}
            href="https://samhrawy.fr"
            target="_blank"
          >
            <div>
              <Image
                className={styles.image}
                src={samartist}
                alt="sam artist"
              />
              <div className={styles.frame1}></div>
            </div>
          </a>
          <div className={styles.projectInfo}>
            <p className={styles.features}>{t("featured_project")}</p>
            <h3 className={styles.projectName}>{t("name_project5")}</h3>
            <p className={styles.description}>
             {t("descrip_project5")}
            </p>
            <ul className={styles.technologies}>
              <li>React</li>
              <li>Next.js</li>
              <li>Chakra Ui</li>
              <li>Api Nextjs</li>
              <li>webservices</li>
            </ul>
            <div className={styles.groupLinks}>
              <a className={styles.link} href="https://samhrawy.com">
                <RxOpenInNewWindow />
              </a>
              {/* <a
                className={styles.link}
                href="https://github.com/Hugovalpo/Tienditech"
              >
                <TbBrandGithub />
              </a> */}
            </div>
          </div>
        </div>
        {/* end  project one */}
        {/* start  project one */}
        <div className={styles.project}>
          <a
            className={styles.linkImage}
            href="https://shs-avocats.fr"
            target="_blank"
          >
            <div>
              <Image
                className={styles.image}
                src={websam}
                alt="Samsara avocat"
              />
              <div className={styles.frame1}></div>
            </div>
          </a>
          <div className={styles.projectInfo}>
            <p className={styles.features}>{t("featured_project")}</p>
            <h3 className={styles.projectName}>{t("name_project4")}</h3>
            <p className={styles.description}>
             {t("descrip_project4")}
            </p>
            <ul className={styles.technologies}>
              <li>React</li>
              <li>Next.js</li>
              <li>Framer motion</li>
              <li>Tailwind</li>
            </ul>
            <div className={styles.groupLinks}>
              <a className={styles.link} href="https://shs-avocats.fr">
                <RxOpenInNewWindow />
              </a>
              {/* <a
                className={styles.link}
                href="https://github.com/Hugovalpo/Tienditech"
              >
                <TbBrandGithub />
              </a> */}
            </div>
          </div>
        </div>
        {/* end  project one */}
        {/* end  project two */}
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
              <div className={styles.frame1}></div>
            </div>
          </a>
          <div className={styles.projectInfo}>
            <p className={styles.features}>{t("featured_project")}</p>
            <h3 className={styles.projectName}>{t("name_project3")}</h3>
            <p className={styles.description}>
             {t("descrip_project3")}
            </p>
            <ul className={styles.technologies}>
              <li>React</li>
              <li>Next.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
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
        {/* end project two */}
        {/* start project three */}
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
              <div className={styles.frame1}></div>
            </div>
          </a>
          <div className={styles.projectInfo}>
            <p className={styles.features}>{t("featured_project")}</p>
            <h3 className={styles.projectName}>
            {t("name_project2")}
            </h3>
            <p className={styles.description}>
            {t("descrip_project2")}
            </p>
            <ul className={styles.technologies}>
              <li>React Native</li>
              <li>React Router</li>
              <li>Axio</li>
              <li>Styled Components</li>
            </ul>
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
        {/* end project three */}
        {/* start project four*/}
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
               <div className={styles.frame1}></div>
            </div>
          </a>
          <div className={styles.projectInfo}>
            <p className={styles.features}>{t("featured_project")}</p>
            <h3 className={styles.projectName}>{t("name_project1")}</h3>
            <p className={styles.description}>
            {t("descrip_project1")}
            </p>
            <ul className={styles.technologies}>
              <li>React Native</li>
              <li>React Router</li>
              <li>Maps</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
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
        {/* end project four */}
      </div>
    </section>
  );
}

export default Projects;
