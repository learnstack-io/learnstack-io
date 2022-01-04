import { FC } from "react";

const KeyBlock: FC = (props) => {
    return (
        <div className="key-block">
            <img className="key-icon" src={`/icons/warning.svg`} alt="Warning Icon" />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default KeyBlock