import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Blogs.module.css'
import React, { useState, useEffect } from 'react';
// import BlogComponent from '../components/blog'

import v1 from '../public/v1.jpg';
import article from '../public/article1.png';

export default function Blog({ blog }) {
    // const latestPost = "";
    // const latestPostDescription = '';
    // const latestPostImageUrl = '';
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch('https://localhost:3000/blog');
    //         const data = await res.json();
    //         setData(data);
    //     }
    //     fetchData();
    // }, []);
    return (
        <Layout blogs>
            <Head>
                <link rel='shortcut icon' href='/blogs.ico' />
                <title>
                    Blog about software development and technology in general | Web 3 | Web development | Virtual Reality
                </title>
                <meta
                    name="description"
                    content="Tech blog written by a developer"
                    key="desc"
                />
                <meta property="og:title" content={`biccsdev's blog | Check the latest post!`} />

                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
            <div className={styles.mainContainer}>
                {blog.map(item => (
                    <div key={item._id} className={styles.blogCard}>
                        <Image src={article} alt="Background image" width={150} height={100} />
                        <div className={styles.cardText}>
                            <h1>{item.title}</h1>
                            <h3>{item.content.slice(0, 150)}...</h3>
                        </div>
                        <button className={styles.readButton} onClick={() => myFunction()} id="myBtn">Read more</button>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/blog');
    const blog = await res.json();
    return {
        props: {
            blog,
        },
    };
}
