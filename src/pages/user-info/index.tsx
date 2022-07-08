import {NextPage} from "next";
import styles from "/src/styles/user-info/UserInfo.module.scss"
import {UserInfoCard} from "../../components/cards/user-info-card/UserInfoCard.component";
import {CardSection} from "../../components/cards/card-section/CardSection.component";
import {ArticleCard, ArticleCardProps} from "../../components/cards/article-card/ArticleCard.component";

const cards: ArticleCardProps[] = [
    {
        author: "John doe",
        date: new Date(Date.now()),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae fermentum elit sagittis, morbi blandit in libero. Eget ac consectetur amet non cursus Eget ac consectetur amet non cursus Eget ac consectetur amet non cursus",
        imageUri: "/assets/jwt.png",
        timeToRead: 10,
        title: "Authentication with JWT",
        authorImageUri: "/assets/avatar.png"
    },
    {
        author: "John doe",
        date: new Date(Date.now()),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae fermentum elit sagittis, morbi blandit in libero. Eget ac consectetur amet non cursus Eget ac consectetur amet non cursus Eget ac consectetur amet non cursus",
        imageUri: "/assets/nextjs.png",
        timeToRead: 10,
        title: "NextJS: First Steps",
        authorImageUri: "/assets/avatar.png"
    },
    {
        author: "John doe",
        date: new Date(Date.now()),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae fermentum elit sagittis, morbi blandit in libero. Eget ac consectetur amet non cursus Eget ac consectetur amet non cursus Eget ac consectetur amet non cursus",
        imageUri: "/assets/terraform.png",
        timeToRead: 10,
        title: "Manage your cluster",
        authorImageUri: "/assets/avatar.png"
    },
    {
        author: "John doe",
        date: new Date(Date.now()),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae fermentum elit sagittis, morbi blandit in libero. Eget ac consectetur amet non cursus Eget ac consectetur amet non cursus Eget ac consectetur amet non cursus",
        imageUri: "/assets/net6.png",
        timeToRead: 10,
        title: "Building apps with .NET 6 and other technologies such as",
        authorImageUri: "/assets/avatar.png"
    }
]


const UserInfo: NextPage = () => {
    return (
        <div className={styles.content}>
            <UserInfoCard name={"John Doe"}></UserInfoCard>
            <div className={styles.cardSections}>
                <CardSection title={"Latest Articles"} cards={
                    cards.map(card => <ArticleCard key={card.imageUri} {...card} />)
                }></CardSection>
                <CardSection title={"Latest Guides"} cards={
                    cards.map(card => <ArticleCard key={card.imageUri} {...card} />)
                }></CardSection>
            </div>
        </div>
    );
};

export default UserInfo;