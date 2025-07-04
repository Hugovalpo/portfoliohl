'use client';

import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import styles from "..//styles/Home.module.css";
import Leftside from "@/components/Leftside";
import About from "@/components/About";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// changing language
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { SlControlPause } from "react-icons/sl";
import Footer from "@/components/Footer";

export default function Home() {
  // const { locales } = useRouter();
  // const t avec la langue choisi
  const t = useTranslations();

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta
          name="description"
          content="Hugo Lillo Web developer JavaScript TypeScript React Next.js Nodejs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hache.ico" />
        <link rel="icon" href="/hache.ico" hrefLang="x-default" />
        <link rel="icon" href="/hache.ico" hrefLang="fr" />
        <link rel="icon" href="/hache.ico" hrefLang="es" />
      </Head>
      <main className={styles.container}>
        <Navbar />
        <div className={styles.body}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className={styles.leftsideContainer}
          >
            <Leftside />
          </motion.div>
          <div className={styles.center}>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
// function for get props of message- langues
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../lang/${locale}.json`)).default,
    },
  };
}
