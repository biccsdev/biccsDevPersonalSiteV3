import styles from './layout.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import homeFavicon from "../public/home.ico";

export default function Layout({ children }) {
    const router = useRouter();
    const [selectedLink, setSelectedLink] = useState('');

    const navLinks = [
        { path: '/', text: 'HOME' },
        { path: '/about', text: 'ABOUT ME' },
        { path: '/projects', text: 'PROJECTS' },
        { path: '/blogs', text: 'BLOGS' },
        { path: '/archives', text: 'ARCHIVES' },
    ];

    useEffect(() => {
        setSelectedLink(router.pathname);
    }, [router.pathname]);

    return (
        <div className={styles.main}>
            <Head>
                <link rel="icon" href={`${homeFavicon}`} />
                <meta
                    name="description"
                    content="biccs personal site"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        "biccs personal site",
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content="home" />
                <meta name="twitter:card" content="summary_large_image" />
                <title>Home</title>
            </Head>
            <header className={styles.headerContainer}>
                <input className={styles.checkbox} type="checkbox" name="" id="" />
                <div className={styles.hamburgerLines}>
                    <span className={`${styles.line} ${styles.line1}`}></span>
                    <span className={`${styles.line} ${styles.line2}`}></span>
                    <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
                <div className={styles.menuItems}>
                    <div className={styles.items}>
                        {navLinks.map((link) => (
                            <Link key={link.path} href={link.path}>
                                <h1 className={selectedLink === link.path ? styles.selected : ''}>
                                    {link.text}
                                </h1>
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
            <main className={styles.mainContainer}>{children}</main>
        </div >
    );
}