import {FC, ReactNode} from "react";
import {ReactNodeArray} from "prop-types";
import styles from "./CardSection.module.scss";
import classNames from "classnames";

interface CardSectionProps {
    title: ReactNode
    cards: ReactNodeArray
}

export const CardSection: FC<CardSectionProps> = (props) => {
    return <div className={styles.cardSection}>
        <div className={classNames(styles.title, "headline4")}>{props.title}</div>
        <div className={styles.cards}>{props.cards}</div>
    </div>
}