import { FC } from "react";

interface CodeTitleProps {
    name: string;
    language: string;
}

const CodeTitle: FC<CodeTitleProps> = (props) => {
    return (
        <div className="code-title">
            <img className="code-icon" src={`/icons/languages/${props.language}.svg`} />
            <h2 className="code-file-name">{props.name}</h2>
        </div>
    )
}

export default CodeTitle