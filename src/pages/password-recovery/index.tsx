import {Page} from "../../utils/PageWithLayout";
import {SigninSignupLayout} from "../../components/layouts/signin-signup-layout/SigninSignupLayout.component";
import styles from "../../styles/password-recovery/PasswordRecovery.module.scss";
import classNames from "classnames";
import ButtonType, {Button} from "../../components/buttons/Button.component";

export const PasswordRecovery: Page = () => {
    return <div className={styles.content}>
        <h3 className={classNames(styles.title, "headline2")}>Password Recovery</h3>
        <span className={classNames(styles.description, "body-large")}>Insert your email and if the user exists an email will be sent</span>
        <input className={styles.input} placeholder={"Email"}></input>
        <Button width={"100%"} type={ButtonType.primary} text={"Send Email"}/>
    </div>
}

PasswordRecovery.layout = SigninSignupLayout;

export default PasswordRecovery;