import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Archives.module.css'
import { Chrono } from 'react-chrono'
import { NextSeo } from 'next-seo';


export default function Archive() {
    return (
        <Layout >
            <NextSeo
                title='Archive'
                description='Iteration is a key software development concept'
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/archives.ico',
                    }
                ]}
            />
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