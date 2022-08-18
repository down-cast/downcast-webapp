import {Page} from "../../utils/PageWithLayout";
import {
    LayoutWithNavAndFooter
} from "../../components/layouts/layout-with-nav-and-footer/LayoutWithNavAndFooter.component";
import styles from "/src/styles/contribute/Contribute.module.scss";
import classNames from "classnames";
import {FC} from "react";

enum CardStyle {
    primary,
    secondary,
    tertiary
}

const CarHeader: FC<{ prefix: string, text: string, style: CardStyle }> =
    ({prefix, text, style}) => {
        const cardStyle = style === CardStyle.primary ? styles.primary :
            style === CardStyle.secondary
                ? styles.secondary : styles.tertiary;

        return <div className={styles.card}>
            <div className={classNames(styles.cardHeader, cardStyle)}>
                <span className={styles.cardNumber}>{prefix}</span>
                <span className={classNames("headline2")}>{text}</span>
            </div>
        </div>;
    }

export const Contribute: Page = () => {
    return <div className={styles.content}>
        <ContributeHeader/>
        <div className={styles.steps}>
            <CarHeader prefix={"1"} text={"Create an Account"} style={CardStyle.primary}/>
            <CarHeader prefix={"2"} text={"Write the Article"} style={CardStyle.secondary}/>
            <CarHeader prefix={"3"} text={"Submit for Review"} style={CardStyle.tertiary}/>
        </div>
    </div>
}

const ContributeHeader: FC = () => {
    return <div className={styles.header}>
        <div className={styles.headerContent}>
            <h3 className={classNames(styles.title, "headline1")}>Have an article in mind?</h3>
            <p className={classNames(styles.subtitle, "headline5")}>
                At LOGO we make contributing very easy, just follow the three steps below and have a positive impact on
                the community
            </p>
        </div>
        <span className={classNames(styles.logo)}>&lt;/&gt; </span>
    </div>;
}

Contribute.layout = LayoutWithNavAndFooter;

export default Contribute;