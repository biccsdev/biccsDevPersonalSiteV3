import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Projects.module.css'

export default function Project() {
    return (
        <Layout projects>
            <Head>
                <link rel='shortcut icon' href='/projects.ico' />
                <title>
                    Junior developer projects | Web 2, Web 3, Frontend, Backend, APIS, Fullstack
                </title>
                <meta
                    name="description"
                    content="Projects portfolio"
                    key="desc"
                />
                <meta property="og:title" content="Junior developer projects | Web 2, Web 3, Frontend, Backend, APIS" />
                <meta
                    property="og:description"
                    content={`Check out @biccsdev's latest public projects`}
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
            <main className={styles.mainContainer}>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <Image src={'/projects/videoSMB.gif'} alt='token gated app gif example' width={300} height={300} />
                        <div className={styles.cardInfo}>
                            <h2>Blockchain Token Gated System</h2>
                            <p> This is an app I made as a proof of concept about token gated content as a use case for web3, made with NextJS for the front-end and Metaplex, Anchor and @solana/web3.js for the token gated system implementation.
                                This is done to incentivize users to take part in a platform, or to provide exclusive access to certain content or services.
                                Token gating can be used to create loyalty programs, reward content creators, or to drive user engagement.</p>
                            <a href='https://smbframes.vercel.app/' target='_blank' rel="noreferrer">
                                <button className={styles.cardButton}>Go to site</button>
                            </a>
                            <a href='https://github.com/biccsdev/vercelSMBFrames/tree/main' target='_blank' rel="noreferrer">
                                <button className={styles.cardButton}>See code</button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src={'/twtlogo.png'} alt='token gated app gif example' width={300} height={300} />
                        <div className={styles.cardInfo}>
                            <h2>Twitter Automated Blockchain Mint Bot</h2>
                            <p> This twitter bot was made as a contribution to a web3 community, in order to increase the noise about the collection and make more people aware of this community.
                                It was made using twitter API V2 for interacting with twitter, ExpressJS for the backend and @solana/web3.js library for interacting with the Solana Blockchain.
                                Twitter bots can be a great way to keep your followers up to date on the latest mints of your Digital Collectibles collection.
                                By using a Twitter bot, you can quickly and easily share the new mints with your followers,
                                helping to create excitement and interest in your collection. This can help to increase engagement and sales,
                                as well as give your collection more visibility and recognition. In addition, it can also be a great way to
                                let your followers know when something new and exciting is coming out, giving them a reason to come back
                                and check out your collection.</p>
                            <a href='https://twitter.com/villinzbot' target='_blank' rel="noreferrer">
                                <button className={styles.cardButton}>Go to site</button>
                            </a>
                            <a href='https://github.com/biccsdev/villinzBotV2' target='_blank' rel="noreferrer">
                                <button className={styles.cardButton}>See code</button>
                            </a>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <Image src={'/projects/shortUrl.jpg'} alt='token gated app gif example' width={300} height={300} />
                        <div className={styles.cardInfo}>
                            <h2>Backend URL Shortener API</h2>
                            <p>Made with NestJS and Typescript for the backend and Mongoose for the Database.
                                This System  was developed using the Module, Controller, Service, architecture
                                where the Module was needed to allow the Mongoose and UrlShortener modules functionality to be used within the main module.
                                The controller layer was used to intercept the API calls and call the Service layer in order to execute the business logic of the system (shorten the url).
                            </p>
                            <a href='https://github.com/biccsdev/urlshortener' target='_blank' rel="noreferrer">
                                <button className={styles.cardButton}>See code</button>
                            </a>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <Image src={'/projects/chatAppLogo.png'} alt='token gated app gif example' width={300} height={300} />
                        <div className={styles.cardInfo}>
                            <h2>Full Stack Chat App</h2>
                            <p>This chat app was made with NodeJs implementing ExpressJS and Mongoose for the backend, and Html, css and JS vanilla for the Frontend.
                                This app makes use of websocket for bi-directional, full-duplex communication between the client and server. Websockets allow for real-time
                                communication between the two endpoints, allowing for faster and more efficient communication.  </p>
                            <a href='https://github.com/biccsdev/chatApp' target='_blank' rel="noreferrer">
                                <button className={styles.cardButton}>See code</button>
                            </a>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <Image src={'/projects/vlnzgif.gif'} alt='token gated app gif example' width={300} height={300} />
                        <div className={styles.cardInfo}>
                            <h2>Token Gated Solana Wallets Explorer</h2>
                            <p>This system was build using NextJS and Typescript with @Solana/web3.js library to be able to
                                connect to the Blockchain. It allows holders of certain token to access the wallet finder
                                system, where they input a Wallet Address and retrieve those wallet's assets.</p>
                            <a href='https://villinz-hub.vercel.app/' target='_blank' rel="noreferrer">
                                <button className={styles.cardButton}>Visit Site</button>
                            </a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}