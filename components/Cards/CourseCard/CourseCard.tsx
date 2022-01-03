import Link from "next/link";
import { FC } from "react";
import styles from "./CourseCard.module.css"

interface CourseCardProps {
    title: string;
    description: string;
    folder: string;
    languages: string[];
}

const CourseCard: FC<CourseCardProps> = (props) => {
    return (
        <Link href={`/posts/${props.folder}`}>
        <a className={styles.card}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className={styles.languageContainer}>
                {props.languages.map((language) => {
                return <img
                    className={styles.language}
                    src={`/icons/languages/${language}.svg`}
                    alt={`${language} Tag`}
                    title={language}
                />})
                }
            </div>
        </a>
        </Link>
    )
}

export default CourseCard