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
            <h1 className={styles.textContainer}>Hi 👋🏽, I'm Victor Torres, a software engineer based in Mexico.</h1>
            <h1 style={{ fontSize: "30px", color: "#222823" }}>If you need a dev who can...</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <h2 style={{ fontSize: "40px", color: "#222823" }}>Design solutions for your problems...</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <h2 style={{ fontSize: "40px", color: "#222823" }}>Communicate effectively and take action...</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >

            <h2 style={{ fontSize: "40px", color: "#222823" }}>
              <Animator animation={MoveIn(-1000, 0)}>Build:</Animator>
              <Animator animation={MoveIn(1000, 0)}>- Apis</Animator>
              <Animator animation={MoveOut(1000, 0)}>- Tests</Animator>
              <Animator animation={MoveOut(-1000, 0)}>- Websites</Animator>
              <Animator animation={MoveIn(1000, 0)}>- Systems</Animator>
              <Animator animation={MoveIn(1000, 0)}>-  Frontend & Backend</Animator>
              <Animator animation={MoveOut(-1000, 0)}>- Following best practices</Animator>
              <Animator animation={MoveOut(-1000, 0)}>and well documented...</Animator>

            </h2>
            {/* <Animator animation={ZoomInScrollOut}>
              <h2 style={{ fontSize: "40px", color: "#222823" }}>
                Build:
              </h2>
            </Animator>

            <Animator animation={ZoomInScrollOut}>
              <h2 style={{ fontSize: "40px", color: "#222823" }}>
                - Apis
              </h2>
            </Animator>

            <Animator animation={ZoomInScrollOut}>
              <h2 style={{ fontSize: "40px", color: "#222823" }}>
                - Tests
              </h2>
            </Animator>

            <Animator animation={ZoomInScrollOut}>
              <h2 style={{ fontSize: "40px", color: "#222823" }}>
                - Websites
              </h2>
            </Animator>

            <Animator animation={ZoomInScrollOut}>
              <h2 style={{ fontSize: "40px", color: "#222823" }}>
                - Systems
              </h2>
            </Animator>

            <Animator animation={ZoomInScrollOut}>
              <h2 style={{ fontSize: "40px", color: "#222823" }}>
                - Frontend & Backend
                following best practices and well documented...
              </h2>
            </Animator> */}
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h1 style={{ fontSize: "40px", color: "#222823" }}>Well...</h1>
            <br />
            <h1 style={{ fontSize: "30px", color: "#222823" }}>
              let's get in touch!
            </h1>
            <div className={styles.buttonsContainer}>
              <button><Link href="/about">About Me</Link></button>
              <button>Contact</button>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Layout>
  )
}
