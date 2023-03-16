import Layout from "../../components/layout";
import styles from "../../styles/Posts.module.css";

export default function Post({ postData }) {
    if (!postData) {
        return <h1>Loading...</h1>;
    }
    const { title, author, content } = postData[0];
    return (
        <Layout blogs>
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <h1>{title}</h1>
                    <h3>Author: @{author}</h3>
                </div>
                <p>{content}</p>
            </div>

        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/blog");
    const data = await res.json();
    const paths = data.map((item) => ({ params: { id: item._id } }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch("http://localhost:3000/blog");
    const data = await res.json();
    const postData = data.filter((item) => item._id === params.id);
    return {
        props: {
            postData,
        },
    };
}
