import {FC} from "react";
import styles from "./TopicsCard.module.scss";
import classNames from "classnames";
import {SecondaryCardWithTitle} from "../secondary-card-with-title/SecondaryCardWithTitle.component";


type TopicsProps = {
    title: string
    topics: string[]
}

export const TopicsCard: FC<TopicsProps> = ({title, topics}) => {
    return <SecondaryCardWithTitle title={title}>
        <ul className={styles.topics}>
            {topics.map((topic, index) => <Topic key={index} name={topic}></Topic>)}
        </ul>
    </SecondaryCardWithTitle>;
}

interface TopicProps {
    name: string
}

const Topic: FC<TopicProps> = ({name}) => {
    return <li className={styles.topic}>{name}</li>
}