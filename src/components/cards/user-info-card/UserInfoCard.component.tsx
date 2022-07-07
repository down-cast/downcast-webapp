import {FC} from "react";
import styles from "./UserInfoCard.module.scss"
import Image from "next/image";
import classNames from "classnames";

interface UserInfoCardProps {
    name: string
}

export const UserInfoCard: FC<UserInfoCardProps> = (props) => {
    const socialIconsSources = [
        "/assets/icons/social/facebook.svg",
        "/assets/icons/social/github.svg",
        "/assets/icons/social/linkedin.svg",
        "/assets/icons/social/twitter.svg",
        "/assets/icons/social/email.svg",
    ]

    return <div className={styles.card}>
        <div className={styles.image}>
            <Image
                src={"/assets/avatar.png"}
                objectFit={'cover'}
                width={220} height={220}></Image>
        </div>
        <div className={styles.mainInfo}>
            <div className={classNames(
                "headline3",
                styles.name)}>
                {props.name}
            </div>
            <div className={styles.social}>
                {socialIconsSources.map((src) => {
                    return <Image key={src} src={src} width={24} height={24}/>;
                })}
            </div>
            <div className={styles.likes}>200+ likes</div>
        </div>
        <div className={styles.description}>
            <h3 className={classNames(
                "headline4",
                styles.title)}>
                About
            </h3>
            <span className={classNames("body-large", styles.text)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing posuere in feugiat feugiat euismod vulputate venenatis eget.
                Arcu, arcu a curabitur et. Et lacus pretium volutpat, phasellus enim.
                At sit at maecenas risus eu vitae,porta sit.
                Vitae donec enim cursus vitae nunc feugiat quis.
            </span>
        </div>


    </div>
}