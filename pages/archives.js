import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Archive() {
    return (
        <Layout archives>
            <Head>
                <link rel='shortcut icon' href='/archive.ico' />
                <title>
                    Software Engineer's portfolio | Is it important to iterate over your software releases?
                </title>
                <meta
                    name="description"
                    content="Iteration over past versions of my portfolio"
                    key="desc"
                />
                <meta property="og:title" content="Is it important to iterate over your software releases?" />
                <meta
                    property="og:description"
                    content="Check out the past versions of my portfolio and distinguish the difference over the iterations."
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
        </Layout>
    )
}