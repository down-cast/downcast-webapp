import {Component, useState} from "react";
import Check from "/public/assets/icons/check.svg";
import Cross from "/public/assets/icons/cross.svg";
import styles from "./PasswordValidator.module.scss";
import classNames from "classnames";

const requirements = new Map<string, RegExp>([
    ["At least 8 characters", new RegExp(".{8,}")],
    ["At least one digit", new RegExp("\\d+")],
]);

export function PasswordValidator() {
    const [password, setPassword] = useState("");
    return <div className={styles.content}>
        <input className={styles.input}
               placeholder={"Password"}
               inputMode={"text"}
               onChange={event => setPassword(event.target.value)}/>
        <div className={styles.requirements}>
            {Array.from(requirements.keys()).map(text => {
                return <PasswordRequirement key={text}
                                            password={password}
                                            text={text}
                                            regex={requirements.get(text)!}
                />;
            })}
        </div>
    </div>
}


class PasswordRequirement extends Component<{ password: string, text: string, regex: RegExp }> {
    render() {
        const isValid = this.props.regex.test(this.props.password);
        return <div className={styles.requirement}>
            {isValid
                ? <Check className={classNames(styles.check, styles.icon)}/>
                : <Cross className={classNames(styles.cross, styles.icon)}/>}
            <span className={"body-medium"}>{this.props.text}</span>
        </div>
    }
}


