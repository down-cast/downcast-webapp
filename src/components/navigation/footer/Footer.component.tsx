import {FC} from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import ButtonType, {Button} from "../../buttons/Button.component";

const Footer: FC = () => {
    return <footer className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.sections}>
                <section className={styles.section}>
                    <h5 className={classNames(styles.title, "headline5")}>About</h5>
                    <span className={"body-large"}>Send us an email</span>
                    <span className={"body-large"}>Contribute on Github</span>
                </section>
                <section className={styles.section}>
                    <h5 className={classNames(styles.title, "headline5")}>Newsletter</h5>
                    <span className={"body-large"}>Receive the latest articles each month</span>
                    <div className={styles.inputAndButton}>
                        <input className={classNames(styles.textInput, "body-large")} placeholder={"Email"}></input>
                        <Button type={ButtonType.primary} text={"Subscribe"}/>
                    </div>
                </section>
            </div>
            <span className={"body-large"}>LOGO, 2022</span>

        </div>
    </footer>;
};

export default Footer;
