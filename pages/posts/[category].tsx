import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import fs from "fs"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./category.module.css"
import Head from "next/head"

interface CategoryPageProps {
    category: string,
    data: {
        sequenceTitle: string,
        languages: string[],
        sequence: {
            title: string,
            file: string
        }[]
    }
}

const CategoryPage: NextPage<CategoryPageProps> = (props) => {
    const router = useRouter()

    const { category } = router.query
    
    return (
        <>
        <Head>
            <title>{props.data.sequenceTitle}</title>
            <meta property="og:description" content="Free and simple courses written by a developer who knows what's important and skips the rest." />
            <meta name="description" content="Free and simple courses written by a developer who knows what's important and skips the rest." />
        </Head>
        <main className={styles.mainContainer}>
            <h1 className={styles.title}>{props.data.sequenceTitle}</h1>
            <div className={styles.languageContainer}>
                {props.data.languages.map((language) => {
                    return <img
                        className={styles.language}
                        src={`/icons/languages/${language}.svg`}
                        alt={`${language} Tag`}
                        title={language}
                    />})
                }
            </div>
            <ol className={styles.list}>
                {props.data.sequence.map((post) => {
                    return (
                        <li key={post.title}>
                            <Link href={`/posts/${category}/${post.file}`}>
                                {post.title}
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async({ params }: any) => {
    const { category } = params
    
    const data = require(`../../posts/${category}/sequence.json`)

    return {
        props: {
            category: category,
            data: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = fs.readdirSync("posts")
    const paths: { params: { category: string }}[] = []

    categories.forEach((category) => {
        paths.push({ params: { category: category }})
    })

    return {
        paths: paths,
        fallback: false
    }
}
export default CategoryPage