import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { bundleMDX } from "mdx-bundler"
import { getMDXComponent } from "mdx-bundler/client"
import rehypePrism from "rehype-prism-plus"
import fs from "fs"
import React from "react"
import Head from "next/head"
import styles from "./posts.module.css"
import { ParsedUrlQuery } from "querystring"

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
                <meta charSet="UTF-8" />
                <meta name="author" content={frontmatter.author} />
                <meta name="keywords" content={frontmatter.keywords} />
            </Head>
            <main className={styles.postContainer}>
                <header>
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.author}</p>
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
            paths.push({ params: { category: category, name: post.replace(".mdx", "") }})
        })
    })

    return {
        paths: paths,
        fallback: false
    }
}

export default PostPage