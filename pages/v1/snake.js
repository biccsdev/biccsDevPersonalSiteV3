import Image from 'next/image'
import styles from '../../styles/v1/Snake.module.css'
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

import insta from '../../public/v1/instagramLogo.svg';
import twitter from '../../public/v1/twitterLogo.svg';
import github from '../../public/v1/githubLogo.svg';
import coin from '../../public/v1/nftCoin.png';

const Canvas = dynamic(() => import('../../components/canvas'), {
    ssr: false
});

export default function Snake() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/snakeScript.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className={styles.body}>
                <div className={styles.header}>
                    <nav className={styles.navBar}>
                        <a href="/v1">Home</a>
                        <a href="/v1/projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
                <div className={styles.body}>
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
                        <div className={styles.consoleComponentBar}>
                            <div className={styles.consoleComponentWindow}>Snake Game</div>
                            <div className={styles.consoleButtonContainer}>
                                <div className={styles.consoleComponentButton1}></div>
                                <div className={styles.consoleComponentButton2}></div>
                                <div className={styles.consoleComponentButton3}> </div>
                            </div>
                        </div>

                        <div className={styles.snakeContainer}>
                            <div className={styles.snakeContainerItems}>
                                <p className={styles.p1}>SCORE:</p>
                                <p className={styles.p2}>HIGHSCORE:</p>
                                <p className={styles.score}>0</p>
                                <p className={styles.high}>0</p>
                                {/* <canvas width="300" height="400" className={styles.game}></canvas> */}
                                <Canvas />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.nftReference}>
                        <a href="https://cnft.io/token/61a5d94101f8c79ea473ac3b" target="_blank">
                            Click to check out my latest NFT on sale!
                        </a>
                    </div>
                    <div className={styles.lastButton}>
                        <Image src={coin} width={200} height={200} alt="coin" />
                    </div>
                </div>
                {/* <script src="/v1/snake/snakeScript.js"></script> */}
            </div>
        </>
    )
}
