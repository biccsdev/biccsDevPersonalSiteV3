import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

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

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <Layout home>
      <Head>
        <link rel='shortcut icon' href='/home.ico' />
        <title>
          Welcome to the site | lets build software
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
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h1 className={styles.textContainer}>Hi 👋🏽, I'm Victor Torres, a <span className={styles.maskContainer}>SOFTWARE ENGINEER</span> based in Mexico.</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h1 className={styles.textContainer}>If you need a <span className={styles.maskContainer}>DEV</span> who can...</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <h2 className={styles.textContainer}>Design <span className={styles.maskContainer}>solutions</span> for your <span className={styles.maskContainer}>problems</span>...</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <h2 className={styles.textContainer}>Communicate<span className={styles.maskContainer}> effectively</span> and <span className={styles.maskContainer}>take action</span>...</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >

            <h2 className={styles.textContainer}>
              <Animator animation={MoveIn(-1000, 0)}><span className={styles.maskContainer}>Build</span>:</Animator>
              <Animator animation={MoveIn(1000, 0)}>- Apis</Animator>
              <Animator animation={MoveOut(-1000, 0)}>- Websites</Animator>
              <Animator animation={MoveIn(1000, 0)}>- Systems</Animator>
              <Animator animation={MoveIn(1000, 0)}>-  Frontend & Backend</Animator>
            </h2>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <h2 className={styles.textContainer}>
              <Animator animation={MoveOut(-1000, 0)}>- Following <span className={styles.maskContainer}>best practices</span></Animator>
              <Animator animation={MoveOut(-1000, 0)}>and <span className={styles.maskContainer}>well documented</span>...</Animator>
            </h2>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h1 className={styles.textContainer}><span className={styles.maskContainer}>Well</span>...</h1>
            <br />
            <h1 className={styles.textContainer}>
              let's get in touch!
            </h1>
            <div className={styles.buttonsContainer}>
              <button className={styles.button52} role='button'><Link href="/about">About Me</Link></button>
              <button className={styles.button52} role='button'><Link href='/contact'>Contact</Link></button>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Layout>
  )
}
