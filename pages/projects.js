import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Projects.module.css'
import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';



export default function Project() {
    const [projectsData, setProjectsData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);
    const [isDark, setIsDark] = useState(undefined);


    const openCard = (id) => {
        setSelectedCard(id);
    };

    const closeCard = () => {
        setSelectedCard(null);
    };

    const handleTagClick = (tag) => {
        if (tag === 'All') {
            setSelectedTags([]); // Clear selected tags to show all cards
        }

        if (tag === 'Web3') { setSelectedTags(["Web3"]); }
        if (tag === 'Front-End') { setSelectedTags(["Front-End"]); }
        if (tag === 'Back-End') { setSelectedTags(["Back-End"]); }


    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/projects.json');
                if (response.ok) {
                    const data = await response.json();
                    setProjectsData(data);
                } else {
                    console.error('Failed to fetch data.');
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (localStorage.getItem("theme") == "dark") {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, [selectedCard])

    // Filter projects based on selected tags
    const filteredProjects = selectedTags.length
        ? projectsData.filter((project) =>
            project.tags.some((tag) => selectedTags.includes(tag))
        )
        : projectsData;

    return (
        <Layout >
            <NextSeo
                title='Projects'
                description='Showcase of my most recent public developments'
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/projects.ico',
                    }
                ]}
            />
            <main className={styles.mainContainer}>
                <div className={styles.tagsContainer}>
                    <button className={styles.cardButton} onClick={() => handleTagClick('All')}>All</button>
                    <button className={styles.cardButton} onClick={() => handleTagClick('Web3')}>Web3</button>
                    <button className={styles.cardButton} onClick={() => handleTagClick('Front-End')}>Front-End</button>
                    <button className={styles.cardButton} onClick={() => handleTagClick('Back-End')}>Back-End</button>
                </div>
                <div className={styles.cardsContainer}>
                    {filteredProjects.map(item => (
                        <div className={styles.card} onClick={() => openCard(item.id)} key={item.id}>
                            <div className={styles.cardInfo}>
                                <h2>{item.title}</h2>
                                <div>
                                    {item.tags.map(itemWithin => (
                                        <a className={styles.tag} key={itemWithin}>{itemWithin}</a>
                                    ))}
                                </div>
                                <p>
                                    {`${item.description.substring(0, 50)}${item.description.length > 50 ? '...' : ''}`}
                                </p>
                                {(item.codeLink != "") && (
                                    <a href={item.codeLink} target='_blank' rel="noreferrer">
                                        <button className={styles.cardButton}>See code</button>
                                    </a>
                                )}
                                {(item.siteLink != "") && (
                                    <a href={item.siteLink} target='_blank' rel="noreferrer">
                                        <button className={styles.cardButton}>Go to site</button>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}

                    {selectedCard !== null && (
                        <div className={styles.overlay}>
                            {/* <div className={styles.cardPopUp}> */}
                            <div className={!isDark ? styles.cardPopUp : styles.cardPopUpDark}>
                                <h2>{projectsData[selectedCard].title}</h2>
                                <div className={styles.popUpImage}>
                                    <Image src={projectsData[selectedCard].media} alt='media related to project' height={300} width={300}></Image>
                                </div>
                                {projectsData[selectedCard].tags.map(itemWithin => (
                                    <a className={styles.tag} key={itemWithin}>{itemWithin}</a>
                                ))}
                                <p>{projectsData[selectedCard].description}</p>
                                {(projectsData[selectedCard].codeLink != "") && (
                                    <a href={projectsData[selectedCard].codeLink} target='_blank' rel="noreferrer">
                                        <button className={styles.cardButton}>See code</button>
                                    </a>
                                )}
                                {(projectsData[selectedCard].siteLink != "") && (
                                    <a href={projectsData[selectedCard].siteLink} target='_blank' rel="noreferrer">
                                        <button className={styles.cardButton}>Go to site</button>
                                    </a>
                                )}
                                {/* Add more details here */}
                                <button className={styles.cardButton} onClick={closeCard}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    )
}