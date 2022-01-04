import Link from "next/link";
import { FC } from "react";
import styles from "./Nav.module.css"

const Nav: FC = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a><img className={styles.logo} src="/icons/logo.svg" alt="Logo" /></a>
            </Link>
            <div className={styles.links}>
                <Link href="/courses">
                    <a><h1>Courses</h1></a>
                </Link>
                <Link href="/languages">
                    <a><h1>Languages</h1></a>
                </Link>
            </div>
            
        </nav>
    )
}

export default Nav