import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { NextSeo } from 'next-seo';



Home.siteTitle = "";
Home.description = "hi";
Home.faviconUrl = "public/home.ico";
export default function Home() {

  return (
    <Layout >
      <NextSeo
        title='Home'
        description='Welcome to my portfolio!'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/home.ico',
          }
        ]}
      />
      <div className={styles.main}>
        <div className={styles.title}>
          <h1>Hi, I'm Victor Torres, a Software Engineer based in Mexico.</h1>
        </div>
        <div className={styles.description}>
          <h2>
            If you need to bring new ideas to life,
            design a solution for your problem,
            build APIs, websites or systems that follow best practices and are well documented...
          </h2>
        </div>
        <div className={styles.contact}>
          <h1>Get in touch!</h1>
          <div className={styles.buttonsContainer}>
            <button className={styles.button54} role='button'><Link href='/contact'>Contact</Link></button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
