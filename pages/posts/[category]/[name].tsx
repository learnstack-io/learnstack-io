import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { bundleMDX } from "mdx-bundler"
import { getMDXComponent } from "mdx-bundler/client"
import rehypePrism from "rehype-prism-plus"
import fs from "fs"
import React from "react"
import Head from "next/head"
import styles from "./posts.module.css"

interface PostPageProps {
    code: string,
    frontmatter: { [key: string]: string }
}

const PostPage: NextPage<PostPageProps> = ({code, frontmatter}) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code])

    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
                <meta name="author" content={frontmatter.author} />
                <meta name="keywords" content={frontmatter.keywords} />
                <meta property="og:title" content={frontmatter.title} />
                <meta property="og:type" content="article" />
                <meta property="og:description" content={frontmatter.description} />
            </Head>
            <main className={styles.postContainer}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{frontmatter.title}</h1>
                    <div className={styles.headerBottom}>
                        <p className={styles.description}>{frontmatter.description}</p>
                        <a href={`/languages/${frontmatter.language}`}>
                            <img
                                className={styles.language}
                                src={`/icons/languages/${frontmatter.language.toLowerCase()}.svg`}
                                alt={`${frontmatter.language} Tag`}
                                title={frontmatter.language}
                            />
                        </a>
                    </div>
                </header>
                <Component />
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const { category, name } = params
    
    const source = `posts/${category}/${name}.mdx`
    const file = fs.readFileSync(source).toString()

    const { code, frontmatter } = await bundleMDX({
        source: file,
        xdmOptions(options, frontmatter) {
            options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism]

            return options
        },
    })

    return {
        props: {
            code,
            frontmatter
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = fs.readdirSync("posts")
    const paths: { params : { category: string, name: string}}[] = []

    categories.map((category) => {
        let posts = fs.readdirSync(`posts/${category}`)
        
        posts.forEach((post) => {
            if (post.split(".").pop() === "json") return
            paths.push({ params: { category: category, name: post.replace(".mdx", "") }})
        })
    })

    return {
        paths: paths,
        fallback: false
    }
}

export default PostPage