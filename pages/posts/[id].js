import Layout from "../../components/layout";
import styles from "../../styles/Posts.module.css";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

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
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <h1>{blogData.title}</h1>
                    <h3>Author: @biccs</h3>
                </div>
                {renderContent()}
            </div>
        </Layout>
    );
}

