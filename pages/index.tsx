import { NextPage } from "next"
import Link from "next/link"
import TextLoop from "react-text-loop"
import { useEffect } from "react"
import styles from "../styles/home.module.css"

const IndexPage: NextPage = () => {

    useEffect(() => {
        const video = document.getElementById("hero-video")
        if (!video) return
        video.addEventListener("ended", async (event) => {
            const firstHero = document.getElementById("first-hero")
            if (!firstHero) return
            firstHero.classList.add(styles.fade)
            
            await new Promise(resolve => setTimeout(resolve, 300))

            firstHero.remove()
        })
    }, [])

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.firstHero} id="first-hero">
                    <video autoPlay muted id="hero-video">
                        <source src="logo.mp4" type="video/mp4" />
                    </video>
                </div>
                
                <div className={styles.afterHero}>
                    <h1>
                        Courses That Teach You <br></br>How To{" "}
                        <TextLoop>
                            <span>Think Like</span>
                            <span>Work Like</span>
                            <span>Become</span>
                        </TextLoop>
                        <span className={styles.gradientText}>A Developer</span>
                    </h1>
                    <h1><span className="red">🚫</span>Not Just How To Write Code<span className="red">🚫</span></h1>
                    <Link href="/courses">
                        <a className={styles.button}><strong>Learn For Free</strong></a>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default IndexPage