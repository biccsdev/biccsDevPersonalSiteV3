import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/About.module.css'

import pfp from '../public/pfp.png';
import downloadIcon from '../public/downloadIcon.png';

import { useEffect, useState } from 'react';

export default function About() {

    const [helper, setHelper] = useState(false);


    //This is a helper function that changes the value of a state variable on button click
    // in order to summon useEffect and display the about me info
    const myFunction = () => {
        helper ? setHelper(false) : setHelper(true);
    }

    useEffect(() => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    })

    return (
        <Layout about>
            <Head>
                <link rel='shortcut icon' href='/about.ico' />
                <title>
                    Who is @biccsdev? | Get in touch | Download Resume
                </title>
                <meta
                    name="description"
                    content="Latest version of my resume, find the links to all my social media ( github, twitter, linkedin, stackoverflow... ) "
                    key="desc"
                />
                <meta property="og:title" content="Who is @biccsdev?" />
                <meta
                    property="og:description"
                    content="Check out the latest version of biccsdev's resume, find the links to all my social media ( github, twitter, linkedin, stackoverflow... )"
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
            <main className={styles.mainContainer}>
                <div className={styles.aboutMeContainer}>
                    <h1>Hello World!</h1>
                    <Image src={pfp} width={100} height={100} alt='biccsdev pfp of a BVDCAT ( an nft on the solana blockchain )' />
                    <div>
                        <p>I'm Victor Torres also known as @biccsdev, a web developer and blockchain enthusiast. My passion for technology and coding began in high school and soon found myself working as a web developer, generating solutions for local businesses in my home town. Soon after, I discovered the potential of blockchain technology and the power of digital assets and cryptocurrencies.

                            After that<span id="dots">...</span><span id="more" className={styles.more}> I quickly became a passionate advocate of blockchain technology, and soon began to develop applications and projects that focused on blockchain and soon virtual reality. I've since worked on a number of APIs, web2 websites and developed several web applications for NFT projects.

                                Also I have a keen interest in virtual reality and where I'm currently exploring the potential for blockchain-based applications within the virtual reality sphere. I'm particularly interested in the potential for virtual reality to facilitate the development of new and innovative applications across all industries.

                                I'm committed to helping people understand the potential of blockchain technology, cryptocurrencies, and virtual reality, and constantly looking for new ways to use these technologies to improve people's lives. I'm an active member of the web3 community and always looking for new ways to contribute to the development of the industry..</span></p>
                        <button className={styles.readButton} onClick={() => myFunction()} id="myBtn">Read more</button>
                    </div>
                </div>
                <button className={styles.buttonResume}>Download Resume <span className={styles.buttonSpan}></span></button>
            </main>
        </Layout>
    )
}