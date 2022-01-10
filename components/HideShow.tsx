import { FC, useState } from "react"

const HideShow: FC = (props) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className="hide-show-container">
            <button className="hide-show-button" onClick={handleClick}>{active ? "Hide" : "Show"}</button>
            {
                active &&
                <div>
                    {props.children}
                </div>
            }
        </div>
    )
}

export default HideShow