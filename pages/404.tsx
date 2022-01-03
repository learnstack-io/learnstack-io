import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const NotFoundPage: FC = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: "10% auto"
        }}>
            <Head>
                <title>Page Could Not Be Found</title>
                <meta property="og:description" content="Free and simple courses written by a developer who knows what's important and skips the rest." />
                <meta name="description" content="Free and simple courses written by a developer who knows what's important and skips the rest." />
            </Head>
            <h1 style={{
                textAlign: "center",
                padding: "1rem"
            }}>
                The Page Being Requested Could Not Be Found.
            </h1>
            <Link href="/">
                Return To Home
            </Link>
        </div>
    )
}

export default NotFoundPage