import {FC} from "react";
import styles from "./NavItem.module.scss";
import classNames from "classnames";

interface NavItemProps {
    text: string;
    isActive?: boolean;
}

export const NavItem: FC<NavItemProps> = ({text, isActive = false}) => {
    return <div className={classNames(
        styles.navItem,
        isActive && styles.active)}>
        {text}
    </div>
}