import Image from 'next/image'
import styles from '../../styles/v1/Home.module.css'

import insta from '../../public/v1/instagramLogo.svg';
import twitter from '../../public/v1/twitterLogo.svg';
import github from '../../public/v1/githubLogo.svg';
import coin from '../../public/v1/nftCoin.png';

export default function Home() {

    return (
        <>

            <div className={styles.main}>
                <header className={styles.headerContainer}>
                    <nav className={styles.navbar}>
                        <a href="/v1">Home</a>
                        <a href="/v1/projects">Projects</a>
                        <a href="mailto:biccsdev@gmail.com" target="_blank">Contact</a>
                    </nav>
                </header>
                <main className={styles.mainContainer}>
                    <div className={styles.socialMedia}>
                        <a href="https://www.instagram.com/biccsdev/" target="_blank">
                            <Image src={insta} alt="instagram logo" width="40" height="40" />
                        </a>
                        <a href="https://twitter.com/biccsdev" target="_blank">
                            <Image src={twitter} alt="twitter logo" width="40" height="40" />
                        </a>
                        <a href="https://github.com/biccsdev" target="_blank">
                            <Image src={github} alt="gitHub logo" width="40" height="40" />
                        </a>
                    </div>
                    <div className={styles.console}>
                        <div className={styles.consoleComponentBar} >
                            <div className={styles.consoleComponentWindow}>Home</div>
                            <div className={styles.consoleButtonContainer}>
                                <div className={styles.consoleComponentButton1}></div>
                                <div className={styles.consoleComponentButton2}></div>
                                <div className={styles.consoleComponentButton3}> </div>
                            </div>
                        </div>
                        <div className={styles.consoleDisplayFlex}>
                            <p className={styles.consoleComponentLeftText}>user@userPC</p>
                            <p className={styles.consoleComponentText}>:</p>
                            <p className={styles.consoleComponentRightText}>~/$</p>
                            <h2 className={styles.consoleComponentText}>Hi, i'm Victor,</h2>
                        </div>

                        <div className={styles.consoleDisplayFlex}>
                            <p className={styles.consoleComponentLeftText}>user@userPC</p>
                            <p className={styles.consoleComponentText}>:</p>
                            <p className={styles.consoleComponentRightText}>~/$</p>
                            <h3 className={styles.consoleComponentText}>i go by biccs on the web</h3>
                        </div>

                        <div className={styles.consoleDisplayFlex}>
                            <p className={styles.consoleComponentLeftText}>user@userPC</p>
                            <p className={styles.consoleComponentText}>:</p>
                            <p className={styles.consoleComponentRightText}>~/$</p>
                            <h3 className={styles.consoleComponentText}>i'm a software engineer</h3>
                        </div>

                        <div className={styles.consoleDisplayFlex}>
                            <p className={styles.consoleComponentLeftText}>user@userPC</p>
                            <p className={styles.consoleComponentText}>:</p>
                            <p className={styles.consoleComponentRightText}>~/$</p>
                            <h3 className={styles.consoleComponentText}>on this site, you can check out my lastest proyects and some useful information about tech in general</h3>
                        </div>
                    </div>
                </main>
                <footer className={styles.footerContainer}>
                    <div className={styles.nftReference}>
                        <a href="https://solsea.io/nft/5AS4f2yiK8p5yPRBJ8fYLVxSNgt2QfV6MTj3mYC1fgpW" target="_blank">
                            Click to check out the first NFT I ever got on Solana
                        </a>
                    </div>
                    <div className={styles.lastButton}>
                        <Image src={coin} width={200} height={200} />
                    </div>
                </footer>
            </div>
        </>
    )
}
