import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import pfp from '../public/pfp.png'

import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import { useEffect } from 'react';

Home.siteTitle = "";
Home.description = "hi";
Home.faviconUrl = "public/home.ico";
export default function Home() {

  return (
    <Layout home>
      <Head>
        <link rel='shortcut icon' href='/home.ico' />
        <title>
          Welcome to the site | lets build software together
        </title>
        <meta
          name="description"
          content="Latest version of biccsdev's portfolio, find projects, blogs and get in touch | Web Development, Web 3, Javascript, Backend, Frontend "
          key="desc"
        />
        <meta property="og:title" content="Software Engineer portfolio | @biccsdev" />
        <meta
          property="og:description"
          content="Check out my latest projects and articles. Find the links to all my social media. Lets build together!"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
      </Head>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.titleImage}>
            <Image className={styles.myImg} src={pfp} alt="cat with ghost fur" width={250} height={250}></Image>
          </div>
          <h1>Hi, I'm Victor Torres, a Software Engineer based in Mexico.</h1>
        </div>
        <div className={styles.description}>
          <h2>
            If you need to bring new ideas to life...
            Design a solution for your problem...
            Build APIs, websites or systems that follow best practices and are well documented...
          </h2>
        </div>
        <div className={styles.contact}>
          <h1>Lets get in touch!</h1>
          <div className={styles.buttonsContainer}>
            <button className={styles.button54} role='button'><Link href='/contact'>Contact</Link></button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
