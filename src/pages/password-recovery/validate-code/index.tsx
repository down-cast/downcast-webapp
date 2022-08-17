import {Page} from "../../../utils/PageWithLayout";
import {SignInSignUpLayout} from "../../../components/layouts/signin-signup-layout/SigninSignupLayout.component";
import styles from "../../../styles/password-recovery/PasswordRecovery.module.scss";
import classNames from "classnames";
import ButtonType, {Button} from "../../../components/buttons/Button.component";

export const PwRecoveryValidate: Page = () => {
    return <div className={styles.content}>
        <h3 className={classNames(styles.title, "headline2")}>Password Recovery</h3>
        <span className={classNames(styles.description, "body-large")}>
            Insert the code sent to your email
        </span>
        <input className={styles.input} placeholder={"Code"}></input>
        <Button width={"100%"} type={ButtonType.primary} text={"Validate"}/>
    </div>
}

PwRecoveryValidate.layout = SignInSignUpLayout;

export default PwRecoveryValidate;