import styles from './layout.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import homeFavicon from "../public/home.ico";

export default function Layout({ children, home, about, projects, blogs, archives }) {
    return (
        <div className={styles.main}>
            <Head>
                <link rel="icon" href={`${homeFavicon}`} />
                <meta
                    name="description"
                    content="biccsdev personal portafolio"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        "biccs dev's personal site",
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content="home" />
                <meta name="twitter:card" content="summary_large_image" />
                <title>Home</title>
            </Head>
            {(home) &&
                <header className={styles.headerContainer}>
                    <input className={styles.checkbox} type="checkbox" name="" id="" />
                    <div className={styles.hamburgerLines}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                    </div>
                    <div className={styles.menuItems}>
                        <h1 style={{ fontSize: '40px' }}>biccs<span style={{ color: '#7ae582' }}>dev</span></h1>
                        <div className={styles.items}>
                            <Link href='/'>
                                <h1 className={styles.selected}>HOME</h1>
                            </Link>
                            <Link href='/about'>
                                <h1>ABOUT ME</h1>
                            </Link>
                            <Link href='/projects'>
                                <h1>PROJECTS</h1>
                            </Link>
                            <Link href='/blogs'>
                                <h1>BLOGS</h1>
                            </Link>
                            <Link href='/archives'>
                                <h1>ARCHIVES</h1>
                            </Link>
                        </div>
                    </div>
                </header>
            }
            {
                (about) &&
                <header className={styles.headerContainer}>
                    <input className={styles.checkbox} type="checkbox" name="" id="" />
                    <div className={styles.hamburgerLines}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                    </div>
                    <div className={styles.menuItems}>
                        <h1 style={{ fontSize: '40px' }}>biccs<span style={{ color: '#7ae582' }}>dev</span></h1>
                        <div className={styles.items}>
                            <Link href='/'>
                                <h1 >HOME</h1>
                            </Link>
                            <Link href='/about'>
                                <h1 className={styles.selected}>ABOUT ME</h1>
                            </Link>
                            <Link href='/projects'>
                                <h1>PROJECTS</h1>
                            </Link>
                            <Link href='/blogs'>
                                <h1>BLOGS</h1>
                            </Link>
                            <Link href='/archives'>
                                <h1>ARCHIVES</h1>
                            </Link>
                        </div>
                    </div>
                </header>
            }
            {
                (projects) &&
                <header className={styles.headerContainer}>
                    <input className={styles.checkbox} type="checkbox" name="" id="" />
                    <div className={styles.hamburgerLines}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                    </div>
                    <div className={styles.menuItems}>
                        <h1 style={{ fontSize: '40px' }}>biccs<span style={{ color: '#7ae582' }}>dev</span></h1>
                        <div className={styles.items}>
                            <Link href='/'>
                                <h1 >HOME</h1>
                            </Link>
                            <Link href='/about'>
                                <h1>ABOUT ME</h1>
                            </Link>
                            <Link href='/projects'>
                                <h1 className={styles.selected}>PROJECTS</h1>
                            </Link>
                            <Link href='/blogs'>
                                <h1>BLOGS</h1>
                            </Link>
                            <Link href='/archives'>
                                <h1>ARCHIVES</h1>
                            </Link>
                        </div>

                    </div>
                </header>
            }
            {
                (blogs) &&
                <header className={styles.headerContainer}>
                    <input className={styles.checkbox} type="checkbox" name="" id="" />
                    <div className={styles.hamburgerLines}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                    </div>
                    <div className={styles.menuItems}>
                        <h1 style={{ fontSize: '40px' }}>biccs<span style={{ color: '#7ae582' }}>dev</span></h1>
                        <div className={styles.items}>
                            <Link href='/'>
                                <h1 >HOME</h1>
                            </Link>
                            <Link href='/about'>
                                <h1>ABOUT ME</h1>
                            </Link>
                            <Link href='/projects'>
                                <h1>PROJECTS</h1>
                            </Link>
                            <Link href='/blogs'>
                                <h1 className={styles.selected}>BLOGS</h1>
                            </Link>
                            <Link href='/archives'>
                                <h1>ARCHIVES</h1>
                            </Link>
                        </div>

                    </div>
                </header>
            }
            {
                (archives) &&
                <header className={styles.headerContainer}>
                    <input className={styles.checkbox} type="checkbox" name="" id="" />
                    <div className={styles.hamburgerLines}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                    </div>
                    <div className={styles.menuItems}>
                        <h1 style={{ fontSize: '40px' }}>biccs<span style={{ color: '#7ae582' }}>dev</span></h1>
                        <div className={styles.items}>
                            <Link href='/'>
                                <h1 >HOME</h1>
                            </Link>
                            <Link href='/about'>
                                <h1>ABOUT ME</h1>
                            </Link>
                            <Link href='/projects'>
                                <h1>PROJECTS</h1>
                            </Link>
                            <Link href='/blogs'>
                                <h1>BLOGS</h1>
                            </Link>
                            <Link href='/archives'>
                                <h1 className={styles.selected}>ARCHIVES</h1>
                            </Link>
                        </div>
                    </div>
                </header>
            }
            <main className={styles.mainContainer}>{children}</main>
        </div >
    );
}