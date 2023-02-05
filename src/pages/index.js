import Alert from "@/components/Alert";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export async function getServerSideProps(context) {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

    return {
        props: {
            posts,
        },
    };
}

export default function Home({ posts }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
            </section>

            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {posts?.map(({ id, body, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`} as={`/posts/${id}`}>
                                {id}
                                <br />
                                {title}
                                <br />
                                {body}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
