import {Page} from "../../utils/PageWithLayout";
import {SignInSignUpLayout} from "../../components/layouts/signin-signup-layout/SigninSignupLayout.component";
import styles from "../../styles/signup/SignUp.module.scss";
import classNames from "classnames";
import ButtonType, {Button} from "../../components/buttons/Button.component";
import {Divider} from "../../components/divider/Divider.component";
import {PasswordValidator} from "../../components/password-validator/PasswordValidator.component";
import Facebook from "/public/assets/icons/social/facebook_round.svg";
import Google from "/public/assets/icons/social/google.svg";

export const SignUp: Page = () => {
    return <div className={styles.content}>
        <h3 className={classNames(styles.title, "headline2")}>Create Account</h3>
        <input className={styles.input} placeholder={"Email"}></input>
        <PasswordValidator/>
        <Button width={"100%"} type={ButtonType.primary} text={"Sign Up"}/>
        <Divider text={"or sign up with"}></Divider>
        <div className={styles.socialLinks}>
            <Facebook className={styles.socialLink}/>
            <Google className={styles.socialLink}/>
        </div>
        <span className={classNames("body-small", styles.termsAndPolicy)}>
            By signing up you accept our Terms and Conditions and Privacy Policy
        </span>
    </div>
}


SignUp.layout = SignInSignUpLayout;

export default SignUp;