import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';



Home.siteTitle = "";
Home.description = "hi";
Home.faviconUrl = "public/home.ico";
export default function Home() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/blogs/blogs.json');
        if (response.ok) {
          const data = await response.json();
          setBlogData(data);
        } else {
          console.error('Failed to fetch data.');
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
        <div className={styles.welcomeContainer}>
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
        <div className={styles.blogsContainer}>
          <h1>Read my latest blog</h1>

          {blogData.length > 0 &&
            <div key={blogData[0].id} className={styles.blogCard}>
              <div className={styles.cardText}>
                <h1>{blogData[0].title} - <span className={styles.date}>{blogData[0].date}</span></h1>
              </div>
              <Link href={`/posts/${blogData[0].id}`}>
                <button className={styles.button54} id="myBtn">Read</button>
              </Link>
            </div>
          }

        </div>
      </div>
    </Layout>
  )
}
