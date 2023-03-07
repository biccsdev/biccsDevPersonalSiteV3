import Image from 'next/image';
import styles from '../../styles/v1/Projects.module.css';

import insta from '../../public/v1/instagramLogo.svg';
import twitter from '../../public/v1/twitterLogo.svg';
import github from '../../public/v1/githubLogo.svg';
import coin from '../../public/v1/nftCoin.png';
import grid from '../../public/v1/grid.png';
import gameboy from '../../public/v1/gameboy.svg';
import batabit from '../../public/v1/logo-footer.svg';
import snake from '../../public/v1/snake.svg';

export default function Projects() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <nav className={styles.navBar}>
                        <a href="/v1">Home</a>
                        <a href="/v1/projects">Projects</a>
                        <a href="mailto:biccsdev@gmail.com">Contact</a>
                    </nav>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.socialMedia}>
                        <a href="https://www.instagram.com/biccsdev/" target="_blank">
                            <Image src={insta} alt="instagram logo" width="40" height="40" />
                        </a>
                        <a href="https://twitter.com/biccsdev_" target="_blank">
                            <Image src={twitter} alt="twitter logo" width="40" height="40" />
                        </a>
                        <a href="https://github.com/biccs" target="_blank">
                            <Image src={github} alt="gitHub logo" width="40" height="40" />
                        </a>
                    </div>
                    <div className={styles.console}>
                        <div className={styles.consoleComponentBar}>
                            <div className={styles.consoleComponentWindow}>Projects</div>
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
                        </div>
                        <div className={styles.mainProjectCard}>
                            <Image className={styles.lastButton} src={batabit} width={300} height={100} alt="logo batatabit" />
                            <div className={styles.projectCardTextContainer}>
                                <h2>Batatabit</h2>
                                <p>Demo UI for batatabit exchange challenge, created using html & css vanilla.</p>
                            </div>
                            <div className={styles.projectCardButtonsContainer}>
                                <a href="https://batatabit.com/" target="_blank">Batatabit<span className={styles.arrowButton}></span></a>
                                <a href="/v1/batabit" target="_blank">DEMO<span className={styles.arrowButton}></span></a>
                            </div>
                        </div>
                        <div className={styles.mainProjectCard}>
                            <div className={styles.projectCardImageContainer}>
                                <Image className={styles.image2} width={300} height={100} src={snake} alt="snake logo" />
                            </div>
                            <div className={styles.projectCardTextContainer}>
                                <h2>Snake Game</h2>
                                <p>The Classic Snake Game, everyone has to code it at least once.
                                </p>
                            </div>
                            <div className={styles.projectCardButtonsContainer}>
                                <a href="https://github.com/biccs/sitiowebpersonal" target="_blank">Github<span className={styles.arrowButton}></span></a>
                                <a href="/v1/snake" target="_blank">DEMO<span className={styles.arrowButton}></span></a>
                            </div>

                        </div>
                        <div className={styles.mainProjectCard}>
                            <div className={styles.projectCardImageContainer}>
                                <Image className={styles.image2} width={300} height={100} src={gameboy} alt="handheld console image" />
                            </div>
                            <div className={styles.projectCardTextContainer}>
                                <h2>Gameboy Advance Emulator</h2>
                                <p>Play a selected list of GBA games, right on your browser!, you can save files within game, and play with your keyboard. Only playable on desktop.
                                </p>
                            </div>
                            <div className={styles.projectCardButtonsContainer}>
                                <a href="https://github.com/biccs/sitiowebpersonal" target="_blank">Github<span className={styles.arrowButton}></span></a>
                                <a href="/v1/gba" target="_blank">PLAY<span className={styles.arrowButton}></span></a>
                            </div>

                        </div>
                        <div className={styles.mainProjectCard}>
                            <div className={styles.projectCardImageContainer}>
                                <Image className={styles.image2} src={grid} alt="grid icon" />
                            </div>
                            <div className={styles.projectCardTextContainer}>
                                <h2>2048 Game</h2>
                                <p>It's the 2048 game, where you merge tiles for a bigger number.
                                </p>
                            </div>
                            <div className={styles.projectCardButtonsContainer}>
                                <a href="https://github.com/biccs/sitiowebpersonal" target="_blank">Github<span className={styles.arrowButton}></span></a>
                                <a href="/v1/2048game" target="_blank">DEMO<span className={styles.arrowButton}></span></a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.nftReference}>
                        <a href="https://solsea.io/nft/5AS4f2yiK8p5yPRBJ8fYLVxSNgt2QfV6MTj3mYC1fgpW" target="_blank">
                            Click to check out my latest NFT on sale!
                        </a>
                    </div>
                    <div className={styles.lastButton}>
                        <Image src={coin} width={200} height={200} />
                    </div>
                </div>
            </div>

        </>
    )
}
