import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Blog() {
    const latestPost = "";
    const latestPostDescription = '';
    const latestPostImageUrl = '';
    return (
        <Layout blogs>
            <Head>
                <link rel='shortcut icon' href='/blogs.ico' />
                <title>
                    Blog about software development and technology in general | Web 3 | Web development | Virtual Reality
                </title>
                <meta
                    name="description"
                    content="Tech blog written by a developer"
                    key="desc"
                />
                <meta property="og:title" content={`biccsdev's blog | Check the latest post! ${latestPost}`} />
                <meta
                    property="og:description"
                    content={`${latestPostDescription}`}
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
        </Layout>
    )
}