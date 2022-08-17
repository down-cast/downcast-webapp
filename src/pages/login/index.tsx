import {Page} from "../../utils/PageWithLayout";
import {SigninSignupLayout} from "../../components/layouts/signin-signup-layout/SigninSignupLayout.component";
import styles from "../../styles/login/Login.module.scss";
import classNames from "classnames";
import ButtonType, {Button} from "../../components/buttons/Button.component";
import {Divider} from "../../components/divider/Divider.component";
import Facebook from "/public/assets/icons/social/facebook_round.svg";
import Google from "/public/assets/icons/social/google.svg";


const Login: Page = () => {
    return <div className={styles.content}>
        <h3 className={classNames(styles.title, "headline2")}>Welcome</h3>
        <input className={styles.input} placeholder={"Email"}></input>
        <div className={styles.password}>
            <input className={styles.input} placeholder={"Password"}></input>
            <Button type={ButtonType.text} text={"Forgot Password?"}/>
        </div>
        <Button width={"100%"} type={ButtonType.primary} text={"Sign In"}/>
        <Divider text={"or sign in with"}></Divider>
        <div className={styles.socialLinks}>
            <Facebook className={styles.socialLink}/>
            <Google className={styles.socialLink}/>
        </div>

    </div>
}

Login.layout = SigninSignupLayout


export default Login;