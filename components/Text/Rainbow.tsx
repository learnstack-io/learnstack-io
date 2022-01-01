import { FC } from "react";

interface Rainbow {
    text: string;
}

const Rainbow: FC<Rainbow> = (props) => {
    return (
        <span className="rainbow-text">
            {props.text}
        </span>
    )
}

export default Rainbow