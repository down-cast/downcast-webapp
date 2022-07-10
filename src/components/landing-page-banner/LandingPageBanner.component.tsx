import styles from "./LandingPageBanner.module.scss";
import {FC} from "react";
import classNames from "classnames";

export const LandingPageBanner: FC = () => {
    return <div className={styles.banner}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={classNames(styles.title, "display3")}>Learn and Earn</h3>
                <p className={classNames(styles.subtitle, "headline5")}>
                    Discover free articles about software engineering, architecture and much more provided by the
                    community
                </p>
            </div>
            <span className={classNames(styles.logo)}>&lt;/&gt; </span>
        </div>
    </div>
}