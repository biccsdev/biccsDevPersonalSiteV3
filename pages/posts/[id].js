import Layout from "../../components/layout";

export default function Post() {
    return (<Layout blogs></Layout>);

}

export async function getStaticPaths() {
    const paths = await fetch('http://localhost:3000/blog');
    const data = await paths.json();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

}