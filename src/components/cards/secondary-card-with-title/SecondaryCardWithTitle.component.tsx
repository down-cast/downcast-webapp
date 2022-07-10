import {FC, PropsWithChildren} from "react";
import styles from "./SecondaryCardWithTitle.module.scss";
import classNames from "classnames";


interface SecondaryCardWithTitleProps {
    title: string
}

export const SecondaryCardWithTitle: FC<PropsWithChildren<SecondaryCardWithTitleProps>> = (props) => {
    return <div className={styles.card}>
        <h3 className={classNames(styles.title, "headline5")}>
            {props.title}
        </h3>
        {props.children}
    </div>
}