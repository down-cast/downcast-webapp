import Image from "next/image";
import {FC} from "react";
import styles from "./NavBar.module.scss";
import ButtonType, {Button} from "../../buttons/Button.component";
import {NavItem} from "./nav-item/NavItem.component";

const NavBar: FC = () => {
    return (
        <nav className={styles.navBar}>
            <div className="headline3" style={{color: "var(--color-on-background)"}}>
                LOGO
            </div>
            <ul className={styles.navItems}>
                <NavItem text={"Guides"}></NavItem>
                <NavItem text={"Explore"} isActive={true}></NavItem>
                <NavItem text={"Contribute"}></NavItem>
                <NavItem text={"About"}></NavItem>
            </ul>
            <div className={styles.rightItems}>
                <Image alt="Search" src="/assets/icons/search.svg" height={32} width={32}/>
                <Image alt="Dark Mode" src="/assets/icons/moon.svg" height={32} width={32}/>
                <Button text={"Sign in"} type={ButtonType.text}/>
                <Button text={"Sign up"} type={ButtonType.primary}/>
            </div>
        </nav>
    );
};

export default NavBar;
