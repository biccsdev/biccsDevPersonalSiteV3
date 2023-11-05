import Layout from "../../components/layout";
import styles from "../../styles/Posts.module.css";
import { useRouter } from "next/router";
import { NextSeo, ArticleJsonLd } from "next-seo";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
// import MarkdownRenderer from "../../components/MarkdownRenderer";

export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    const [blogData, setBlogData] = useState({
        title: "",
        contentPath: "",
        tags: [],
        date: "",
        seoDate: "",
        seoDateLastModified: "",
        seoDescription: "",
        image: "",
        imageAlt: "",
    });
    const [content, setContent] = useState("");

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch("/blogs/blogs.json");
                    if (response.ok) {
                        const data = await response.json();
                        const filteredData = data.find((item) => item.id === id);
                        console.log(filteredData);
                        if (filteredData) {
                            setBlogData(filteredData);
                        } else {
                            console.error("Blog not found.");
                        }
                    } else {
                        console.error("Failed to fetch data.");
                    }
                } catch (error) {
                    console.error("An error occurred while fetching data:", error);
                }
            };

            fetchData();
        }
    }, [id]);

    async function fetchMarkdownContent() {
        try {
            const response = await fetch(`/blogs/${blogData.contentPath}`);
            const text = await response.text();
            setContent(text);
        } catch (error) {
            console.error("Error fetching Markdown content:", error);
        }
    }

    const renderContent = () => {
        fetchMarkdownContent();
        return (
            <div className={styles.dataContainer}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        );
    };

    return (
        <Layout>
            <NextSeo
                title={blogData.title}
                description={blogData.seoDescription}
                openGraph={{
                    title: blogData.title,
                    description: blogData.seoDescription,
                    url: `https://biccs.tech${router.asPath}`,
                    type: "article",
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
                        rel: "icon",
                        href: "/blogs.ico",
                    },
                ]}
            />
            <ArticleJsonLd
                type="BlogPosting"
                url={`https://biccs.tech${router.asPath}`}
                title={blogData.title}
                images={[]}
                datePublished={blogData.seoDate}
                dateModified={blogData.seoDateLastModified}
                authorName="biccs"
                description={blogData.seoDescription}
            />
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <h1>{blogData.title}</h1>
                    <h3>
                        Author:{" "}
                        <a
                            style={{ color: "#5d2e8c", textDecoration: "underline" }}
                            href="https://twitter.com/itsbiccs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @biccs
                        </a>{" "}
                        | Date: {blogData.date}
                    </h3>
                </div>
                <div className={styles.blogImage}>
                    <Image
                        className={styles.image}
                        src={blogData.image}
                        alt={blogData.imageAlt}
                        width={400}
                        height={400}
                    />
                </div>
                {renderContent()}
            </div>
        </Layout>
    );
}
