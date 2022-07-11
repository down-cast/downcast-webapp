import {FC} from "react";
import styles from "./UserInfoCard.module.scss"
import Image from "next/image";
import classNames from "classnames";
import Facebook from "/public/assets/icons/social/facebook.svg";
import Twitter from "/public/assets/icons/social/twitter.svg";
import Linkedin from "/public/assets/icons/social/linkedin.svg";
import Email from "/public/assets/icons/social/email.svg";
import Github from "/public/assets/icons/social/github.svg";

interface UserInfoCardProps {
    name: string
}

export const UserInfoCard: FC<UserInfoCardProps> = (props) => {
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
                <Facebook style={{fill: "var(--color-on-surface)"}}/>
                <Github style={{fill: "var(--color-on-surface)"}}/>
                <Linkedin style={{fill: "var(--color-on-surface)"}}/>
                <Twitter style={{fill: "var(--color-on-surface)"}}/>
                <Email style={{fill: "var(--color-on-surface)"}}/>
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