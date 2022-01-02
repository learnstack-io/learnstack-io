import { FC } from "react";

const KeyBlock: FC = (props) => {
    return (
        <div className="key-block">
            <img className="key-icon" src={`/icons/warning.svg`} />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default KeyBlock