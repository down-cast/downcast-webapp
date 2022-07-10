import type {NextPage} from "next";
import Footer from "../components/navigation/footer/Footer.component";
import NavBar from "../components/navigation/navbar/NavBar.component";
import styles from "../styles/Home.module.scss";
import {LandingPageBanner} from "../components/landing-page-banner/LandingPageBanner.component";
import {CardSection} from "../components/cards/card-section/CardSection.component";
import {ArticleCard} from "../components/cards/article-card/ArticleCard.component";
import {DummyCards} from "./user-info";
import {TopicsCard} from "../components/cards/topics-card/TopicsCard.component";
import {ContributorsCard, ContributorsProps} from "../components/cards/contributors-card/ContributorsCard.component";

const topics: string[] = [
    "Cloud",
    "Terraform",
    "Kubernetes",
    "Software Architecture",
    "C#",
    "Java",
    "Dart",
    "Flutter",
    ".NET 6",
    "Apigee",
    "Golang",
    "HAProxy",
    "Next.JS",
]

const contributors: ContributorsProps = {
    contributors: [
        {
            nrOfArticles: 10,
            imageSrc: "/assets/avatar.png",
            likes: 10,
            name: "John Doe"

        },
        {
            nrOfArticles: 1120,
            imageSrc: "/assets/avatar.png",
            likes: 13,
            name: "John Doe 2"

        }, {
            nrOfArticles: 1120,
            imageSrc: "/assets/avatar.png",
            likes: 13,
            name: "John Doe 2"

        }, {
            nrOfArticles: 1120,
            imageSrc: "/assets/avatar.png",
            likes: 13,
            name: "John Doe 2"

        }, {
            nrOfArticles: 1120,
            imageSrc: "/assets/avatar.png",
            likes: 13,
            name: "John Doe 2"

        },
    ]
}

const Home: NextPage = () => {
    return (
        <>
            <LandingPageBanner></LandingPageBanner>
            <div className={styles.content}>
                <div className={styles.primaryColumn}>
                    <CardSection title={"Latest Articles"} cards={
                        DummyCards.map(card => <ArticleCard key={card.imageUri} {...card} />)
                    }></CardSection>
                    <CardSection title={"Latest Guides"} cards={
                        DummyCards.map(card => <ArticleCard key={card.imageUri} {...card} />)
                    }></CardSection>
                </div>
                <div className={styles.secondaryColumn}>
                    <TopicsCard
                        title={"Popular Topics"}
                        topics={topics}></TopicsCard>
                    <ContributorsCard {...contributors}></ContributorsCard>
                </div>
            </div>
        </>
    );
};

export default Home;
