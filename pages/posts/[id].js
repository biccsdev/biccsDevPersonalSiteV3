import Layout from "../../components/layout";
import styles from "../../styles/Posts.module.css";
import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    const [blogData, setBlogData] = useState({ title: '', content: '' });

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch('/blogs.json');
                    if (response.ok) {
                        const data = await response.json();
                        const filteredData = data.find(item => item.id === id);
                        if (filteredData) {
                            setBlogData(filteredData);
                        } else {
                            console.error('Blog not found.');
                        }
                    } else {
                        console.error('Failed to fetch data.');
                    }
                } catch (error) {
                    console.error('An error occurred while fetching data:', error);
                }
            };

            fetchData();
        }
    }, [id]);

    const renderContent = () => {
        const contentLines = blogData.content.split('\n');
        return (
            <div>
                {contentLines.map((line, index) => (
                    <p className={styles.paragraph} key={index}>{line}</p>
                ))}
            </div>
        );
    }

    return (
        <Layout>
            <NextSeo
                title={blogData.title}
                description={blogData.seoDescription}
                openGraph={{
                    title: blogData.title,
                    description: blogData.seoDescription,
                    url: `https://biccs.tech${router.asPath}`,
                    type: 'article',
                    images: [
                        {
                            url: blogData.image,
                            width: 850,
                            height: 650,
                            alt: blogData.imageAlt,
                        },
                    ],
                }}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/blogs.ico',
                    }
                ]}
            />
            <ArticleJsonLd
                type="BlogPosting"
                url={`https://biccs.tech${router.asPath}`}
                title={blogData.title}
                images={[
                ]}
                datePublished={blogData.seoDate}
                dateModified={blogData.seoDateLastModified}
                authorName="biccs"
                description={blogData.seoDescription}
            />
            <div className={styles.mainContainer}>

                <div className={styles.titleContainer}>
                    <h1>{blogData.title}</h1>
                    <h3>Author: <a style={{ color: '#5d2e8c', textDecoration: 'underline' }} href="https://twitter.com/itsbiccs" target="_blank">@biccs</a> | Date: {blogData.date}</h3>
                </div>
                <div className={styles.blogImage}>
                    <Image className={styles.image} src={blogData.image} alt={blogData.imageAlt} width={400} height={400} />
                </div>
                {renderContent()}
            </div>
        </Layout>
    );
}

