import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"
import fs from "fs"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./category.module.css"

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

const CategoryPage: FC<CategoryPageProps> = (props) => {
    const router = useRouter()

    const { category } = router.query
    
    return (
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
                        <li>
                            <Link href={`/posts/${category}/${post.file}`}>
                                {post.title}
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </main>
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
    // categories.forEach((category) => {
    //     let files = fs.readdirSync(`posts/${category}`)
        
    //     files.forEach((file) => {
    //         if (file.split(".").pop() == "json") {
    //             console.log(file)
    //         }
    //     })
    // })

    return {
        paths: paths,
        fallback: false
    }
}
export default CategoryPage