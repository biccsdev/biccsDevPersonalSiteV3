import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Archives.module.css'
import { Chrono } from 'react-chrono'

import v3 from '../public/v3.jpg';
import v2 from '../public/v2.jpg';
import v1 from '../public/v1.jpg';

export default function Archive() {
    return (
        <Layout archives>
            <Head>
                <link rel='shortcut icon' href='/archive.ico' />
                <title>
                    Software Engineer's portfolio | Is it important to iterate over your software releases?
                </title>
                <meta
                    name="description"
                    content="Iteration over past versions of my portfolio"
                    key="desc"
                />
                <meta property="og:title" content="Is it important to iterate over your software releases?" />
                <meta
                    property="og:description"
                    content="Check out the past versions of my portfolio and distinguish the difference over the iterations."
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
            <div className={styles.main}>
                <h2>
                    Iteration is a key step in agile software development,
                    it allows flexibility and adaptability. Overall, the iterative approach to
                    software development is a valuable tool for managing the complexity and uncertainty
                    of building software products. It allows me to deliver value incrementally and adapt
                    to changing circumstances, which can help ensure the success of any project.
                </h2>
                <h3>Here is where I keep track of the versions of this site:</h3>
                <div className={styles.timeLine}>
                    <Chrono items={[
                        {
                            title: "Portfolio V1",
                            cardTitle: "Click here to visit V1",
                            media: {
                                name: "dunkirk beach",
                                source: {
                                    url: "https://i.ibb.co/fF33sp9/v1.jpg"
                                },
                                type: "IMAGE"
                            },
                            url: "https://victort555.github.io/biccsDevPersonalSite/",
                            cardSubtitle:
                                "First commit made on December 2nd 2021",
                            cardDetailedText: `This portfolio was made with the intention of showcasing my first projects and developing a site of my own, built with plain Html, Css and Vanilla Javascript, hosted in a raspberry pi with apache2 web server.`
                        },
                        {
                            title: "Portfolio V2",
                            cardTitle: "Click here to visit V2",
                            media: {
                                name: "dunkirk beach",
                                source: {
                                    url: "https://i.ibb.co/vJbdd1t/v2.jpg"
                                },
                                type: "IMAGE"
                            },
                            url: "https://biccsdev.github.io/biccsdevPersonalSiteV2/",
                            cardSubtitle:
                                "First commit made on March 10th 2022",
                            cardDetailedText: `The second version of my personal site was a Single Page Application, made with the intention of experimenting with new web concepts, building this site I used ReactJS and tailwind, started a new section where I put a blog and developed a couple of new projects experimenting with new concepts.`
                        },
                        {
                            title: "Portfolio V3",
                            cardTitle: "Click here to visit V3 Home",
                            media: {
                                name: "dunkirk beach",
                                source: {
                                    url: "https://i.ibb.co/MgWP75x/v3.jpg"
                                },
                                type: "IMAGE"
                            },
                            url: "/",
                            cardSubtitle:
                                "First commit made on December 7th 2022",
                            cardDetailedText: `This third version of the site is better made using SSR, includes more advanced projects, was made with NextJS and plain css, and implements a custom blog backend where APIs are consumed for managing the blogs. `
                        },
                    ]}
                        theme={{
                            primary: '#0f1012',
                            secondary: '#5d2e8c',
                            cardForeColor: '#5d2e8c',
                            titleColor: '#5d2e8c',
                            titleColorActive: '#7ae582',
                        }} />
                </div>
            </div>
        </Layout>
    )
}