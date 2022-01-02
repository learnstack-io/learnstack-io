import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styles from "./Nav.module.css"

const Nav: FC = () => {
    const [mobile, setMobile] = useState(false)

    const handleClick = () => setMobile(!mobile)

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <img className={styles.logo} src="/icons/logo.svg" alt="Logo" />
            </Link>
        </nav>
    )
}

export default Nav