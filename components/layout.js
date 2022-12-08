import styles from './layout.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, home, about, projects, blogs, archives }) {
    return (
        <div className={styles.main}>
            <Head>
                <link rel="icon" href={children.faviconUrl} />
                <meta
                    name="description"
                    content={children.description}
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" key="title" content={children.siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            {(home) &&
                <header className={styles.headerContainer}>
                    <a href='/'>
                        <h1 className={styles.selected}>HOME</h1>
                    </a>
                    <a href='/about'>
                        <h1>ABOUT ME</h1>
                    </a>
                    <a href='/projects'>
                        <h1>PROJECTS</h1>
                    </a>
                    <a href='/blogs'>
                        <h1>BLOGS</h1>
                    </a>
                    <a href='/archive'>
                        <h1>ARCHIVE</h1>
                    </a>
                </header>
            }
            {(about) &&
                <header className={styles.headerContainer}>
                    <a href='/'>
                        <h1>HOME</h1>
                    </a>
                    <a href='/about'>
                        <h1 className={styles.selected}>ABOUT ME</h1>
                    </a>
                    <a href='/projects'>
                        <h1>PROJECTS</h1>
                    </a>
                    <a href='/blogs'>
                        <h1>BLOGS</h1>
                    </a>
                    <a href='/archive'>
                        <h1>ARCHIVE</h1>
                    </a>
                </header>
            }
            {(projects) &&
                <header className={styles.headerContainer}>
                    <a href='/'>
                        <h1 >HOME</h1>
                    </a>
                    <a href='/about'>
                        <h1>ABOUT ME</h1>
                    </a>
                    <a href='/projects'>
                        <h1 className={styles.selected}>PROJECTS</h1>
                    </a>
                    <a href='/blogs'>
                        <h1>BLOGS</h1>
                    </a>
                    <a href='/archive'>
                        <h1>ARCHIVE</h1>
                    </a>
                </header>
            }
            {(blogs) &&
                <header className={styles.headerContainer}>
                    <a href='/'>
                        <h1 >HOME</h1>
                    </a>
                    <a href='/about'>
                        <h1>ABOUT ME</h1>
                    </a>
                    <a href='/projects'>
                        <h1>PROJECTS</h1>
                    </a>
                    <a href='/blogs'>
                        <h1 className={styles.selected}>BLOGS</h1>
                    </a>
                    <a href='/archive'>
                        <h1>ARCHIVE</h1>
                    </a>
                </header>
            }
            {(archives) &&
                <header className={styles.headerContainer}>
                    <a href='/'>
                        <h1>HOME</h1>
                    </a>
                    <a href='/about'>
                        <h1>ABOUT ME</h1>
                    </a>
                    <a href='/projects'>
                        <h1>PROJECTS</h1>
                    </a>
                    <a href='/blogs'>
                        <h1>BLOGS</h1>
                    </a>
                    <a href='/archive'>
                        <h1 className={styles.selected}>ARCHIVE</h1>
                    </a>
                </header>
            }
            <main className={styles.mainContainer}>{children}</main>
        </div>
    );
}