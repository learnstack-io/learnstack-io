import styles from "../styles/courses.module.css"
import courseList from "./courses.json"
import CourseCard from "../components/Cards/CourseCard/CourseCard"
import Head from "next/head"
import { NextPage } from "next"

const CoursesPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Courses</title>
                <meta name="keywords" content="Free, Programming, Courses" />
                <meta property="og:title" content="Courses" />
                <meta property="og:description" content="Free and simple courses written by a developer who knows what's important and skips the rest." />
                <meta name="description" content="Free and simple courses written by a developer who knows what's important and skips the rest." />
            </Head>
            <header className={styles.header}>
                <h1>All Courses</h1>
            </header>
            <div className={styles.cardContainer}>
                {courseList.map((data) => <CourseCard {...data} />)}
            </div>
            <h1 className={styles.center}>With More Coming Soon</h1>
        </>
    )
}

export default CoursesPage