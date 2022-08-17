import {Page} from "../../../utils/PageWithLayout";
import {SignInSignUpLayout} from "../../../components/layouts/signin-signup-layout/SigninSignupLayout.component";
import styles from "../../../styles/password-recovery/PasswordRecovery.module.scss";
import classNames from "classnames";
import ButtonType, {Button} from "../../../components/buttons/Button.component";
import {PasswordValidator} from "../../../components/password-validator/PasswordValidator.component";


export const SetPassword: Page = () => {
    return <div className={styles.content}>
        <h3 className={classNames(styles.title, "headline2")}>Set Password</h3>
        <span className={classNames(styles.description, "body-large")}>
            Define a new password
        </span>
        <PasswordValidator/>
        <Button width={"100%"} type={ButtonType.primary} text={"Confirm"}/>
    </div>
}

SetPassword.layout = SignInSignUpLayout;
export default SetPassword;