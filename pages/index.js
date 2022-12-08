import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

Home.siteTitle = "";
Home.description = "";
Home.faviconUrl = "public/home.ico";
export default function Home() {
  return (
    <Layout home></Layout>
  )
}
