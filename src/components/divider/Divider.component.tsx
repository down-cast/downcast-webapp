import {FC, ReactNode} from "react";
import styles from "./Divider.module.scss";
import classNames from "classnames";


interface DividerProps {
    text?: string
}

export const Divider: FC<DividerProps> = ({text}) => {

    let divider: ReactNode;

    if (text) {
        divider = <>
            <div className={styles.line}/>
            <div className={classNames(styles.text, "body-medium")}>{text}</div>
            <div className={styles.line}/>
        </>
    } else {
        divider = <div className={styles.line}></div>
    }

    return <div className={styles.divider}>
        {divider}
    </div>
}