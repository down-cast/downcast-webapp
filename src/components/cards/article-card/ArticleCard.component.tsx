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

const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

export const ArticleCard: FC<ArticleCardProps> = (props) => {
    return <div className={styles.card}>
        <div className={styles.image}>
            <Image src={props.imageUri} layout={"fill"} objectFit={"cover"}></Image>
        </div>
        <div className={styles.content}>
            <div className={styles.contentAndDescription }>
                <h3 className={classNames(styles.title, "headline5")}>
                    {props.title}
                </h3>
                <p className={classNames("body2", styles.description)}>
                    {props.description}
                </p>
            </div>
            <div className={styles.author}>
                <div className={styles.image}>
                    <Image src={props.authorImageUri} height={36} width={36} objectFit={"cover"}></Image>
                </div>
                <div>
                    <h3 className={classNames(styles.name, "body-medium")}>
                        {props.author}
                    </h3>
                    <h3 className={classNames("body-medium", styles.timeInfo)}>
                        {`${props.date.toLocaleDateString('en-US', dateOptions)} 
                        * 
                        ${props.timeToRead} min to read`}
                    </h3>
                </div>
            </div>
        </div>
    </div>
}


