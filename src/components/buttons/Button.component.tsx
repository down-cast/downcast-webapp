import { FC } from "react";
import styles from "./Button.module.scss";

enum ButtonType {
  primary,
  secondary,
  text,
}

interface ButtonProps {
  type: ButtonType;
  text: string;
  iconPath?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  let buttonStyle;
  switch (props.type) {
    case ButtonType.primary:
      buttonStyle = styles.primary;
      break;
    case ButtonType.secondary:
      buttonStyle = styles.secondary;
      break;
    case ButtonType.text:
      buttonStyle = styles.textButton;
      break;
  }
  return (
    <button className={buttonStyle}>
      <div className={`${styles.text} body-large`}>{props.text}</div>
    </button>
  );
};

export default ButtonType;
