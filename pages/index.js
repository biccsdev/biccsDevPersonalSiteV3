import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

Home.siteTitle = "";
Home.description = "hi";
Home.faviconUrl = "public/home.ico";
export default function Home() {
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
      </Head>
      <div className={styles.bodyContainer}>
        <div className={styles.sectionContainer}>
          <h1>Are you looking for a dev who?</h1>
        </div>

        <div className={styles.textContainer}>
          <div className={styles.sectionContainer}>
            <h2>Brings new ideas to life...</h2>
          </div>

          <div className={styles.sectionContainer}>
            <h2>Designs solutions for your problems...</h2>
          </div>

          <div className={styles.sectionContainer}>
            <h2>Builds APIs, Websites and systems that follow best practices and are well documented...</h2>
          </div>

          <div className={styles.sectionContainer}>
            <h1>well... let's get in touch!</h1>
            <div className={styles.buttonsContainer}>
              <input></input>
              <Link href="/about">ABOUT ME</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
