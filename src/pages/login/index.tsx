import {Page} from "../../utils/PageWithLayout";
import {SigninSignupLayout} from "../../components/layouts/signin-signup-layout/SigninSignupLayout.component";
import styles from "../../styles/login/Login.module.scss";
import classNames from "classnames";
import ButtonType, {Button} from "../../components/buttons/Button.component";
import {Divider} from "../../components/divider/Divider.component";

const Login: Page = () => {
    return <div className={styles.content}>
        <h3 className={classNames(styles.title, "headline2")}>Welcome</h3>
        <input className={styles.input} placeholder={"Email"}></input>
        <div className={styles.password}>
            <input className={styles.input} placeholder={"Password"}></input>
            <Button type={ButtonType.text} text={"Forgot Password?"}/>
        </div>
        <Button width={"100%"} type={ButtonType.primary} text={"Sign In"}/>
        <Divider text={"or Sign In with"}></Divider>
    </div>
}

Login.layout = SigninSignupLayout


export default Login;