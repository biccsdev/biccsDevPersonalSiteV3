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
                    Junior developer projects | Web 2, Web 3, Frontend, Backend, APIS
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
                        <h2>Token gated system (SMB frames)</h2>
                        <Image src={'/projects/videoSMB.gif'} alt='token gated app gif example' width={300} height={300} />
                        <p> SMB Frames is an app I made as a proof of concept about token gated content for a Solana NFT collection, made with NextJS for the front-end and Metaplex, Anchor and @solana/web3.js for the token gated system implementation.
                            This is done to incentivize users to take part in a platform, or to provide exclusive access to certain content or services.
                            Token gating can be used to create loyalty programs, reward content creators, or to drive user engagement.</p>
                        <a href='https://smbframes.vercel.app/' target='_blank'>
                            <button className={styles.cardButton}>Go to site</button>
                        </a>
                        <a href='https://github.com/biccsdev/vercelSMBFrames/tree/main' target='_blank'>
                            <button className={styles.cardButton}>See code</button>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <h2>Token gated system (SMB frames)</h2>
                        <Image src={'/projects/videoSMB.gif'} alt='token gated app gif example' width={300} height={300} />
                        <p> SMB Frames is an app I made as a proof of concept about token gated content for a Solana NFT collection, made with NextJS for the front-end and Metaplex, Anchor and @solana/web3.js for the token gated system implementation.
                            This is done to incentivize users to take part in a platform, or to provide exclusive access to certain content or services.
                            Token gating can be used to create loyalty programs, reward content creators, or to drive user engagement.</p>
                        <a href='https://smbframes.vercel.app/' target='_blank'>
                            <button className={styles.cardButton}>Go to site</button>
                        </a>
                        <a href='https://github.com/biccsdev/vercelSMBFrames/tree/main' target='_blank'>
                            <button className={styles.cardButton}>See code</button>
                        </a>
                    </div>
                </div>
            </main>
        </Layout>
    )
}