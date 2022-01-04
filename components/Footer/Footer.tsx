import Link from "next/link";
import { FC } from "react";
import styles from "./Footer.module.css"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Built with
                <Link href="https://nextjs.org/">
                    <a><img className={styles.icon} src="/icons/languages/next.svg" alt="NextJS" /></a>
                </Link>
                <br></br>
                Copyright © 2021 - {new Date().getFullYear()} Jeffrey Shum. All Rights Reserved.
            </p>
            <div className={styles.linkContainer}>
                <Link href="/privacy">
                    Privacy Policy
                </Link>
                <Link href="https://ko-fi.com/jeffreyshum">
                    Donate
                </Link>
                <Link href="https://github.com/learnstack-io/learnstack-io">
                    GitHub
                </Link>
            </div>
            <Link href="/">
                <a><img className={styles.logo} src="/icons/logo.svg/" alt="Logo" /></a>
            </Link>
        </footer>
    )
}

export default Footer