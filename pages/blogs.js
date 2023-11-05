import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Blogs.module.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';



export default function Blog({ blog }) {
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
                title='Blogs'
                description='Peak inside my mind with these blog entries'
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/blogs.ico',
                    }
                ]}
            />
            <div className={styles.mainContainer}>
                {blogData.map(item => (
                    <div key={item.id} className={styles.blogCard}>
                        <div className={styles.cardText}>
                            <h1>{item.title} - <span className={styles.date}>{item.date}</span></h1>
                        </div>
                        <Link href={`/posts/${item.id}`}>
                            <button className={styles.readButton} id="myBtn">Read</button>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}