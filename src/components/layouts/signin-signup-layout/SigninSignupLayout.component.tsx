import {FC, PropsWithChildren} from "react";
import styles from "./SigninSignupLayout.module.scss";
import classNames from "classnames";

export const SignInSignUpLayout: FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.layout}>
        <div className={styles.content}>
            <div className={styles.leftSide}>
                <h3 className={classNames(styles.logo)}>&lt;/&gt;</h3>
                <p className={classNames(styles.message)}>
                    Join the community to learn and share
                    knowledge
                </p>
            </div>
            <div className={classNames(styles.rightSide)}>
                {children}
            </div>
        </div>
    </div>
}