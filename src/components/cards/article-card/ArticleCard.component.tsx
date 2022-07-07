import {FC} from "react";
import styles from "./ArticleCard.module.scss";
import Image from "next/image";
import classNames from "classnames";

export interface ArticleCardProps {
    title: string
    description: string
    author: string
    date: Date
    timeToRead: number
    imageUri: string
    authorImageUri: string
}

export const ArticleCard: FC<ArticleCardProps> = (props) => {
    return <div className={styles.card}>
        <div className={styles.image}>
            <Image src={props.imageUri} layout={"fill"} objectFit={"cover"}></Image>
        </div>
        <div className={styles.content}>
            <h3 className={classNames(
                styles.title,
                "headline5")}>
                {props.title}
            </h3>
            <p className={classNames(
                "body2",
                styles.description)}>
                {props.description}
            </p>
            <div className={styles.authorInfo}>
                <Image className={styles.authorImage} src={props.authorImageUri} height={36} width={36} objectFit={"cover"}></Image>
            </div>
        </div>
    </div>
}


