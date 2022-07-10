import {FC} from "react";
import {SecondaryCardWithTitle} from "../secondary-card-with-title/SecondaryCardWithTitle.component";
import styles from "./ContributorsCard.module.scss";
import Image from "next/image";
import classNames from "classnames";

export interface ContributorsProps {
    contributors: ContributorProps[]
}

export const ContributorsCard: FC<ContributorsProps> = ({contributors}) => {
    return <SecondaryCardWithTitle title={"Top Contributors"}>
        <ul className={styles.contributors}>
            {contributors.map((contributor, index) => {
                return <Contributor key={index} {...contributor}/>;
            })}
        </ul>
    </SecondaryCardWithTitle>;
}


interface ContributorProps {
    imageSrc: string
    name: string
    likes: number
    nrOfArticles: number
}

const Contributor: FC<ContributorProps> = (props) => {
    return <li className={styles.contributor}>
        <div className={styles.avatar}>
            <Image
                alt={"Avatar image"}
                src={props.imageSrc}
                width={48}
                height={48}
                objectFit={"cover"}/>
        </div>
        <div className={styles.info}>
            <h3 className={classNames(styles.name, "subhead1")}>{props.name}</h3>
            <p className={classNames(styles.subInfo, "body-medium")}>
                {`${props.nrOfArticles} Articles  ª  ${props.likes} Likes`}
            </p>
        </div>
    </li>
}