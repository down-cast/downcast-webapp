import Image from "next/image";
import {FC} from "react";
import styles from "./NavBar.module.scss";
import ButtonType, {Button} from "../../buttons/Button.component";

const NavBar: FC = () => {
    return (
        <nav className={styles.navBar}>
            <div className="headline3">LOGO</div>
            <ul className={styles.navItems}>
                <li>Guides</li>
                <li>Explore</li>
                <li>Contribute</li>
                <li>About</li>
            </ul>
            <div className={styles.rightItems}>
                <Image alt="Search" src="/assets/icons/search.svg" height={32} width={32}/>
                <Image alt="Dark Mode" src="/assets/icons/moon.svg" height={32} width={32}/>
                <Button text={"Sign in"} type={ButtonType.text}/>
                <Button text={"Sign up"} type={ButtonType.primary}/>
                <Button text={"Sign up"} type={ButtonType.secondary}/>
            </div>
        </nav>
    );
};

export default NavBar;
