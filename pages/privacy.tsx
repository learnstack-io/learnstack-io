import { NextPage } from "next";

const PrivacyPage: NextPage = () => {
    return (
        <main style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            textAlign: "center"
        }}>
            <h1>We Do NOT Collect Any Personal Data</h1>
            <p style={{
                color: "var(--text-color-file-name)"
            }}>
                Learn Stack (learnstack.io) doesn&apos;t collect, log, or share any personal information.
                <br></br>
                We can&apos;t even remember what we had for lunch, we sure don&apos;t to touch your data.
                <br></br>
                Not that your data is bad or anything. . . 
                <br></br>
            </p>
            <h2 style={{
                marginTop: "30%"
            }}>You&apos;re the one learning. We don&apos;t need to learn about you.</h2>
        </main>
    )
}

export default PrivacyPage