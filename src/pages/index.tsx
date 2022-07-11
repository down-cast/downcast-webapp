import type {NextPage} from "next";
import styles from "../styles/Home.module.scss";
import {LandingPageBanner} from "../components/landing-page-banner/LandingPageBanner.component";
import {CardSection} from "../components/cards/card-section/CardSection.component";
import {ArticleCard} from "../components/cards/article-card/ArticleCard.component";
import {DummyCards} from "./user-info";
import {TopicsCard} from "../components/cards/topics-card/TopicsCard.component";
import {ContributorsCard, ContributorsProps} from "../components/cards/contributors-card/ContributorsCard.component";
import {Page} from "../utils/PageWithLayout";
import {Component} from "react";
import {
    LayoutWithNavAndFooter
} from "../components/layouts/layout-with-nav-and-footer/LayoutWithNavAndFooter.component";

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

const Home: Page = () => {
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

Home.layout = LayoutWithNavAndFooter

export default Home;