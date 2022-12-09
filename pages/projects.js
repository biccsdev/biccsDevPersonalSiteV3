import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Project() {
    return (
        <Layout projects>
            <Head>
                <link rel='shortcut icon' href='/projects.ico' />
                <title>
                    Junior developer projects | Web 2, Web 3, Frontend, Backend, APIS
                </title>
                <meta
                    name="description"
                    content="Projects portfolio"
                    key="desc"
                />
                <meta property="og:title" content="Junior developer projects | Web 2, Web 3, Frontend, Backend, APIS" />
                <meta
                    property="og:description"
                    content={`Check out @biccsdev's latest public projects`}
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
        </Layout>
    )
}