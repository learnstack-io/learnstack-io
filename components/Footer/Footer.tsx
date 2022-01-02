import Link from "next/link";
import { FC } from "react";
import styles from "./Footer.module.css"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Built with
                <Link href="https://nextjs.org/">
                    <img className={styles.icon} src="/icons/languages/next.svg" alt="NextJS" />
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
            </div>
            <Link href="/">
                <img className={styles.logo} src="/icons/logo.svg/" alt="Logo" />
            </Link>
        </footer>
    )
}

export default Footer