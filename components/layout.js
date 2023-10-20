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

    const [isDarkTheme, setIsDarkTheme] = useState(undefined);
    const handleToggle = (event) => {
        setIsDarkTheme(event.target.checked);
    };
    const getMediaQueryPreference = () => {
        const mediaQuery = "(prefers-color-scheme: dark)";
        const mql = window.matchMedia(mediaQuery);
        const hasPreference = typeof mql.matches === "boolean";
        if (hasPreference) {
            return mql.matches ? "dark" : "light";
        }
    };
    const storeUserSetPreference = (pref) => {
        localStorage.setItem("theme", pref);
    };
    const getUserSetPreference = () => {
        return localStorage.getItem("theme");
    };
    useEffect(() => {
        const userSetPreference = getUserSetPreference();
        if (userSetPreference !== null) {
            setIsDarkTheme(userSetPreference === "dark");
        } else {
            const mediaQueryPreference = getMediaQueryPreference();
            setIsDarkTheme(mediaQueryPreference === "dark");
        }
    }, []);
    useEffect(() => {
        if (typeof isDarkTheme !== "undefined") {
            if (isDarkTheme) {
                storeUserSetPreference("dark");
                console.log(localStorage.getItem("theme"))
            } else {
                storeUserSetPreference("light");
                console.log(localStorage.getItem("theme"))

            }
        }
    }, [isDarkTheme]);

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

    useEffect(() => {
        // Check if the current route matches a /post/ route and select the 'BLOGS' link accordingly
        if (router.pathname.startsWith('/posts/')) {
            setSelectedLink('/blogs');
        }
    }, [router.pathname]);

    return (
        <>
            {/* <div className={styles.main}> */}
            <div className={!isDarkTheme ? styles.main : styles.mainDark}>
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
                        <label>
                            <input
                                type="checkbox"
                                checked={isDarkTheme}
                                onChange={handleToggle}
                            />
                            Dark
                        </label>
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
                {/* <main className={styles.mainContainer}>{children}</main> */}
                <main className={!isDarkTheme ? styles.mainContainer : styles.mainContainerDark}>{children}</main>

            </div >
        </>
    );
}