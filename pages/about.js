import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/About.module.css'

import pfp from '../public/pfp.png';

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
                    <Image className={styles.pfp} src={pfp} width={100} height={100} alt='biccsdev pfp of a BVDCAT ( an nft on the solana blockchain )' />
                    <div>
                        <p>I'm Victor Torres also known as @biccsdev, a software engineer/web developer, blockchain and augmented reality enthusiast. My passion for technology and coding began in my early years of life and eventually found myself working as a web developer, generating solutions for local businesses. Soon after, I discovered the potential of virtual and augmented reality and the power of blockchain technology.

                            After that<span id="dots">...</span><span id="more" className={styles.more}> I quickly became a passionate advocate of these technologies, and began to develop applications and projects that made use of these technologies. I've since worked on a number of APIs, web2 websites and developed several web applications for web3 projects. I'm looking forward learning more and eventually developing my first virtual reality application.

                                Also I have a deep interest in virtual reality and I'm currently exploring the potential for applications within the virtual/augmented reality sphere. I'm particularly interested in the potential for virtual reality to facilitate the development of new and innovative applications across all industries.

                                I'm committed to helping people understand the potential of new technologies, and constantly looking for new ways to use these technologies to improve people's lives. I'm an active member of these technologies communities and always looking for new ways to contribute to the development of the industry.</span></p>
                        <button className={styles.readButton} onClick={() => myFunction()} id="myBtn">Read more</button>
                    </div>
                </div>
                <div className={styles.downloadResumeContainer}>
                    <a href="/downloadable/resume.pdf" download="resumeVictorTorres">
                        <button className={styles.buttonResume}>Download Resume <span className={styles.buttonSpan}></span></button>
                    </a>
                </div>
                <div className={styles.techStackContainer}>
                    <h1>Tech Stack</h1>
                    <a href='https://www.javascript.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/javascriptLogo.png'} width={48} height={48} alt='Javascript logo' />
                        <h3>Javascript</h3>
                    </a>
                    <a href='https://www.python.org/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/pythonLogo.png'} width={48} height={48} alt='Python logo' />
                        <h3>Python</h3>
                    </a>
                    <a href='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/cSharpLogo.png'} width={48} height={48} alt='C sharp logo' />
                        <h3>C#</h3>
                    </a>
                    <a href='https://www.java.com/en/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/javaLogo.png'} width={48} height={48} alt='Java logo' />
                        <h3>Java</h3>
                    </a>
                    <a href='https://en.wikipedia.org/wiki/HTML' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/htmlLogo.png'} width={48} height={48} alt='HTML logo' />
                        <h3>Html</h3>
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/cssLogo.png'} width={48} height={48} alt='CSS logo' />
                        <h3>Css</h3>
                    </a>
                    <a href='https://www.typescriptlang.org/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/typescriptLogo.png'} width={48} height={48} alt='Typescript logo' />
                        <h3>Typescript</h3>
                    </a>
                    <a href='https://expressjs.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/expressJsLogo.png'} width={48} height={48} alt='Express JS logo' />
                        <h3>ExpressJS</h3>
                    </a>
                    <a href='https://fastapi.tiangolo.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/fastApiLogo.png'} width={48} height={48} alt='Fast Api logo' />
                        <h3>Fast API</h3>
                    </a>
                    <a href='https://git-scm.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/gitLogo.png'} width={48} height={48} alt='GIT logo' />
                        <h3>Git</h3>
                    </a>
                    <a href='https://jestjs.io/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/jestLogo.png'} width={48} height={48} alt='Jest test logo' />
                        <h3>Jest</h3>
                    </a>
                    <a href='https://mochajs.org/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/mochaLogo.png'} width={48} height={48} alt='Mocha test logo' />
                        <h3>Mocha</h3>
                    </a>
                    <a href='https://www.mongodb.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/mongoLogo.png'} width={48} height={48} alt='Mongo DB logo' />
                        <h3>Mongo DB</h3>
                    </a>
                    <a href='https://nestjs.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/nestJsLogo.png'} width={48} height={48} alt='NestJs logo' />
                        <h3>NestJS</h3>
                    </a>
                    <a href='https://nextjs.org/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/nextJsLogo.png'} width={48} height={48} alt='NextJs logo' />
                        <h3>NextJS</h3>
                    </a>
                    <a href='https://nodejs.org/en/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/nodeJsLogo.png'} width={48} height={48} alt='Nodejs logo' />
                        <h3>NodeJS</h3>
                    </a>
                    <a href='https://www.anchor-lang.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/anchorLogo.png'} width={48} height={48} alt='Anchor logo' />
                        <h3>Anchor</h3>
                    </a>
                    <a href='https://www.postman.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/postManLogo.png'} width={48} height={48} alt='Postman logo' />
                        <h3>PostMan</h3>
                    </a>
                    <a href='https://reactjs.org/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/reactJsLogo.png'} width={48} height={48} alt='React Js logo' />
                        <h3>ReactJS</h3>
                    </a>
                    <a href='https://docs.solana.com/developing/clients/javascript-api' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/solanaLogo.png'} width={48} height={48} alt='Solana logo' />
                        <h3>Web3JS</h3>
                    </a>
                    <a href='https://en.wikipedia.org/wiki/SQL' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/sqlLogo.png'} width={48} height={48} alt='SQL logo' />
                        <h3>SQL</h3>
                    </a>
                    <a href='https://tailwindcss.com/' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/tailwindLogo.png'} width={48} height={48} alt='Tailwind logo' />
                        <h3>Tailwind</h3>
                    </a>
                    <a href='https://learn.microsoft.com/en-us/xamarin/get-started/what-is-xamarin-forms' target='_blank' className={styles.techContainer}>
                        <Image src={'/techStackLogos/xamarinFormsLogo.png'} width={48} height={48} alt='xamarinForms logo' />
                        <h3>Xamarin Forms</h3>
                    </a>
                </div>
                <div className={styles.socialsContainer}>
                    <h1>Socials</h1>
                    <a href='https://twitter.com/biccsdev' target='_blank' className={styles.socialMediaContainer}>
                        <Image src={'/socialsLogos/twitterLogo.png'} height={48} width={48} alt='Twitter logo' />
                        <h3>Twitter</h3>
                    </a>
                    <a href='https://www.linkedin.com/in/victor-torres-93408a229/' target='_blank' className={styles.socialMediaContainer}>
                        <Image src={'/socialsLogos/linkedInLogo.png'} height={48} width={48} alt='Linked In logo' />
                        <h3>LinkedIn</h3>
                    </a>
                    <a href='https://github.com/biccsdev' target='_blank' className={styles.socialMediaContainer}>
                        <Image src={'/socialsLogos/githubLogo.png'} height={48} width={48} alt='Github logo' />
                        <h3>Github</h3>
                    </a>
                    <a href='https://stackoverflow.com/users/15958197/victor-torres' target='_blank' className={styles.socialMediaContainer}>
                        <Image src={'/socialsLogos/stackOverflowLogo.png'} height={48} width={48} alt='StackOverflow logo' />
                        <h3>StackOverflow</h3>
                    </a>
                </div>
                <div className={styles.hobbiesContainer}>
                    <h1>Hobbies</h1>
                    <h2>Reading</h2>
                    <h3>I love to spend my time reading, here's a list of my favorite books so far:</h3>
                    <ul>
                        <li><a href='https://www.amazon.com/Think-Grow-Rich-Napoleon-Hill/dp/0449214923' target='_blank'>Think and grow rich</a></li>
                        <li><a href='https://www.amazon.com/Breaking-Habit-Being-Yourself-Dispenza-ebook/dp/B006M7A8JI' target='_blank'>Break the habit of being yourself</a></li>
                        <li><a href='https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194' target='_blank'>Rich dad Poor dad</a></li>
                        <li><a href='https://www.amazon.com/-/es/Viktor-Frankl/dp/0807014273/ref=d_pd_sbs_sccl_1_1/146-0786288-4084368?pd_rd_w=0LWPs&content-id=amzn1.sym.3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=674GP7F16HHZ9AHXF28A&pd_rd_wg=c8IdO&pd_rd_r=8c213fea-a4ea-46a8-a42d-b386211c554e&pd_rd_i=0807014273&psc=1' target='_blank'>Man's search for meaning</a></li>
                    </ul>
                    <h2>Art</h2>
                    <h3>Another thing I enjoy doing is learning about art and practicing it...</h3>
                    <h3>Here are some of my Pixel Art creations.</h3>
                    <div className={styles.hobbiesImagesContainer}>
                        <Image src={'/hobbies/bvdbytes.png'} height={200} width={300} alt="bvdcat street pixel art made by biccs" />
                        <Image src={'/hobbies/forestBackground.png'} height={200} width={300} alt="pixel art forest made by biccs" />
                        <Image src={'/hobbies/madvilleMondayz.gif'} height={200} width={200} alt="madville pixel art gif made by biccs" />
                        <Image src={'/hobbies/villinz.gif'} height={200} width={200} alt="villinz pixel art gif made by biccs" />
                        <Image src={'/hobbies/mixiDoom.png'} height={200} width={200} alt="MF DOOM profile picture pixel art made by biccs" />
                    </div>
                    <h3>Other stuff...</h3>
                    <ul>
                        <li>Going to the gym - exercising the body keeps the mind active</li>
                        <li>Flying drones - It keeps me entertained and allows me to explore different areas I would be able to without it</li>
                        <li>Playing basketball - I've played basketball since elementary school, won several state championships, went to a international tournament representing Mexico in Las Vegas and got 3rd place at a national tournament - ball is life</li>
                        <li>Virtual reality - ever since I got in touch with virtual reality it's been one of my favorites technologies one can get their hands on right now, it allows us to create and experience so many things we simply cannot without it</li>
                    </ul>
                </div>
            </main>
        </Layout>
    )
}