import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Projects.module.css'
import React, { useState, useEffect } from 'react';


export default function Project() {
    const [projectsData, setProjectsData] = useState([]);
    const [showFullDescriptions, setShowFullDescriptions] = useState(Array(projectsData.length).fill(false));
    const [selectedCard, setSelectedCard] = useState(null);

    const toggleDescription = (index) => {
        const newShowFullDescriptions = [...showFullDescriptions];
        newShowFullDescriptions[index] = !showFullDescriptions[index];
        setShowFullDescriptions(newShowFullDescriptions);
    };

    const openCard = (id) => {
        setSelectedCard(id);
    };

    const closeCard = () => {
        setSelectedCard(null);
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
    return (
        <Layout >
            <Head>
                <link rel='shortcut icon' href='/projects.ico' />
                <title>
                    Software Engineer projects | Web Development, Frontend, Backend, APIS, Fullstack
                </title>
                <meta
                    name="description"
                    content="Projects portfolio"
                    key="desc"
                />
                <meta property="og:title" content="Junior developer projects | Web 2, Web 3, Frontend, Backend, APIS" />
                <meta
                    property="og:description"
                    content={`Check out @biccs's latest public projects`}
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
            <main className={styles.mainContainer}>
                <div className={styles.cardsContainer}>
                    {projectsData.map(item => (
                        <div className={styles.card} onClick={() => openCard(item.id)} key={item.id}>
                            {/* <Image src={'/projects/videoSMB.gif'} alt='token gated app gif example' width={300} height={300} /> */}
                            <div className={styles.cardInfo}>
                                <h2>{item.title}</h2>
                                {item.tags.map(itemWithin => (
                                    <a className={styles.tag} key={itemWithin}>{itemWithin}</a>
                                ))}
                                <p>
                                    {showFullDescriptions[item.id]
                                        ? item.description // Show full description when clicked
                                        : `${item.description.substring(0, 50)}${item.description.length > 50 ? '...' : ''}`}
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
                            <div className={styles.cardPopUp}>
                                <h2>{projectsData[selectedCard].title}</h2>
                                <div className={styles.popUpImage}>
                                    <Image src={projectsData[selectedCard].media} alt='media related to project' height={300} width={300}></Image>
                                </div>
                                {projectsData[selectedCard].tags.map(itemWithin => (
                                    <a className={styles.tag} key={itemWithin}>{itemWithin}</a>
                                ))}
                                <p>{projectsData[selectedCard].description}</p>
                                {(selectedCard.codeLink != "") && (
                                    <a href={selectedCard.codeLink} target='_blank' rel="noreferrer">
                                        <button className={styles.cardButton}>See code</button>
                                    </a>
                                )}
                                {(selectedCard.siteLink != "") && (
                                    <a href={selectedCard.siteLink} target='_blank' rel="noreferrer">
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