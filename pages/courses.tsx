import { FC } from "react";
import styles from "../styles/courses.module.css"
import courseList from "./courses.json"
import CourseCard from "../components/Cards/CourseCard/CourseCard";

const CoursesPage: FC = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>All Courses</h1>
            </header>
            <div className={styles.cardContainer}>
                {courseList.map((data) => <CourseCard {...data} />)}
            </div>
        </>
    )
}

export default CoursesPage