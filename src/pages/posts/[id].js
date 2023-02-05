import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "@/styles/utils.module.css";

export async function getStaticPaths() {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

    return {
        props: {
            post,
        },
    };
}

export default function Post({ post }) {
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1 className={utilStyles.headingXl}>{post.id}</h1>
            <h2 className={utilStyles.headingLg}>{post.title}</h2>
            <p className={utilStyles.lightText}>{post.body}</p>
        </Layout>
    );
}
