import {FC} from "react";
import styles from "./Button.module.scss";

enum ButtonType {
    primary,
    secondary,
    text
}

interface ButtonProps {
    type: ButtonType;
    text: string;
    iconPath?: string;
    height?: string
    width?: string
}

export const Button: FC<ButtonProps> = (props) => {
    let buttonStyle;
    if (props.type === ButtonType.primary) {
        buttonStyle = styles.primary;
    } else if (props.type === ButtonType.secondary) {
        buttonStyle = styles.secondary;
    } else if (props.type === ButtonType.text) {
        buttonStyle = styles.textButton;
    }

    return (
        <button className={buttonStyle} style={{
            width: props.width,
            height: props.height
        }}>
            <div className={`${styles.text} body-large`}>
                {props.text}
            </div>
        </button>
    );
};

export default ButtonType;
