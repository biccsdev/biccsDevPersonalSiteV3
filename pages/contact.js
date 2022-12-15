import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Layout from '../components/layout';

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name,
            email,
            message,
        };
        fetch('/api/contactApi', {
            method: 'post',
            body: JSON.stringify(data),
        }).then(() => {
            alert("Message sent successfully!");
        });
    };

    return (
        <Layout home>
            <div>
                <Head>
                    <title>Get in touch</title>
                    <meta name="description" content="Get in touch with Victor Torres form" />
                    <link rel="icon" href="/home.ico" />
                </Head>
                <main className={styles.main}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            type="text"
                            rows="4"
                            onChange={e => setMessage(e.target.value)}
                        />
                        <button className={styles.buttonContainer} role='button' type="submit">Send</button>
                    </form>
                </main>
            </div>
        </Layout>

    );
}