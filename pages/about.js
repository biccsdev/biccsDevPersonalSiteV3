import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <Layout about>
            <Head>
                <link rel='shortcut icon' href='/about.ico' />
                <title>
                    Who is @biccsdev? | Get in touch | Download Resume
                </title>
                <meta
                    name="description"
                    content="Latest version of my resume, find the links to all my social media ( github, twitter, linkedin, stackoverflow... ) "
                    key="desc"
                />
                <meta property="og:title" content="Who is @biccsdev?" />
                <meta
                    property="og:description"
                    content="Check out the latest version of biccsdev's resume, find the links to all my social media ( github, twitter, linkedin, stackoverflow... )"
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
            </Head>
        </Layout>
    )
}